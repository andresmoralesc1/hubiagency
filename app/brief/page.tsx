import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BriefForm } from "@/components/brief-form";

export default function BriefPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-24 pb-16 px-8">
        <div className="max-w-2xl mx-auto">
          <BriefForm />
        </div>
      </main>
      <Footer />
    </>
  );
}