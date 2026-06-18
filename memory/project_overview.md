---
name: project-overview
description: Freelance site for Clarissa Heinemann — stack, design system, structure
metadata:
  type: project
---

React + TypeScript + Vite + Tailwind + shadcn/ui. German copy throughout.

**Design:** Electric blue/purple primary gradient (`--gradient-primary`), cyan accent, Inter + JetBrains Mono fonts, `--radius: 0.75rem`.

**Key pages:** `/` (Index with sections), `/pia` (Pia chatbot), `/projekte/*` (3 project pages), `/impressum`, `/datenschutz`.

**Global layout:** Header and Footer rendered in App.tsx outside Routes. Header is fixed, so pages need ~80px top offset.

**Why:** Context for all future feature work on this site.

**How to apply:** Always write German UI text. Match the gradient/color tokens from index.css. New pages need ~mt-20 or padding-top to clear the fixed header.
