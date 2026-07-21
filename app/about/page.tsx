import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";

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
