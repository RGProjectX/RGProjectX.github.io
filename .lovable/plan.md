

# Developer Portfolio Website Plan

## Overview
Build a modern, minimal developer portfolio for Rohit Ghorui — a Java Full Stack Developer. Single-page app with smooth scroll navigation, dark/light design, purple/indigo accent color, and premium feel.

## Architecture

Single page (`Index.tsx`) composed of section components, plus shared layout components.

## Files to Create

### Theme & Config
- **`src/index.css`** — Update CSS variables: purple/indigo primary, light gray background, 8px spacing system
- **`tailwind.config.ts`** — Add fade-in, slide-up keyframe animations, custom fonts

### Layout Components
- **`src/components/Navbar.tsx`** — Sticky navbar with backdrop-blur, smooth scroll links, "Download Resume" CTA, mobile hamburger menu
- **`src/components/Footer.tsx`** — Copyright, social links

### Section Components (all in `src/components/`)
- **`HeroSection.tsx`** — Two-column grid: intro text + animated code block visual on right. CTAs: "View Projects" / "Contact Me"
- **`AboutSection.tsx`** — Bio paragraph with domain expertise list
- **`SkillsSection.tsx`** — Skills grouped by category (Backend, Frontend, DB, Messaging, DevOps, Concepts) as badge tags
- **`ExperienceSection.tsx`** — Vertical timeline with cards for each role/project at Infibeam Avenues
- **`ProjectsSection.tsx`** — Project cards with features list and tech badges
- **`TechStackSection.tsx`** — Icon grid of core technologies
- **`ContactSection.tsx`** — Contact form (name, email, message) + contact info card

### Page
- **`src/pages/Index.tsx`** — Compose all sections with intersection observer for scroll-triggered fade-in animations

## Design Details

- **Colors**: Purple/indigo primary (`262 83% 58%`), light gray bg, white cards with `rounded-xl border shadow-sm`
- **Typography**: System font stack (Inter-like), strong hierarchy with large hero heading
- **Animations**: Sections fade+slide in on scroll using IntersectionObserver. Cards have `hover:shadow-md hover:-translate-y-1` transitions
- **Responsive**: Mobile-first, hamburger nav on small screens, single column stacks
- **Code visual**: Right side of hero shows a styled code snippet block with syntax-highlighted appearance using colored spans

## Component Count
~10 new files, update 3 existing files (Index.tsx, index.css, tailwind.config.ts)

