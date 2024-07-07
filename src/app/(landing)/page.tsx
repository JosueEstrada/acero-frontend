"use client";

import ContactSection from "@/components/home/contact";
import HeroSection from "@/components/home/hero";
import IntroSection from "@/components/home/intro";
import ServicesSection from "@/components/home/services";
import StrategicSection from "@/components/home/strategic";
import { useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';
export default function Home() {

  useEffect(() => {
    const message = localStorage.getItem('alertMessage');
    if (message) {
      toast.success(localStorage.getItem('alertMessage'));
      localStorage.removeItem('alertMessage');
    }
  }, []);


  return (
    <>
        <Toaster />
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <StrategicSection />
      <ContactSection />
    </main>
    </>
  );
}
