# 📖 Libro de Visitas

Una pequeña aplicación web construida con Next.js, TypeScript y ShadCN UI, que permite a los usuarios dejar un mensaje y ver mensajes anteriores. Los datos se almacenan temporalmente en memoria.

---

## 🚀 Tecnologías utilizadas

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [Zod](https://zod.dev/) – Validación de formularios
- Fetch API para la comunicación con endpoints

---

## 🧰 Funcionalidades

- Ver mensajes previamente enviados (`GET /api/messages`)
- Enviar un nuevo mensaje (`POST /api/messages`)
- Validación con Zod
- Interfaz adaptable con soporte para dark mode
- Almacenamiento temporal en memoria (array)

---

## 📦 Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tuusuario/libro-de-visitas.git
   cd libro-de-visitas
   ```

2. Instalá las dependencias:
   ```bash
   npm install # o npm install / yarn install
   ```

3. Ejecutá el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrí tu navegador en: [http://localhost:3000](http://localhost:3000)

---

## 🔧 Endpoints de la API

### `GET /api/messages`
Retorna todos los mensajes guardados en memoria.

#### Respuesta:
```json
[
  {
    "nombre": "Juan Perez",
    "mensaje": "¡Gran servicio!",
    "fecha": "2025-05-29T14:22:31.447Z"
  },
  ...
]
```

---

### `POST /api/messages`
Crea un nuevo mensaje. Espera un `JSON` con:

```json
{
  "nombre": "Tu nombre",
  "mensaje": "Tu mensaje"
}
```

---

## 🗂 Estructura de carpetas

```
/app
  /api/messages/route.ts     → Endpoint GET/POST
  /mensajes/page.tsx         → Página con tabla de mensajes
  /formulario/page.tsx       → Página con el formulario
/components
  Header.tsx                 → Encabezado con imagen/logo
  MessageForm.tsx            → Formulario con validación Zod
/public
  /komuk_edit.JPG            → Imagen mostrada en el header
  /favicon.ico               → Icono de la pestaña
```

---

## ⚠️ Nota

Este proyecto almacena los mensajes **solo en memoria**. Cada vez que se reinicie el servidor, los mensajes se perderán. Para un proyecto en producción, se recomienda usar una base de datos como PostgreSQL, MongoDB o SQLite.

---

## 📄 Licencia

MIT © [Tu Nombre]