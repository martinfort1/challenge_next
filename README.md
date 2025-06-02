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
- Validación de formulario con Zod
- Almacenamiento temporal en memoria (array de objetos)

---

## 📦 Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/martinfort1/challenge_next.git
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
  /page.tsx                  → Página con lista de mensajes
  /new/page.tsx              → Página con el formulario
  /layout.tsx                → Layout de la página
/components
  Header.tsx                 → Encabezado con imagen/logo
  ListaMensajes.tsx          → Componente para renderizar tabla
  columns.tsx                → Definición de columnas de la tabla
  DataTable.tsx              → Tabla creada con tanstack
  /ui                        → Carpeta con componentes de shadcn/ui
/public
  /komuk_edit.JPG            → Imagen mostrada en el header
  /favicon.ico               → Icono de la pestaña
```

---

## ⚠️ Nota

Este proyecto almacena los mensajes **solo en memoria**. Cada vez que se reinicie el servidor, los mensajes se perderán.
