# Juanjo Fitness — JJHP

Web comercial y CMS de blog desarrollado en Next.js 16, React 19 y Tailwind CSS 4.

## Desarrollo
```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Administración
Acceso en `/admin/login`. El panel permite crear, editar y borrar artículos, guardar borradores, publicar, incorporar fotografías en el texto Markdown y subir portadas. Las entradas e imágenes se escriben en GitHub, y Vercel debe desplegar la rama configurada para publicarlas.

Configura en Vercel (Environment Variables, nunca en el repositorio):

- `ADMIN_PASSWORD_HASH`: hash scrypt de la contraseña de Juanjo.
- `ADMIN_SESSION_SECRET`: secreto aleatorio de al menos 32 caracteres.
- `GITHUB_TOKEN`: token de acceso de GitHub con permisos **Contents: read/write**, exclusivo para este repositorio.
- `GITHUB_REPO`: `Kevin21andres/juanjofitness`.
- `GITHUB_BRANCH`: `main` tras fusionar la rama de desarrollo.

Para generar los dos secretos en tu equipo:
```bash
node -e 'const c=require("node:crypto");const s=c.randomBytes(16);const pw=process.env.JJHP_PASSWORD;if(!pw)throw Error("Define JJHP_PASSWORD");console.log("scrypt$"+s.toString("hex")+"$"+c.scryptSync(pw,s,64).toString("hex"));'
node -e 'console.log(require("node:crypto").randomBytes(32).toString("hex"))'
```
Establece `JJHP_PASSWORD` solo en tu terminal para generar el hash, no en Vercel. No guardes la contraseña sin cifrar.

**Seguridad operativa:** protege `/admin/login` con un WAF/rate limit en Vercel para evitar intentos masivos de contraseña. Usa una contraseña larga, un token de alcance mínimo y revócalo al dejar de utilizar el panel. Mantén protegida la rama `main` y habilita revisiones del historial de cambios. Los cambios se publican cuando termina el despliegue, no en el instante de pulsar Guardar.

Los artículos son documentos JSON dentro de `content/posts/`. Solo los que tienen `status: "published"` se muestran al público. La aplicación nunca ejecuta HTML arbitrario incluido en los artículos. Las imágenes admiten JPG, PNG y WebP, hasta 2 MB, y se guardan en `public/blog/uploads/`.

## Antes de pasar a producción
1. Configurar secretos y limitar acceso al panel.
2. Comprobar el build en CI y los flujos de inicio de sesión, publicación y carga de fotografías.
3. Comprobar que Vercel despliega los nuevos commits hechos por el token elegido.
4. Validar datos, fotografías y textos legales con el titular del negocio.
