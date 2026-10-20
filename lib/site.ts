export const siteConfig = {
  name: "Ryan Paul R. Palomo",
  shortName: "Ryan Palomo",
  title: "Ryan Paul R. Palomo | Full Stack & Shopify Developer",
  description:
    "Ryan Paul R. Palomo is a Philippines-based full stack and Shopify developer building SaaS products, e-commerce storefronts, and fast, accessible web experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ryanpalomo.vercel.app",
  email: "palomoryan23@gmail.com",
  github: "https://github.com/RyanPalomo",
  linkedin: "https://www.linkedin.com/in/ryan-paul-palomo-51a757256/",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

export const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Ryan Paul R. Palomo — Full Stack and Shopify Developer",
} as const;
