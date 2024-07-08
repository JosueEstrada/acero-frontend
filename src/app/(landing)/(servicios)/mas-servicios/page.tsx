import Galeria from "@/components/galeria";

export default function MasServiciosPage() {
  return (
    <>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Más servicios
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Más servicios con la misma calidad de siempre
            </p>
            <p className="text-left text-gray-500 dark:text-gray-400 md:text-base/relaxed">
              <li>Montaje de equipos electromécanicos</li>
              <li>Ventilación industrial</li>
              <li>Arenado, granallado y escoriado</li>
              <li>Pinturas mediante sistemas epóxicos</li>
              <li>
                Instalación de aislamientos poliuretano y laminado antiácido
              </li>
              <li>Fabricación de estructuras para tránsito, peso y altura</li>
            </p>
          </div>
        </div>
      </section>
      <Galeria />
    </>
  );
}
