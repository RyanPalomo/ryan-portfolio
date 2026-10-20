import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Projects from "@/components/sections/projects";
import { socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Ryan Palomo's full stack, SaaS, Shopify, and e-commerce development projects, including Zupport, Anker Philippines, and Kinetic by Garmin.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Web Development Projects by Ryan Palomo",
    description:
      "Selected SaaS, full stack, Shopify, and e-commerce work by Ryan Paul Palomo.",
    url: "/projects",
    images: [socialImage],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
