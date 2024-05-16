import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            NUESTROS SERVICIOS
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Fabricación de tanques industriales de almacenamiento. Mantenimiento
            industrial preventivo, correctivo, arenado y pintado epóxico.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg dark:border-gray-800">
            <Image
              alt="Service 1"
              className="h-[200px] w-full object-cover object-center transition-all group-hover:scale-105"
              height="200"
              src="/card1.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Tanques de Acero al Carbón e Inoxidable
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Para aceites, ácidos, agua, granos, harinas, jarabes, lácteos y
                otros.
              </p>
            </div>
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg dark:border-gray-800">
            <Image
              alt="Service 2"
              className="h-[200px] w-full object-cover object-center transition-all group-hover:scale-105"
              height="200"
              src="/card2.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Tanques de Fibra de Vidrio
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Son altamente resistentes a golpes y tracciones de material
                Plástico Reforzado de Fibra de Vidrio PRFV
              </p>
            </div>
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg dark:border-gray-800">
            <Image
              alt="Service 3"
              className="h-[200px] w-full object-cover object-center transition-all group-hover:scale-105"
              height="200"
              src="/card3.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                Tanques para Tratamiento de Agua Residual
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Línea de tanques para el tratamiento y recuperación de agua
                residual
              </p>
            </div>
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg dark:border-gray-800">
            <Image
              alt="Service 4"
              className="h-[200px] w-full object-cover object-center transition-all group-hover:scale-105"
              height="200"
              src="/card4.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Más servicios</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Montaje de equipos electromécanicos, Ventilación industrial,
                Arenado, granallado y escoriado, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
