export default function AceroPage() {
  return (
    <>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tanques de Acero
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Construimos tanques de almacenamiento en acero al carbono y acero
              inoxidable, para: aceites, ácidos, agua, granos, harinas, jarabes,
              lácteos y otros.
            </p>
            <p className="text-left text-gray-500 dark:text-gray-400 md:text-base/relaxed">
              <li>
                El acero al carbono es uno de los materiales de mejor desempeño
                frente al concreto de rápida resolución y menor costo frente al
                acero inoxidable. Muy usado para la fabricación de estructuras y
                tanques de almacenamiento de grandes beneficios. Existen
                diferentes presentaciones en planchas, plantillas, bridas,
                conexiones, tubos y cañerías de acero, y acero carbono.
              </li>
              <li>
                El acero inoxidable es una aleación principalmente de acero,
                cromo y níquel. Al unir estos materiales conseguimos que la
                resistencia a la corrosión sea extremadamente alta, ya que el
                cromo al estar en contacto con el oxígeno crea una capa
                pasivadora que hace que no le afecte los agentes externos
                exceptuando algunos ácidos como pueden ser el agua fuerte y en
                menor medida los cloruros.
              </li>
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
