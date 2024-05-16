import ContactSection from "@/components/home/contact";
import HeroSection from "@/components/home/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ContactSection />
    </main>
  );
}
