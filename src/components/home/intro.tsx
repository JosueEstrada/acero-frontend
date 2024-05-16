import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-16">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Soluciones Técnicas Industriales, Mineras, Urbanas y Viales
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SOLINOX es una empresa con amplia experiencia en la fabricación
                de todo tipo de Tanques en acero al carbón, acero Inoxidable y
                fibra de Vidrio.
              </p>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trabajamos con un grupo de profesionales entre ellos Ingenieros,
                técnicos y demás colaboradores, con el fin de entregar productos
                que cumplan con los estándares y normas de calidad.
              </p>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nos capacitamos con instructores certificados de la American
                Society of Mechanical Engineers (ASME).
              </p>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-14 flex-1 items-center justify-center rounded-md bg-gray-900 px-8 text-center text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/agendar-cita"
              >
                Agendar una cita
              </Link>
              <Link
                className=" ¡dark:border-gray-800 inline-flex h-14 flex-1 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-center text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="/prototipo"
              >
                Prueba nuestro prototipo 3D
              </Link>
              <Link
                className="inline-flex h-14 flex-1 items-center justify-center rounded-md bg-gray-900 px-8 text-center text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/cotizacion"
              >
                Solicita una cotización
              </Link>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="550"
            src="/intro-hero.jpg"
            width="650"
          />
        </div>
      </div>
    </section>
  );
}
