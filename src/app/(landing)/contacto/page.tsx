export default function ContactoPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-lg px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contacto
        </h2>
        <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
          Envíanos un mensaje
        </p>
        {/* Grid responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {/* Formulario de contacto */}
          <form action="#" className="mb-8 space-y-8 ">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Juan Pérez"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="nombre@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="telefono"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="999888777"
                pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={6}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Explícanos tu proyecto..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-[rgba(224,28,49,1.000)] px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
            >
              Enviar mensaje
            </button>
          </form>
          {/* Sección Información de Empresa */}
          <div className="col-span-1 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800/[0.1] text-[rgb(75,85,99)]">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="">Correo de la empresa:</p>
              <p className="">
                proyectos@solinoxperu.com <br />
                ventas@solinoxperu.com
              </p>
            </div>
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800/[0.1] text-[rgb(75,85,99)]">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="">Dirección:</p>
              <p className="">
                Av. Cajamarquilla 280 Lurigancho-Huachipa <br />
                Lima, Peru
              </p>
            </div>
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800/[0.1] text-[rgb(75,85,99)]">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <p className="">Teléfono:</p>
              <p className="">
                Llámenos para hablar con un miembro de nuestro equipo. Siempre
                estaremos felices de ayudar.
              </p>
              <p className="text-primary-600 dark:text-primary-500 font-bold">
                925 110 992
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
