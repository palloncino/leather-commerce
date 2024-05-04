This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Design System Shadcn UI

went through installation steps:

- https://ui.shadcn.com/docs/installation/next

### App structure

Here's how I structure my Next.js apps. You can use this as a reference

```bash
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

I place the UI components in the components/ui folder.

The rest of the components such as <PageHeader /> and <MainNav /> are placed in the components folder.

The lib folder contains all the utility functions. I have a utils.ts where I define the cn helper.

The styles folder contains the global CSS

