import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import { socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ryan Paul Palomo, a full stack and Shopify developer in the Philippines with experience building SaaS products and e-commerce experiences.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ryan Paul Palomo",
    description:
      "Full stack and Shopify developer building SaaS products and e-commerce experiences in the Philippines.",
    url: "/about",
    images: [socialImage],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <About />
      <Experience />
      </div>
      <Footer />
    </main>
  );
}
