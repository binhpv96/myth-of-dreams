# 🌐MYTH OF DREAMS - WEB PORTAL

**Introduction:**  
This repository contains the **web frontend** for the Myth of Dreams game project. It includes:

- 🏠 **Landing Page** - Game introduction, updates, download links
- 🧑‍💼 **Admin Dashboard** - Internal tools for managing users, NFTs
- 🛒 **Marketplace (coming soon)** - Player-to-player NFT exchange and listings
- 📘 **Documentation Section** - Display game docs via markdown routing

## Technology used

![Next.js](https://img.shields.io/badge/Next.js-15-blue)
![React](https://img.shields.io/badge/React-19-lightblue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

- Framework: Next.js 15 AppRouter Turbopack & React 19
- Programming language: TypeScript
- UI library: shadcn/radix-ui
- CSS framework: TailwindCSS
- Package manager: npm

## Getting Started

- Install Node.js version 18.18 minimum

- Clone [project](https://github.com/Myth-of-Dreams/web-portal.git) and run the command:

```
npm install
npm run dev
```

- Open the browser and go to [http://localhost:3000/](http://localhost:3000/).

---

## General rules for project building/Best practice

### 1. Project structure

Project is organized according to the standard organization of [Next.js 15 AppRouter](https://nextjs.org/docs/app/getting-started/project-structure).

- Naming files & folders follow Kebab Case (kebab-case).
- Put page components (page.tsx) directly in the routers, don't create multiple unnecessary index.tsx.
- Put another components in src/components.
- Export default for Page components and export { } for other custom components.

### 2. Git/Github

- DO NOT COMMIT DIRECTLY TO [**main**](https://github.com/SWD392-SU25-G7/badminton-court-booking-frontend/tree/main).
- Create branches following: username/feature (e.g. _binhpv/homepage_).
- Always create [Pull requests](https://github.com/Myth-of-Dreams/web-portal/pulls) for review before merging.
- Create [Issues](https://github.com/Myth-of-Dreams/web-portal/issues) to report, discuss
- Avoid meaningless commit messages like **_fix_**, **_update_**, **_changes_**, **_. . ._**

### 3. Code Format

- Use Prettier preconfigured to format code each time you save.
- Naming variables follow rules of JavaScript/TypeScript (_camelCase_, _PascalCase_).

---

## NOTE on performance optimization

- Use Page components is [Server components](https://nextjs.org/docs/app/getting-started/server-and-client-components).
- Prioritize [Server components](https://nextjs.org/docs/app/getting-started/server-and-client-components) if not using React hooks and client APIs.
- Use **_'use client'_** only when needed.
- Separate logic _`server-side`_ & _`client-side`_ clearly.
- Use dynamic import [(_'next/dynamic'_)](https://nextjs.org/docs/app/guides/lazy-loading) for heavy components used only on client.
- Use [_'\<Image \/\>'_](https://nextjs.org/docs/app/getting-started/images) for all images.
- Avoid UI UI frameworks like [Ant Design](https://ant.design/), [MUI](https://mui.com/), (heavy, client-side based)