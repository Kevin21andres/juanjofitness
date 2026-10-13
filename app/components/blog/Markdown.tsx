"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import {mediaUrl} from "@/lib/blog-types";

function inline(text: string): ReactNode[] {
  const pieces = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\((?:https?:\/\/[^\s)]+|\/[^\s)]+)\))/g);
  return pieces.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={idx}>{part.slice(2, -2)}</strong>;
    const link = /^\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)$/.exec(part);
    if (link) return <a key={idx} href={link[2]} rel="noopener noreferrer" className="text-[#1E90FF] underline hover:text-blue-700">{link[1]}</a>;
    return part;
  });
}
/** Minimal, deliberately HTML-free Markdown, so untrusted article text cannot inject HTML. */
export default function Markdown({ body }: { body: string }) {
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  const elements: ReactNode[] = [];
  let paragraph: string[] = [];
  let bullets: string[] = [];
  let ordered: string[] = [];
  function flush() {
    if (paragraph.length) { elements.push(<p key={elements.length} className="mb-6 leading-8 text-slate-700">{inline(paragraph.join(" "))}</p>); paragraph = []; }
    if (bullets.length) { elements.push(<ul key={elements.length} className="mb-6 list-disc space-y-2 pl-6 text-slate-700">{bullets.map((x, i) => <li key={i}>{inline(x)}</li>)}</ul>); bullets = []; }
    if (ordered.length) { elements.push(<ol key={elements.length} className="mb-6 list-decimal space-y-2 pl-6 text-slate-700">{ordered.map((x, i) => <li key={i}>{inline(x)}</li>)}</ol>); ordered = []; }
  }
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    const image = /^!\[([^\]]{0,160})\]\((\/blog\/(?:uploads|covers)\/[\w.-]+\.(?:webp|png|jpe?g))\)$/.exec(line);
    if (image) { flush(); elements.push(<figure key={elements.length} className="my-8"><Image src={mediaUrl(image[2])} unoptimized={image[2].startsWith("/blog/uploads/")} alt={image[1]} width={1000} height={650} sizes="(max-width: 768px) 100vw, 800px" className="h-auto w-full rounded-2xl object-cover"/>{image[1] && <figcaption className="mt-2 text-center text-sm text-slate-500">{image[1]}</figcaption>}</figure>); continue; }
    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) { flush(); const cl = "mb-4 mt-10 font-extrabold text-slate-950"; const content = inline(heading[2]); elements.push(heading[1].length === 1 ? <h2 key={elements.length} className={cl + " text-3xl"}>{content}</h2> : heading[1].length === 2 ? <h2 key={elements.length} className={cl + " text-2xl"}>{content}</h2> : <h3 key={elements.length} className={cl + " text-xl"}>{content}</h3>); continue; }
    if (/^[-*]\s+/.test(line)) { if (paragraph.length || ordered.length) flush(); bullets.push(line.replace(/^[-*]\s+/, "")); continue; }
    if (/^\d+\.\s+/.test(line)) { if (paragraph.length || bullets.length) flush(); ordered.push(line.replace(/^\d+\.\s+/, "")); continue; }
    if (/^>\s+/.test(line)) { flush(); elements.push(<blockquote key={elements.length} className="my-8 border-l-4 border-[#1E90FF] bg-slate-50 p-5 text-lg italic text-slate-700">{inline(line.slice(2))}</blockquote>); continue; }
    if (bullets.length || ordered.length) flush();
    paragraph.push(line);
  }
  flush();
  return <div className="text-base">{elements}</div>;
}
