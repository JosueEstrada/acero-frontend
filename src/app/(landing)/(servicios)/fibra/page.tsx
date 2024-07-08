import Galeria from "@/components/galeria";

export default function MasServiciosPage() {
  return (
    <>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tanques de Fibra de Vidrio
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Son muchos los beneficios de las fibras de vidrios (Plástico
              Reforzado de Fibra de Vidrio PRFV).
            </p>
            <p className="text-left text-gray-500 dark:text-gray-400 md:text-base/relaxed">
              <span>
                Los tanques de almacenamiento que son elaborados con este
                material tienen grandes ventajas como las descritas a
                continuación.
              </span>
              <li>
                Los tanques de fibras de vidrio son altamente resistentes a
                golpes y tracciones.
              </li>
              <li>
                A diferencia de otros materiales, la fibra de vidrio no tiene
                ningún elemento que se oxide y contamine el fluido que se
                almacene en los tanques.
              </li>
              <li>
                Son sumamente higiénicos, lo que garantiza que el agua que se
                almacene allí esté limpia constantemente.
              </li>
              <li>
                La fibra de vidrio tiene la gran ventaja que no permite que
                actúen procesos corrosivos.
              </li>
              <li>
                Los materiales reforzados con fibra de vidrio son buenos debido
                a que, no dejan pasar la luz, lo cual hace imposible la
                proliferación de bacterias y microorganismos que contaminen el
                agua, sin embargo, puedes visualizar fácilmente los niveles del
                líquido que estén dentro de los envases de fibra de vidrio.
              </li>
              <li>
                Esta fibra es un material que es resistente a variaciones
                bruscas de temperatura, por lo que, pueden estar en lugares
                calientes, así como también, en lugares fríos, sin afectar su
                eficiencia.
              </li>
              <li>
                Otro aspecto positivo que poseen los productos realizados con
                fibra de vidrio es que pueden hacerse diferentes tipos de
                tanques para que se adapten a los espacios requeridos, es decir,
                son hechos al gusto del cliente.
              </li>
              <li>Los tanques de fibra de vidrio son fáciles de instalar.</li>
              <li>
                La fibra de vidrio tiene la ventaja de que se puede reparar
                fácilmente.
              </li>
              <li>
                Los tanques de fibra de vidrio tienen otros aspectos positivos
                como: resistencia acústica, son absorbentes a vibraciones y
                además, no son dañinos para el medio ambiente.
              </li>
              <span>
                Como éstas ventajas existen muchas más, que hacen la fibra de
                vidrio un material mucho más ventajoso que otros materiales como
                el plástico, el hierro o el concreto.
              </span>
            </p>
          </div>
        </div>
      </section>
      <Galeria />
    </>
  );
}
