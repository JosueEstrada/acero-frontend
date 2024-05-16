import {
  BuildingIcon,
  ConstructionIcon,
  RouteIcon,
  TractorIcon,
} from "../icons";

export default function StrategicSection() {
  return (
    <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            SECTORES ESTRATÉGICOS
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Garantizamos soluciones eficientes y rápidas, sencillas y menos
            costosas. Sin perder de vista algo tan necesario e indispensable
            como la calidad y respeto a la ecología.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="group mx-auto flex h-48 w-48 flex-col items-center justify-center overflow-hidden rounded-full border border-gray-200 p-4 text-center transition-all hover:shadow-lg dark:border-gray-800">
            <ConstructionIcon className="h-20 w-20 text-yellow-500 transition-colors group-hover:text-yellow-600 dark:text-gray-400 dark:group-hover:text-gray-50" />
            <p className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
              Industria
            </p>
          </div>
          <div className="group mx-auto flex h-48 w-48 flex-col items-center justify-center overflow-hidden rounded-full border border-gray-200 p-4 text-center transition-all hover:shadow-lg dark:border-gray-800">
            <RouteIcon className="h-20 w-20 text-yellow-500 transition-colors group-hover:text-yellow-600 dark:text-gray-400 dark:group-hover:text-gray-50" />
            <p className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
              Víal
            </p>
          </div>
          <div className="group mx-auto flex h-48 w-48 flex-col items-center justify-center overflow-hidden rounded-full border border-gray-200 p-4 text-center transition-all hover:shadow-lg dark:border-gray-800">
            <BuildingIcon className="h-20 w-20 text-yellow-500 transition-colors group-hover:text-yellow-600 dark:text-gray-400 dark:group-hover:text-gray-50" />
            <p className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
              Urbano
            </p>
          </div>
          <div className="group mx-auto flex h-48 w-48 flex-col items-center justify-center overflow-hidden rounded-full border border-gray-200 p-4 text-center transition-all hover:shadow-lg dark:border-gray-800">
            <TractorIcon className="h-20 w-20 text-yellow-500 transition-colors group-hover:text-yellow-600 dark:text-gray-400 dark:group-hover:text-gray-50" />
            <p className="mt-2 text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
              Minería
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
