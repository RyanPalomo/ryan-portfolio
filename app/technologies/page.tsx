import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Technologies from "@/components/sections/technologies";

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
