import Link from "next/link";

import {
  ChevronDownIcon,
  MailIcon,
  MenuIcon,
  MountainIcon,
  PhoneIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ModeToggle from "./theme-toggle-button";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 bg-primary py-2 text-sm text-white dark:bg-primary/50">
        <PhoneIcon className="h-4 w-4" />
        <span>123-456-7890</span>
        <span className="mx-4">|</span>
        <MailIcon className="h-4 w-4" />
        <span>info@example.com</span>
      </div>
      <header className="py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Solinox</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link className="font-medium " href="/">
              Inicio
            </Link>
            <Link className="font-medium " href="/nosotros">
              Nosotros
            </Link>
            <Link className="font-medium " href="/certificaciones">
              Certificaciones
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium ">
                Servicios
                <ChevronDownIcon className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="#">Tanques de Acero</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Tanques de Fibra de Vidrio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">
                    Tanques para Tratamiento de Agua Residual
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Más servicios</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link className="font-medium " href="/blog">
              Blog
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium ">
                Contacto
                <ChevronDownIcon className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/contacto">Contacto</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/agendar-cita">Agendar cita</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </nav>
          <Button className="md:hidden" variant="outline">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
    </>
  );
}
