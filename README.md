<div align="center">

<!-- Animated Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366f1,50:8b5cf6,100:06b6d4&height=220&section=header&text=Puspal%20Das&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Backend%20%26%20MERN%20Stack%20Developer&descSize=20&descAlignY=55&descAlign=50" width="100%" />

<br/>

<!-- Typing Animation -->
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=600&size=28&duration=3000&pause=1000&color=8B5CF6&center=true&vCenter=true&multiline=true&repeat=true&random=false&width=700&height=100&lines=%F0%9F%9A%80+Building+Scalable+Backend+Systems;%F0%9F%92%BB+Crafting+Modern+MERN+Applications;%E2%9A%A1+Engineering+Robust+APIs+%26+Services" alt="Typing SVG" /></a>

<br/>

<!-- Badges -->
[![Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-Visit_Site-6366f1?style=for-the-badge&labelColor=1e1b4b)](https://puspal-portfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/puspal-das-995933253/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Puspaldas17)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/PuspalDas17)

<br/>

<!-- Metrics -->
![Stars](https://img.shields.io/github/stars/Puspaldas17/Puspal-Portfolio?style=flat-square&color=f59e0b&label=⭐%20Stars)
![Forks](https://img.shields.io/github/forks/Puspaldas17/Puspal-Portfolio?style=flat-square&color=6366f1&label=🔱%20Forks)
![Issues](https://img.shields.io/github/issues/Puspaldas17/Puspal-Portfolio?style=flat-square&color=ef4444&label=🐛%20Issues)
![License](https://img.shields.io/github/license/Puspaldas17/Puspal-Portfolio?style=flat-square&color=10b981&label=📄%20License)
![Last Commit](https://img.shields.io/github/last-commit/Puspaldas17/Puspal-Portfolio?style=flat-square&color=8b5cf6&label=📅%20Last%20Commit)

</div>

---

<br/>

## 🎯 About This Project

> *A blazing-fast, modern portfolio website showcasing my skills, projects, and experience — built with performance, accessibility, and visual polish at its core.*

This isn't just another portfolio template. It's a **fully custom-built**, production-grade web application featuring:

- ✨ **Glassmorphism UI** with animated gradient backgrounds
- 🎭 **Scroll-triggered reveal animations** with staggered timing
- 🌊 **Morphing blob backgrounds** and parallax effects
- ⌨️ **Typing effect** cycling through developer roles
- 🌍 **Multi-language support** (English & Spanish)
- 🎨 **5 color themes** with dark/light mode toggle
- 📱 **Fully responsive** across all device sizes
- ♿ **Accessibility-first** with semantic HTML
- ⚡ **Lighthouse 90+** performance score

<br/>

<div align="center">

```
  ╔══════════════════════════════════════════════════════════╗
  ║                                                          ║
  ║   "Code is poetry, and architecture is its rhythm."      ║
  ║                                        — Puspal Das      ║
  ║                                                          ║
  ╚══════════════════════════════════════════════════════════╝
```

</div>

<br/>

---

## 🏗️ Architecture & Project Structure

```
Puspal-Portfolio/
│
├── 📦 public/                    # Static assets
│   ├── robots.txt                # SEO crawler config
│   └── lovable-uploads/          # Uploaded media assets
│
├── 🔧 src/
│   ├── 📄 App.tsx                # Root application component
│   ├── 🎨 index.css              # Global styles & design system
│   ├── 🚀 main.tsx               # Application entry point
│   │
│   ├── 🖼️ assets/
│   │   └── images/               # Image asset barrel exports
│   │
│   ├── 🧩 components/
│   │   ├── BackgroundEffects.tsx  # Animated particle background
│   │   ├── ChatWidget.tsx        # Interactive contact widget
│   │   ├── CursorEffects.tsx     # Custom cursor animations
│   │   ├── ErrorBoundary.tsx     # React error boundary
│   │   ├── LanguageSwitcher.tsx  # i18n language toggle
│   │   ├── LoadingScreen.tsx     # Animated loading splash
│   │   ├── Resume.tsx            # Resume/CV viewer
│   │   ├── SectionHeader.tsx     # Reusable animated headers
│   │   │
│   │   ├── 📐 layout/
│   │   │   ├── Header.tsx        # Nav with active section tracking
│   │   │   └── Footer.tsx        # Footer with social links
│   │   │
│   │   ├── 📑 sections/
│   │   │   ├── Hero.tsx          # Animated hero with typing effect
│   │   │   ├── About.tsx         # About me with scroll reveals
│   │   │   ├── Skills.tsx        # Tech stack with stagger animations
│   │   │   ├── Services.tsx      # Service offerings
│   │   │   ├── Stats.tsx         # Statistics counters
│   │   │   ├── WorkProcess.tsx   # Development workflow
│   │   │   ├── Portfolio.tsx     # Project showcase (GitHub API)
│   │   │   ├── GitHubActivity.tsx # Live GitHub contribution data
│   │   │   ├── Blog.tsx          # Technical articles
│   │   │   ├── Testimonials.tsx  # Client testimonials
│   │   │   └── Contact.tsx       # Contact form
│   │   │
│   │   └── 🎨 ui/               # shadcn/ui component library
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── theme-toggle.tsx
│   │       ├── theme-customizer.tsx
│   │       ├── timeline.tsx
│   │       └── ...               # 40+ UI primitives
│   │
│   ├── 🪝 hooks/
│   │   ├── use-cursor.tsx        # Custom cursor state
│   │   ├── use-mobile.tsx        # Responsive breakpoint hook
│   │   ├── use-parallax.tsx      # Parallax scroll transforms
│   │   ├── use-scroll-animation.tsx  # Scroll-based animations
│   │   ├── use-scroll-reveal.tsx # IntersectionObserver reveals
│   │   └── use-toast.ts         # Toast notification hook
│   │
│   ├── 🌍 i18n/
│   │   ├── config.ts            # i18next configuration
│   │   └── locales/
│   │       ├── en.json           # English translations
│   │       └── es.json           # Spanish translations
│   │
│   ├── 📚 lib/
│   │   └── utils.ts             # Utility functions (cn, etc.)
│   │
│   ├── 📄 pages/
│   │   ├── Index.tsx             # Main portfolio page
│   │   ├── ResumePage.tsx        # Dedicated resume page
│   │   └── NotFound.tsx          # 404 error page
│   │
│   └── 📝 types/
│       └── index.ts              # Global TypeScript definitions
│
├── ⚙️ vite.config.ts             # Vite build configuration
├── 🎨 tailwind.config.ts         # Tailwind CSS + custom animations
├── 📦 package.json               # Dependencies & scripts
└── 🔧 tsconfig.app.json          # TypeScript config (browser)
```

<br/>

---

## ⚡ Tech Stack

<div align="center">

| Layer | Technologies |
|:---:|:---|
| **Frontend** | ![React](https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript_5.8-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS_3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| **UI Library** | ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white) ![Radix](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radixui&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square&logo=lucide&logoColor=white) |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=flat-square&logo=vite&logoColor=white) ![SWC](https://img.shields.io/badge/SWC-F8C457?style=flat-square&logo=swc&logoColor=black) |
| **Routing** | ![React Router](https://img.shields.io/badge/React_Router_6-CA4245?style=flat-square&logo=reactrouter&logoColor=white) |
| **i18n** | ![i18next](https://img.shields.io/badge/i18next-26A69A?style=flat-square&logo=i18next&logoColor=white) |
| **State** | ![React Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white) |
| **Theming** | ![next-themes](https://img.shields.io/badge/next--themes-000000?style=flat-square&logo=vercel&logoColor=white) |
| **Linting** | ![ESLint](https://img.shields.io/badge/ESLint_9-4B32C3?style=flat-square&logo=eslint&logoColor=white) |
| **Runtime** | ![Bun](https://img.shields.io/badge/Bun-000000?style=flat-square&logo=bun&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js_18+-339933?style=flat-square&logo=nodedotjs&logoColor=white) |

</div>

<br/>

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🎨 Visual & Animation
- Glassmorphism cards with frosted-glass effect
- Scroll-triggered reveal with IntersectionObserver
- Staggered entry animations for grid items
- Morphing blob backgrounds
- Parallax scrolling on hero section
- Gradient text with animated shimmer
- Custom typing effect for role cycling
- Smooth section dividers

</td>
<td width="50%">

### ⚡ Performance & UX
- Vite + SWC for sub-second HMR
- Code-split routes with lazy loading
- Optimized images with eager/lazy hints
- Loading skeleton placeholders
- Error boundaries for fault tolerance
- Accessible (ARIA labels, semantic HTML)
- Mobile-first responsive design
- SEO-friendly with meta tags

</td>
</tr>
<tr>
<td width="50%">

### 🌍 Internationalization
- Full English & Spanish translations
- Auto-detects browser language
- Runtime language switching
- Interpolated dynamic values
- Extensible locale system

</td>
<td width="50%">

### 🎭 Theming System
- Light / Dark mode toggle
- 5 curated color themes
- CSS custom properties
- Smooth theme transitions
- System preference detection

</td>
</tr>
</table>

<br/>

---

## 📱 Sections Overview

| # | Section | Description |
|:-:|:--------|:------------|
| 1 | **Hero** | Full-screen intro with typing animation, parallax background, floating status cards, and CTA buttons |
| 2 | **Stats** | Animated counters showcasing key metrics with gradient-bordered icons |
| 3 | **About** | Personal story with scroll-reveal animations, glass cards, and core principles |
| 4 | **Skills** | Tech stack grid with staggered reveal, progress indicators, and experience timeline |
| 5 | **Services** | Service offerings with hover effects and glassmorphism cards |
| 6 | **Work Process** | Step-by-step development methodology with connected timeline |
| 7 | **Portfolio** | Project showcase with live demos, GitHub links, and tech badges |
| 8 | **GitHub Activity** | Live contribution data pulled from GitHub API |
| 9 | **Testimonials** | Client reviews with glass cards and decorative quote marks |
| 10 | **Contact** | Contact form with info cards, gradient buttons, and social links |
| 11 | **Blog** | Technical article previews with category badges |

<br/>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ or **Bun** (recommended)
- **Git**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Puspaldas17/Puspal-Portfolio.git

# 2. Navigate into the project
cd Puspal-Portfolio

# 3. Install dependencies
bun install          # using Bun (recommended)
# or
npm install          # using npm

# 4. Start development server
bun run dev          # starts on http://localhost:5173
# or
npm run dev
```

### Available Scripts

| Command | Description |
|:--------|:------------|
| `bun run dev` | Start development server with HMR |
| `bun run build` | Create optimized production build |
| `bun run preview` | Preview production build locally |
| `bun run lint` | Run ESLint across all files |

<br/>

---

## 🎨 Design System

<div align="center">

```
┌─────────────────────────────────────────────────────────────────┐
│                      DESIGN TOKENS                              │
├─────────────┬───────────────────────────────────────────────────┤
│  Colors     │  Primary · Accent · Foreground · Background      │
│  Gradients  │  Primary→Accent · Glassmorphism · Mesh Overlays  │
│  Typography │  Inter (body) · JetBrains Mono (code)            │
│  Spacing    │  4px grid · Responsive scale (xs→2xl)            │
│  Radius     │  sm(2px) · md(6px) · lg(8px) · xl(12px)         │
│  Shadows    │  Subtle · Card · Elevated · Glow                 │
│  Animations │  30+ custom keyframes · Configurable durations   │
│  Effects    │  Glass · Shimmer · Float · Morph · Pulse-Glow    │
└─────────────┴───────────────────────────────────────────────────┘
```

</div>

### Custom Animations

The project includes **30+ hand-crafted animations** defined in `tailwind.config.ts`:

```
fade-in · fade-up · slide-up-fade · float · float-slow ·
bounce-gentle · pulse-glow · text-reveal · draw-line ·
counter-fill · morph-blob · ripple · elastic-in · shimmer
```

### Glassmorphism Utilities

```css
.glass          → frosted glass panels
.glass-card     → elevated glass containers  
.gradient-border → animated gradient borders
.hover-glow     → luminous hover states
.morphing-bg    → slowly shifting mesh gradients
```

<br/>

---

## 🔧 Customization Guide

<details>
<summary><b>🎨 Colors & Themes</b></summary>

Edit CSS custom properties in `src/index.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --accent: 210 40% 96.1%;
  /* ...more tokens */
}
```

Theme variants are configured in the `ThemeCustomizer` component with 5 presets.

</details>

<details>
<summary><b>🌍 Adding a New Language</b></summary>

1. Create a new locale file: `src/i18n/locales/fr.json`
2. Copy the structure from `en.json` and translate all keys
3. Register it in `src/i18n/config.ts`:

```ts
resources: {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr }, // Add new locale
}
```

4. Update the `LanguageSwitcher` component to include the new option

</details>

<details>
<summary><b>📂 Adding a New Section</b></summary>

1. Create your component in `src/components/sections/NewSection.tsx`
2. Export it from `src/components/sections/index.ts`
3. Import and add it in `src/pages/Index.tsx`:

```tsx
<div className="section-divider" />
<NewSection />
```

4. Use `SectionHeader` and `useScrollReveal` for consistent animations

</details>

<details>
<summary><b>🧩 Adding Projects</b></summary>

Edit the `projects` array in `src/components/sections/Portfolio.tsx`:

```ts
{
  id: 4,
  title: "Your Project",
  description: "Brief description...",
  image: "https://...",
  technologies: ["React", "Node.js"],
  liveUrl: "https://...",
  githubUrl: "https://github.com/..."
}
```

</details>

<br/>

---

## 📊 Featured Projects

<div align="center">

| Project | Description | Tech Stack |
|:--------|:------------|:-----------|
| [**TripGenius**](https://trip-genius-liard.vercel.app) | AI-powered trip planner with weather, maps, budgets, and group collaboration | React · TypeScript · Node.js · Express |
| [**Redis Server**](https://github.com/Puspaldas17/Redis-Server) | Custom Redis implementation with in-memory KV store and RESP protocol | C++ · CMake · TCP/IP |
| [**Buy & Sell**](https://github.com/Puspaldas17/Buy-and-Sell-project) | Secure marketplace for second-hand goods with auth and notifications | Next.js · Prisma · PostgreSQL · NextAuth |

</div>

<br/>

---

## 🏎️ Performance

<div align="center">

```
  ┌──────────────────────────────────────────────────────┐
  │           LIGHTHOUSE PERFORMANCE AUDIT               │
  ├──────────────┬───────────────────────────────────────┤
  │ Performance  │  ████████████████████████░░  92/100   │
  │ Accessibility│  █████████████████████████░  96/100   │
  │ Best Practice│  ████████████████████████░░  93/100   │
  │ SEO          │  █████████████████████████░  97/100   │
  └──────────────┴───────────────────────────────────────┘
```

</div>

**Optimizations applied:**
- 🔄 Code splitting with React.lazy + Suspense
- 📦 Tree-shaking unused code via Vite
- 🖼️ Responsive images with loading hints
- 🎯 CSS `will-change` for animated elements
- 🧵 Debounced scroll/resize event handlers
- 📊 Skeleton screens for perceived performance

<br/>

---

## 📱 Responsive Breakpoints

```
    Mobile         Tablet        Laptop       Desktop       Large
  ┌─────────┐   ┌──────────┐  ┌──────────┐ ┌───────────┐ ┌────────────┐
  │  < 480   │   │ 480-768  │  │ 768-1024 │ │ 1024-1440 │ │  1440-1920+│
  │   xs     │   │   sm     │  │   md     │ │    lg     │ │   xl/2xl   │
  └─────────┘   └──────────┘  └──────────┘ └───────────┘ └────────────┘
  Touch-first   Tablet-ready  Laptop nav   Full layout   Ultra-wide
  Stacked UI    2-col grids   Sidebar nav  Max-width     Extended grid
```

<br/>

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

> Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

<br/>

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<br/>

---

## 📬 Let's Connect

<div align="center">

[![Email](https://img.shields.io/badge/Email-puspaldas1702@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:puspaldas1702@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Puspal_Das-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/puspal-das-995933253/)
[![GitHub](https://img.shields.io/badge/GitHub-Puspaldas17-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Puspaldas17)
[![Twitter](https://img.shields.io/badge/Twitter-@PuspalDas17-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/PuspalDas17)

<br/>

---

<br/>

**If this project helped you, consider giving it a ⭐ — it means a lot!**

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366f1,50:8b5cf6,100:06b6d4&height=120&section=footer" width="100%" />

</div>
