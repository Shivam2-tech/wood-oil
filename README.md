# ABC Wood Oil Factory

Premium e-commerce storefront for natural wood oils — built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Zustand.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + shadcn/ui components
- **Framer Motion** animations
- **Zustand** cart with localStorage persistence

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description          |
|---------------|----------------------|
| `npm run dev` | Development server |
| `npm run build` | Production build   |
| `npm run start` | Production server  |
| `npm run lint` | ESLint              |

## Pages

- `/` — Landing (hero video, featured products, testimonials)
- `/shop` — Product grid with filters
- `/product/[slug]` — Product detail
- `/cart` — Shopping cart
- `/about` — Factory story & certificates
- `/contact` — Contact form & WhatsApp

## Configuration

- WhatsApp number: edit `WHATSAPP_NUMBER` in `src/lib/constants.ts`
- Products: edit `src/data/products.ts`

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node.js host that supports Next.js 14.

```bash
npm run build
npm run start
```
