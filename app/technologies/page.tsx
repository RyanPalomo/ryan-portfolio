import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Technologies from "@/components/sections/technologies";
import { socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "See the technologies Ryan Palomo uses for full stack, SaaS, and Shopify development, including Next.js, React, Node.js, PostgreSQL, and Liquid.",
  alternates: { canonical: "/technologies" },
  openGraph: {
    title: "Ryan Palomo's Web Development Stack",
    description:
      "The frontend, backend, database, e-commerce, and development tools behind Ryan Palomo's work.",
    url: "/technologies",
    images: [socialImage],
  },
};

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Technologies />
      </div>
      <Footer />
    </main>
  );
}
