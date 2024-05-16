import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-700 to-slate-900 py-8 text-white sm:py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-6">
        <div className="flex items-center gap-2">
          <Image
            alt="Company Logo"
            className="object-contain"
            height={200}
            src="/solinox-footer.png"
            style={{
              objectFit: "cover",
            }}
            width={150}
          />
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">La Empresa</h4>
          <nav className="flex flex-col space-y-1">
            <Link className="hover:underline" href="/">
              Inicio
            </Link>
            <Link className="hover:underline" href="/nosotros">
              Nosotros
            </Link>
            <Link className="hover:underline" href="/certificaciones">
              Certificaciones
            </Link>
            <Link className="hover:underline" href="/contacto">
              Contacto
            </Link>
            <Link className="hover:underline" href="/agendar-cita">
              Agendar cita
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Servicios</h4>
          <nav className="flex flex-col space-y-1">
            <Link className="hover:underline" href="/acero">
              Tanques de Acero
            </Link>
            <Link className="hover:underline" href="/fibra">
              Tanques de Fibra de Vidrio
            </Link>
            <Link className="hover:underline" href="/residual">
              Tanques para Tratamiento de Agua Residual
            </Link>
            <Link className="hover:underline" href="/mas-servicios">
              Más servicios
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Contáctanos</h4>
          <div className="flex flex-col space-y-1">
            <p>Lima – Perú</p>
            <p>Teléfono: 925 110 992</p>
            <p>Email: proyectos@solinoxperu.com</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4 text-center text-sm text-gray-400 md:px-6">
        © 2024 Solinox. Todos los derechos reservados.
      </div>
    </footer>
  );
}
