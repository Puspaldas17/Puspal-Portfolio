# Portfolio Website - Puspal Das

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, About, Skills, etc.)
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   └── index.ts         # Barrel exports for clean imports
├── pages/               # Application pages  
├── assets/
│   └── images/          # Organized image assets
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── types/               # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Bun (recommended) or npm/yarn

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

3. Start development server
```bash
# With Bun
bun run dev

# Or with npm
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Responsive Design

The portfolio is fully responsive across all modern devices:
- **480px** - Small mobiles
- **768px** - Tablets  
- **1024px** - Small laptops
- **1440px** - Standard desktops  
- **1920px+** - Large screens

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **React Router** - Client-side routing

## 📦 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

## 🎨 Design System

The project uses a comprehensive design system with:
- Semantic color tokens
- Consistent spacing and typography
- Dark/light mode support
- Professional gradients and shadows
- Smooth animations and transitions

## 📁 Import Structure

Thanks to barrel exports, imports are clean and organized:

```typescript
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

## 🔧 Customization

1. **Colors**: Modify design tokens in `src/index.css`
2. **Components**: Extend or modify components in their respective folders
3. **Types**: Add new types in `src/types/index.ts`
4. **Assets**: Organize images in `src/assets/images/`

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/197a6516-f120-4914-9ab0-02895cfe9610) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
