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
      <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Service 1"
                className="h-auto w-full object-cover"
                height="240"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "360/240",
                  objectFit: "cover",
                }}
                width="360"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Service 2"
                className="h-auto w-full object-cover"
                height="240"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "360/240",
                  objectFit: "cover",
                }}
                width="360"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Service 3"
                className="h-auto w-full object-cover"
                height="240"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "360/240",
                  objectFit: "cover",
                }}
                width="360"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Service 4"
                className="h-auto w-full object-cover"
                height="240"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "360/240",
                  objectFit: "cover",
                }}
                width="360"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Service 5"
                className="h-auto w-full object-cover"
                height="240"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "360/240",
                  objectFit: "cover",
                }}
                width="360"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                alt="Service 6"
                className="h-auto w-full object-cover"
                height="240"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "360/240",
                  objectFit: "cover",
                }}
                width="360"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
