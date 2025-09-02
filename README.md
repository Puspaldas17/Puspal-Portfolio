# 🌐 Portfolio Website - Puspal Das

A modern, responsive, and performance-optimized portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.  
Showcasing skills, projects, and experience in a clean and professional way.

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, About, Skills, etc.)
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   └── index.ts          # Barrel exports for clean imports
├── pages/                # Application pages  
├── assets/
│   └── images/           # Organized image assets
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **Bun** (recommended) or npm/yarn

### Installation

1. Clone the repository
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies
```bash
# With Bun (recommended)
bun install

# Or with npm
npm install
```

3. Start the development server
```bash
# With Bun
bun run dev

# Or with npm
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser 🚀

---

## 📱 Responsive Design

Optimized for all modern devices and screen sizes:
- **480px** - Mobile devices  
- **768px** - Tablets  
- **1024px** - Laptops  
- **1440px** - Desktops  
- **1920px+** - Large screens  

---

## 🛠️ Built With

- ⚛️ **React 18** – UI library  
- 🟦 **TypeScript** – Type safety  
- 🎨 **Tailwind CSS** – Utility-first styling  
- ⚡ **Vite** – Next-gen build tool  
- 🧩 **shadcn/ui** – Prebuilt UI components  
- ✨ **Lucide React** – Modern icons  
- 🔀 **React Router** – Client-side routing  

---

## 📦 Available Scripts

- `bun run dev` – Start development server  
- `bun run build` – Build for production  
- `bun run preview` – Preview production build  
- `bun run lint` – Run ESLint checks  

---

## 🎨 Design System

The portfolio follows a **scalable design system** with:
- Semantic color tokens 🎨  
- Consistent spacing & typography 🔠  
- Dark/Light mode support 🌗  
- Smooth gradients, shadows & animations ✨  

---

## 📁 Import Structure

Clean imports using **barrel exports**:

```ts
// Layout components
import { Header, Footer } from '@/components/layout';

// Section components
import { Hero, About, Portfolio } from '@/components/sections';

// UI components
import { Button, Card, Badge } from '@/components/ui';

// Hooks
import { useIsMobile, useToast } from '@/hooks';

// Utils
import { cn } from '@/lib';
```

---

## 🔧 Customization

- 🎨 **Colors** → Update design tokens in `src/index.css`  
- 🧩 **Components** → Extend/modify components in `src/components/`  
- 📘 **Types** → Add new types in `src/types/index.ts`  
- 🖼️ **Assets** → Manage images in `src/assets/images/`  

---

## 🌍 Deployment

Easily deploy via [Lovable](https://lovable.dev/projects/197a6516-f120-4914-9ab0-02895cfe9610):  
Go to **Share → Publish**.  

### Custom Domain  
Navigate to **Project → Settings → Domains → Connect Domain**.  
📖 Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)  

---

✨ Crafted with passion by **Puspal Das**  
