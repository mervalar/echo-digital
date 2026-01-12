# Echo Digital - Creative Design Agency Website

A modern, creative, international web agency website built with Next.js 14, React, and TypeScript.

## 🎨 Design Features

- **Color Palette:**
  - Deep Green (#0F3D2E) - Headers, buttons, icons
  - Terracotta (#C45A3C) - Accents, call-to-action, icons
  - Sand (#F1E9DC) - Backgrounds, cards, content areas

- **Design Style:**
  - Bright, clean, and professional
  - Mix of light Sand backgrounds with black sections for contrast
  - Modern, clean sans-serif typography
  - Rounded corners on buttons with hover effects
  - Full-color, professional images

## 📄 Pages

1. **Homepage** (`/`)
   - Hero section with headline and CTA
   - Featured services grid
   - Stats section
   - Latest projects preview

2. **About Page** (`/about`)
   - Our Story section
   - Team showcase
   - Mission, Vision & Values
   - Creative illustration

3. **Services Page** (`/services`)
   - Complete service listings
   - Benefits for each service
   - Detailed descriptions

4. **Projects Page** (`/projects`)
   - Grid layout of projects
   - Filter by category
   - Hover animations with Terracotta highlights

5. **Contact Page** (`/contact`)
   - Contact form
   - Contact information
   - Map section
   - CTA for project inquiries

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
echo-digital/
├── app/
│   ├── about/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── contact/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── projects/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── services/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ContactForm.tsx
│   ├── ContactForm.module.css
│   ├── Footer.tsx
│   ├── Footer.module.css
│   ├── Hero.tsx
│   ├── Hero.module.css
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   ├── ProjectsGrid.tsx
│   ├── ProjectsGrid.module.css
│   ├── ProjectsPreview.tsx
│   ├── ProjectsPreview.module.css
│   ├── ServiceList.tsx
│   ├── ServiceList.module.css
│   ├── ServicesGrid.tsx
│   ├── ServicesGrid.module.css
│   ├── StatsSection.tsx
│   ├── StatsSection.module.css
│   ├── TeamShowcase.tsx
│   ├── TeamShowcase.module.css
│   ├── ValuesSection.tsx
│   └── ValuesSection.module.css
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Technologies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Next/Image** - Optimized images

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Features

- ✅ Sticky navigation with scroll effects
- ✅ Mobile-responsive menu
- ✅ Smooth animations and transitions
- ✅ Form handling with validation
- ✅ Project filtering
- ✅ Newsletter subscription
- ✅ Social media links
- ✅ SEO optimized
- ✅ Accessible components

## 🚢 Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is created for Echo Digital agency.

## 🤝 Contributing

This is a private project for Echo Digital. For any modifications or updates, please contact the development team.
