import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Contact from "@/components/sections/contact";
import { socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ryan Palomo for full stack, Shopify, SaaS, and e-commerce development projects in the Philippines or remotely.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ryan Palomo",
    description:
      "Let's discuss your next full stack, SaaS, Shopify, or e-commerce project.",
    url: "/contact",
    images: [socialImage],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
