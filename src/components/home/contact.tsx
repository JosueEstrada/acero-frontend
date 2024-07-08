import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: "url('/parallax.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 text-center text-white">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Cuéntenos su proyecto
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed">
          Consulte con nosotros por la fabricación de tanques sedimentadores,
          clarificadores, aireadores, sistemas de flotación por oxígeno disuelto
          (D.A.F.), desnatadores, etc.
        </p>
        <a href="/contacto"><Button className="mt-8">Contactar</Button></a> 
      </div>
    </section>
  );
}
