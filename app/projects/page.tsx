import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Projects from "@/components/sections/projects";

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
