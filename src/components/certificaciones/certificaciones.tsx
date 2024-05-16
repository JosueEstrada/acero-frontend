import Image from "next/image";

export default function CertificacionesSection() {
  return (
    <section className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Certificaciones y Premios
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            En Solinox, nos enorgullecemos de contar con los más altos
            estándares de calidad y seguridad en la construcción de tanques de
            acero. Nuestras certificaciones y premios son un testimonio de
            nuestro compromiso con la excelencia.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="ISO 9001 Certification"
              className="h-20 w-20 object-contain"
              height={80}
              src="/iso90001.png"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width={80}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Certificación ISO 9001:2015</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Demuestra nuestro compromiso con la gestión de la calidad y la
                mejora continua.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="LEED Certification"
              className="h-20 w-20 object-contain"
              height={80}
              src="/leed.webp"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width={80}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Certificación LEED</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nuestras instalaciones están diseñadas y construidas cumpliendo
                las normas medioambientales.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Best Employer Award"
              className="h-20 w-20 object-contain"
              height={80}
              src="/premioexcelencia.avif"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width={80}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Premio a la mejor empresa</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Estamos orgullosos de ser reconocidos como uno de los mejores
                lugares para trabajar en nuestro sector.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Image
              alt="Innovation Award"
              className="h-20 w-20 object-contain"
              height={80}
              src="/premio-upc.png"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width={80}
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Premio a la innovación</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nuestro compromiso con la innovación ha sido reconocido de la
                industria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
