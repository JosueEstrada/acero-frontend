import Image from "next/image";

export default function NosotrosSection() {
  return (
    <>
      <section className="w-full py-12">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Curbside Tank"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover sm:w-full"
            height="600"
            src="/nosotros1.jpg"
            width="800"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre Nosotros
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Somos una empresa que aporta ingeniería y técnicas innovadoras
              para la reparación y mantenimiento industrial, al mismo tiempo
              desarrollamos líneas constructivas mediante las normas vigentes y
              de calidad para elementos de conducción, impulsión o
              almacenamiento húmedos o secos.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100  dark:bg-gray-800 md:py-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Soluciones integrales para la industria minera y el tratamiento de
              agua
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Realizamos el desarrollo de proyectos parciales o llave en mano en
              cuanto a montajes industriales, estructuras soporte y seguridad
              para las distintas actividades mineras, soluciones para el manejo
              de elementos de uso vial tales como maquinarias de auxilio,
              restricción de paso, apertura de vías, señalizaciones viales,
              naves de almacenes y plantas de tratamiento del agua urbanas o
              equipos parciales como clarificadores, aireadores, reactores,
              sistemas D.A.F. Fabricación, reparación y mantenimiento de
              generadores de vapor. Los mecanismos que usamos para lograr los
              objetivos de nuestra empresa en cuanto a fabricaciones y
              reparaciones se equilibran con el sostenimiento ecológico y
              búsqueda de preservación del medioambiente tanto en el desarrollo
              de actividades así como en el empleo de consumibles, solventes y
              componentes.
            </p>
          </div>
          <Image
            alt="Manufacturing Process"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            height="400"
            src="/nosotros2.jpg"
            width="600"
          />
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
          <Image
            alt="Manufacturing Facility"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            height="400"
            src="/nosotros3.jpg"
            width="600"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestro compromiso
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Nuestro compromiso es con nosotros mismos en virtud de mejorar
              cada día a la vanguardia en el uso de las últimas tecnologías
              haciéndole llegar a nuestros clientes y amigos la satisfacción de
              la obra cumplida y superada en espectativa y economía. Entregamos
              a su disposición lo mejor y de primera de un equipo de trabajo
              como es SOLINOX comprometidos de vocación al equilibrio entre las
              actividades productivas y la vida del planeta.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
