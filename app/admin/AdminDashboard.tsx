"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CATEGORIES, mediaUrl, slugify, type BlogPost } from "@/lib/blog-types";
import Markdown from "@/app/components/blog/Markdown";

type Draft = BlogPost;
const today = () => new Date().toISOString().slice(0, 10);
const empty = (): Draft => ({
  slug: "", title: "", excerpt: "", body: "", cover: "", date: today(),
  updatedAt: new Date().toISOString(), status: "draft", category: "Entrenamiento",
  author: "Juanjo Hidalgo", tags: [],
});

const fieldClass = "mt-2 min-h-12 w-full border border-[#bec9cd] bg-white px-4 py-3 text-sm font-medium text-[#0b1115] placeholder:text-[#82909a] disabled:bg-[#f4f5f3] disabled:text-[#5a696f]";
const labelClass = "block text-sm font-extrabold text-[#0b1115]";

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState<Draft>(empty);
  const [original, setOriginal] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);
  const [tagText, setTagText] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function initialLoad() {
      try {
        const response = await fetch("/api/admin/posts", { cache: "no-store", signal: controller.signal });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "No se pudieron cargar las publicaciones.");
        if (!controller.signal.aborted) setPosts(data.posts);
      } catch (cause) {
        if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : "Error al cargar.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    void initialLoad();
    return () => controller.abort();
  }, []);

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => setForm(old => ({ ...old, [key]: value }));

  async function reload() {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/posts", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "No se pudieron cargar las publicaciones.");
      setPosts(data.posts);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Error al cargar.");
    } finally {
      setLoading(false);
    }
  }

  function edit(post: BlogPost) {
    setForm({ ...post });
    setTagText(post.tags.join(", "));
    setOriginal(post.slug);
    setError("");
    setMessage("");
    setPreview(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function fresh() {
    setForm(empty());
    setOriginal(null);
    setTagText("");
    setError("");
    setMessage("");
    setPreview(false);
  }

  async function save(event: FormEvent) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const body = {
        ...form,
        slug: form.slug || slugify(form.title),
        updatedAt: new Date().toISOString(),
        tags: tagText.split(",").map(tag => tag.trim()).filter(Boolean),
      };
      const response = await fetch(
        original ? "/api/admin/posts/" + original : "/api/admin/posts",
        {
          method: original ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "No se ha podido guardar.");
      setForm({ ...data.post });
      setOriginal(data.post.slug);
      setTagText(data.post.tags.join(", "));
      setMessage(data.post.status === "published"
        ? "Publicación guardada. Ya está disponible en el blog; en producción puede tardar unos segundos en actualizarse."
        : "Borrador guardado. Solo es visible desde este panel.");
      await reload();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Error al guardar.");
    } finally {
      setBusy(false);
    }
  }

  async function remove(post: BlogPost) {
    if (!window.confirm("¿Eliminar definitivamente «" + post.title + "»?")) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch("/api/admin/posts/" + post.slug, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "No se ha podido eliminar.");
      if (original === post.slug) fresh();
      setMessage("Publicación eliminada.");
      await reload();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Error al eliminar.");
    } finally {
      setBusy(false);
    }
  }

  async function upload(event: ChangeEvent<HTMLInputElement>, cover: boolean) {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 2 * 1024 * 1024) {
      setError("La fotografía debe ser JPG, PNG o WebP y no superar los 2 MB.");
      return;
    }
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "No se ha podido subir la fotografía.");
      if (cover) set("cover", data.url);
      else setForm(old => ({
        ...old,
        body: old.body + (old.body ? "\n\n" : "") + "![Descripción de la fotografía](" + data.url + ")",
      }));
      setMessage(cover
        ? "Portada subida. Guarda la publicación para que aparezca en el blog."
        : "Fotografía añadida al texto. Puedes verla en «Vista previa».");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "No se pudo subir la fotografía.");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  const publishedCount = posts.filter(post => post.status === "published").length;

  return (
    <main className="min-h-screen bg-[#f2f0ea] pt-[var(--header-height)] text-[#0b1115]">
      <div className="border-b border-[#d7d8d2] bg-white">
        <div className="site-container flex flex-wrap items-center justify-between gap-6 py-9 sm:py-11">
          <div>
            <p className="kicker">JJHP / Área privada</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">Editor del blog</h1>
            <p className="mt-2 text-sm text-[#51616a]">Redacta, organiza y publica contenido desde un solo lugar.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/blog" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center border border-[#cbd4d8] px-4 text-sm font-bold hover:bg-[#f2f0ea]">Ver blog ↗</Link>
            <button type="button" onClick={() => void logout()} className="inline-flex min-h-11 items-center border border-[#cbd4d8] px-4 text-sm font-bold hover:bg-[#f2f0ea]">Cerrar sesión</button>
          </div>
        </div>
      </div>

      <div className="site-container pb-24 pt-9">
        <div className="mb-7 flex flex-wrap gap-6 border-b border-[#d1d5d2] pb-6">
          <div><span className="text-2xl font-extrabold">{posts.length}</span><span className="ml-2 text-xs font-bold text-[#5a696f]">Artículos</span></div>
          <div><span className="text-2xl font-extrabold">{publishedCount}</span><span className="ml-2 text-xs font-bold text-[#5a696f]">Publicados</span></div>
          <div><span className="text-2xl font-extrabold">{posts.length - publishedCount}</span><span className="ml-2 text-xs font-bold text-[#5a696f]">Borradores</span></div>
        </div>

        {error && <p role="alert" className="mb-5 border-l-4 border-[#b32e2e] bg-[#fff1f1] px-5 py-4 text-sm font-bold text-[#822323]">{error}</p>}
        {message && <p role="status" className="mb-5 border-l-4 border-[#077c92] bg-[#e8f4fd] px-5 py-4 text-sm font-semibold text-[#174d72]">{message}</p>}

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_325px] xl:gap-10">
          <section className="min-w-0 border border-[#d7d8d2] bg-white p-5 sm:p-9" aria-labelledby="editor-heading">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#d7d8d2] pb-6">
              <div>
                <p className="kicker">{original ? "Editando" : "Nuevo contenido"}</p>
                <h2 id="editor-heading" className="mt-2 text-2xl font-extrabold tracking-tight">{original ? "Editar publicación" : "Crear publicación"}</h2>
              </div>
              <button type="button" onClick={fresh} disabled={busy} className="min-h-11 border border-[#d7d8d2] px-4 text-sm font-bold hover:bg-[#f2f0ea] disabled:opacity-50">+ Nuevo artículo</button>
            </div>

            <form onSubmit={event => void save(event)} className="space-y-7">
              <label className={labelClass}>
                Título del artículo <span className="text-[#077c92]">*</span>
                <input required maxLength={120} value={form.title} onChange={event => {
                  const title = event.target.value;
                  setForm(old => ({ ...old, title, slug: original ? old.slug : slugify(title) }));
                }} placeholder="Ej. Cómo organizar tu entrenamiento" className={fieldClass}/>
              </label>

              <label className={labelClass}>
                Enlace permanente
                <input required disabled={Boolean(original)} maxLength={90} value={form.slug}
                  onChange={event => set("slug", event.target.value)} className={fieldClass}/>
                <span className="mt-2 block text-xs font-medium leading-5 text-[#5a696f]">Se genera automáticamente a partir del título. No puede cambiarse tras publicar.</span>
              </label>

              <label className={labelClass}>
                Resumen <span className="text-[#077c92]">*</span>
                <textarea required maxLength={400} rows={3} value={form.excerpt}
                  onChange={event => set("excerpt", event.target.value)} placeholder="Resume lo que aprenderá el lector..." className={fieldClass}/>
                <span className="mt-2 block text-right text-xs font-medium text-[#5a696f]">{form.excerpt.length}/400</span>
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>
                  Categoría
                  <select value={form.category} onChange={event => set("category", event.target.value as Draft["category"])} className={fieldClass}>
                    {CATEGORIES.map(category => <option key={category}>{category}</option>)}
                  </select>
                </label>
                <label className={labelClass}>
                  Visibilidad
                  <select value={form.status} onChange={event => set("status", event.target.value as Draft["status"])} className={fieldClass}>
                    <option value="draft">Borrador (privado)</option>
                    <option value="published">Publicado (público)</option>
                  </select>
                </label>
                <label className={labelClass}>
                  Fecha de publicación
                  <input type="date" value={form.date} onChange={event => set("date", event.target.value)} className={fieldClass}/>
                </label>
                <label className={labelClass}>
                  Autor
                  <input required maxLength={100} value={form.author} onChange={event => set("author", event.target.value)} className={fieldClass}/>
                </label>
              </div>

              <label className={labelClass}>
                Etiquetas
                <input value={tagText} onChange={event => setTagText(event.target.value)}
                  placeholder="Entrenamiento, hábitos, nutrición" className={fieldClass}/>
                <span className="mt-2 block text-xs font-medium text-[#5a696f]">Sepáralas por comas. Máximo 12.</span>
              </label>

              <div className="border border-[#d7d8d2] bg-[#f2f0ea] p-5">
                <p className={labelClass}>Imagen de portada</p>
                <p className="mt-2 text-xs leading-5 text-[#5a696f]">JPG, PNG o WebP · Hasta 2 MB.</p>
                <input type="file" aria-label="Seleccionar fotografía de portada" accept="image/jpeg,image/png,image/webp"
                  disabled={busy} onChange={event => void upload(event, true)}
                  className="mt-4 block w-full text-sm file:mr-4 file:cursor-pointer file:border-0 file:bg-[#0b1115] file:px-4 file:py-3 file:text-xs file:font-bold file:text-white"/>
                {form.cover && <div className="mt-6">
                  <Image alt="Previsualización de la portada" src={mediaUrl(form.cover)} width={560} height={360} unoptimized
                    className="aspect-[16/9] w-full max-w-md border border-[#d7d8d2] object-cover"/>
                  <p className="mt-2 break-all text-xs text-[#5a696f]">{form.cover}</p>
                </div>}
              </div>

              <div>
                <label htmlFor="blog-body" className={labelClass}>Contenido del artículo <span className="text-[#077c92]">*</span></label>
                <p className="mt-2 text-xs leading-6 text-[#5a696f]">Para los títulos utiliza ##, para las listas utiliza - y para resaltar texto utiliza **negrita**.</p>
                <textarea id="blog-body" required maxLength={80000} rows={17} value={form.body}
                  onChange={event => set("body", event.target.value)}
                  placeholder={"## Tu primer apartado\n\nEscribe aquí tu artículo...\n\n- Primer punto\n- Segundo punto"}
                  className={fieldClass + " mt-4 leading-7"}/>
              </div>

              <div className="border border-[#d7d8d2] bg-[#f2f0ea] p-5">
                <p className={labelClass}>Fotografías en el artículo</p>
                <p className="mt-2 text-xs leading-6 text-[#5a696f]">Selecciona una imagen para añadirla al final del texto. Podrás moverla al lugar que prefieras.</p>
                <input type="file" aria-label="Añadir fotografía al artículo" accept="image/jpeg,image/png,image/webp"
                  disabled={busy} onChange={event => void upload(event, false)}
                  className="mt-4 block w-full text-sm file:mr-4 file:cursor-pointer file:border-0 file:bg-[#0b1115] file:px-4 file:py-3 file:text-xs file:font-bold file:text-white"/>
              </div>

              <div>
                <button type="button" aria-expanded={preview} onClick={() => setPreview(current => !current)}
                  className="inline-flex min-h-11 items-center border border-[#bdc8ce] px-5 text-sm font-extrabold hover:bg-[#f2f0ea]">
                  {preview ? "Ocultar vista previa ↑" : "Vista previa del contenido ↗"}
                </button>
                {preview && <div className="mt-5 border border-[#d7d8d2] bg-[#f2f0ea] p-5 sm:p-7">
                  {form.body.trim() ? <Markdown body={form.body}/> : <p className="text-sm text-[#5a696f]">Escribe contenido para ver la vista previa.</p>}
                </div>}
              </div>

              <div className="flex flex-col gap-4 border-t border-[#d7d8d2] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-6 text-[#5a696f]">{form.status === "draft" ? "Este artículo no será visible públicamente." : "Este artículo podrá verse desde el blog público."}</p>
                <button type="submit" disabled={busy} className="action-primary w-full disabled:opacity-50 sm:w-auto">
                  {busy ? "Procesando…" : original ? "Guardar cambios" : form.status === "draft" ? "Guardar borrador" : "Publicar artículo"}
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>
          </section>

          <aside aria-labelledby="post-list-heading" className="order-first border border-[#d7d8d2] bg-white p-5 sm:p-7 lg:order-last lg:sticky lg:top-[calc(var(--header-height)+24px)]">
            <div className="flex items-center justify-between gap-3 border-b border-[#d7d8d2] pb-5">
              <h2 id="post-list-heading" className="text-lg font-extrabold">Publicaciones</h2>
              <button type="button" disabled={loading} onClick={() => void reload()} className="min-h-10 text-xs font-extrabold text-[#077c92] disabled:opacity-60">Actualizar</button>
            </div>
            {loading ? (
              <p aria-live="polite" className="py-6 text-sm text-[#5a696f]">Cargando artículos…</p>
            ) : posts.length === 0 ? (
              <p className="py-6 text-sm leading-6 text-[#5a696f]">Todavía no hay publicaciones. Crea la primera desde el editor.</p>
            ) : (
              <ul className="max-h-[550px] divide-y divide-[#d7d8d2] overflow-y-auto">
                {posts.map(post => (
                  <li key={post.slug} className="py-5">
                    <p className="text-sm font-extrabold leading-6">{post.title}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className={"px-2 py-1 font-extrabold " + (post.status === "published" ? "bg-[#e6f4ed] text-[#23664b]" : "bg-[#f0f1f0] text-[#57636a]")}>
                        {post.status === "published" ? "Publicado" : "Borrador"}
                      </span>
                      <time dateTime={post.date} className="text-[#5a696f]">{post.date}</time>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                      <button type="button" disabled={busy} onClick={() => edit(post)}
                        className="min-h-10 text-xs font-extrabold text-[#077c92] disabled:opacity-50">Editar</button>
                      {post.status === "published" &&
                        <Link href={"/blog/" + post.slug} target="_blank" rel="noopener noreferrer" className="text-xs font-extrabold text-[#51616a]">Ver ↗</Link>}
                      <button type="button" disabled={busy} onClick={() => void remove(post)}
                        className="min-h-10 text-xs font-extrabold text-[#a83737] disabled:opacity-50">Eliminar</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
