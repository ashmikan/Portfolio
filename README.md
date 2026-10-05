# 🌟 Ashmika Nathali — Developer Portfolio

A modern, responsive, and animated personal portfolio website designed and developed to showcase full-stack software development projects, technical skills, and design expertise.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **🎨 Modern Glassmorphic Design**: Clean aesthetic with sleek dark/light mode toggle powered by `next-themes`.
- **⚡ High Performance**: Bundled with Vite for instant Hot Module Replacement (HMR) and optimized production builds.
- **🎬 Fluid Animations**: Micro-interactions, scroll-triggered reveals, and floating elements crafted with Framer Motion.
- **📱 Fully Responsive**: Tailored layout with custom breakpoints for desktop, tablet, and mobile displays.
- **📬 Interactive Contact Form**: Serverless email delivery using **Web3Forms** with client-side validation and feedback toasts.
- **💼 Project Showcase**: Highlights full-stack, AI, and frontend applications with repository links and technology badges.
- **🛠️ Testing Ready**: Integrated with **Vitest**, **React Testing Library**, and **Playwright**.

---

## 🛠️ Tech Stack

### Core & Framework
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)

### Styling & UI
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark / Light)
- **UI Components & Utilities**: Radix UI Primitives, `clsx`, `tailwind-merge`, `class-variance-authority`

### Testing
- **Unit & Integration**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)
- **E2E Testing**: [Playwright](https://playwright.dev/)

---

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets and icons
├── src/
│   ├── assets/             # Images, project screenshots, and media
│   ├── components/         # Reusable UI & section components
│   │   ├── ui/             # Primitive UI components (toasts, tooltips, buttons)
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SectionTransition.tsx
│   │   ├── SkillsSection.tsx
│   │   └── theme-provider.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility helpers (cn, etc.)
│   ├── pages/              # Page layouts (Index, NotFound)
│   ├── App.tsx             # Main application layout and routes
│   ├── index.css           # Global Tailwind and CSS variable tokens
│   └── main.tsx            # Application entry point
├── .env.example            # Environment variable template
├── package.json            # Dependencies and npm scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have one of the following installed:
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), or [Bun](https://bun.sh/)

### 1. Clone the Repository

```bash
git clone https://github.com/ashmikan/Portfolio.git
cd portfolio
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Bun:
```bash
bun install
```

### 3. Configure Environment Variables

The contact form is wired to [Web3Forms](https://web3forms.com) for direct email delivery.

1. Obtain a free access key from [web3forms.com](https://web3forms.com).
2. Copy the example `.env` file:

```bash
cp .env.example .env
```

3. Open `.env` and set your key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
```

> **Note**: If `VITE_WEB3FORMS_ACCESS_KEY` is not provided, the contact form will notify users to configure the key before submitting.

### 4. Run Development Server

```bash
npm start
```
or
```bash
npx vite
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm start` | Starts the local development server with Vite |
| `npm run build` | Compiles TypeScript and creates an optimized production bundle in `dist/` |
| `npm run preview` | Locally previews the production build created in `dist/` |
| `npm test` | Executes test suites using Vitest |

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Set the Framework Preset to **Vite**.
4. Add the `VITE_WEB3FORMS_ACCESS_KEY` under **Environment Variables**.
5. Deploy.

### Netlify
1. Connect your repository on [Netlify](https://www.netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Add `VITE_WEB3FORMS_ACCESS_KEY` in site settings.
4. Deploy.

---

## 👤 Author

**Ashmika Nathali**
- **Location**: Kalutara, Sri Lanka
- **GitHub**: [@ashmikan](https://github.com/ashmikan)
- **LinkedIn**: [ashmika-nathali](https://www.linkedin.com/in/ashmika-nathali/)
- **Medium**: [@ashmikanathali246](https://medium.com/@ashmikanathali246)
- **Email**: [ashmika.nathali123@gmail.com](mailto:ashmika.nathali123@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
