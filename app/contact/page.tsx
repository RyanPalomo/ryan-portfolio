import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Contact from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}