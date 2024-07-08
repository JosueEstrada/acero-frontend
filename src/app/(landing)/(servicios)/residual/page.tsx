import Galeria from "@/components/galeria";

export default function ResidualPage() {
  return (
    <>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tanques para Tratamiento de Agua Residual
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Línea de tanques para el tratamiento y recuperación de agua
              residual
            </p>
            <p className="text-left text-gray-500 dark:text-gray-400 md:text-base/relaxed">
              <li>Aireadores</li>
              <li>Clarificadores</li>
              <li>Decantadores</li>
              <li>Desnatadores</li>
              <li>Sedimentadores</li>
              <span>
                Como se sabe el tratamiento de las aguas, es una forma de
                regresar al ambiente las aguas que han sido contaminadas con
                desechos orgánicos (sanitarias) o químicos (industriales), pero
                con la menor cantidad de estos contaminantes presentes en ellas;
                de modo en que se impacte lo menos posible las condiciones
                naturales de los cuerpos receptores (ríos, mares, lagunas).
              </span>
              <span>
                El tratamiento de aguas en sí, emplea diversas técnicas y
                procesos para la eliminación de dichos contaminantes, procesos
                físico-químicos, biológicos, de separación física mediante el
                empleo de membranas y de desinfección.
              </span>
            </p>
          </div>
        </div>
      </section>
      <Galeria />
    </>
  );
}
