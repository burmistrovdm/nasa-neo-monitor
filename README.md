This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Building the app
```bash
next build
```
next build generates an optimized version of your application for production. This standard output includes:

HTML files for pages using getStaticProps or Automatic Static Optimization
CSS files for global styles or for individually scoped styles
JavaScript for pre-rendering dynamic content from the Next.js server
JavaScript for interactivity on the client-side through React
This output is generated inside the `.next` folder:

`.next/static/chunks/pages` – Each JavaScript file inside this folder relates to the route with the same name. For example, `.next/static/chunks/pages/about.js` would be the JavaScript file loaded when viewing the /about route in your application
`.next/static/media` – Statically imported images from next/image are hashed and copied here
`.next/static/css` – Global CSS files for all pages in your application
`.next/server/pages` – The HTML and JavaScript entry points prerendered from the server. The .nft.json files are created when Output File Tracing is enabled and contain all the file paths that depend on a given page.
`.next/server/chunks` – Shared JavaScript chunks used in multiple places throughout your application
`.next/cache` – Output for the build cache and cached images, responses, and pages from the Next.js server. Using a cache helps decrease build times and improve performance of loading images
All JavaScript code inside .next has been compiled and browser bundles have been minified to help achieve the best performance and support all modern browsers.