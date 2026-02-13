# Portfolio - Desarrollador Jr.

Portfolio personal diseñado para posiciones junior/trainee en tecnología.

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Cómo editar

### 1. Información personal

Edita los siguientes archivos para reemplazar los placeholders:

- **`src/app/layout.tsx`**: Cambia el título y descripción en `metadata`
- **`src/components/Navbar.tsx`**: Reemplaza `[Tu Nombre]` en el logo
- **`src/components/Hero.tsx`**: Reemplaza `[Tu Nombre]` y el mensaje
- **`src/components/About.tsx`**: Escribe tu descripción profesional
- **`src/components/Contact.tsx`**: Actualiza tus links de contacto

### 2. Proyectos

Edita **`src/components/Projects.tsx`** para agregar tus proyectos:

```typescript
{
  title: "Nombre del Proyecto",
  description: "Descripción breve",
  problem: "Problema que resuelve",
  solution: "Cómo lo implementaste",
  technologies: ["Tech1", "Tech2"],
  learnings: "Qué aprendiste",
  link: "URL al repositorio",
}
```

### 3. Skills

Edita **`src/components/Skills.tsx`** para actualizar tus habilidades.

### 4. Colores

Los colores están definidos en **`src/app/globals.css`** usando variables CSS.
Puedes modificar los colores en `:root` para personalizar el tema.

## Desarrollo local

```bash
cd portfolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

1. Sube el código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa el repositorio
4. Deploy automático

## Estructura

```
src/
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
└── components/
    ├── Navbar.tsx       # Navegación
    ├── Hero.tsx         # Sección inicio
    ├── About.tsx        # Sobre mí
    ├── Projects.tsx     # Proyectos
    ├── Skills.tsx      # Habilidades
    ├── Contact.tsx      # Contacto
    └── Footer.tsx       # Pie de página
```
