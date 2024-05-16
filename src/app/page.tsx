import ContactSection from "@/components/home/contact";
import HeroSection from "@/components/home/hero";
import IntroSection from "@/components/home/intro";
import ServicesSection from "@/components/home/services";
import StrategicSection from "@/components/home/strategic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <StrategicSection />
      <ContactSection />
    </main>
  );
}
