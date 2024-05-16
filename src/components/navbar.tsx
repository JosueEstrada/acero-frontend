import Link from "next/link";

import {
  ChevronDownIcon,
  MailIcon,
  MenuIcon,
  MountainIcon,
  PhoneIcon,
} from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ModeToggle, ModeToggleSidebar } from "./theme-toggle-button";

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
                  <Link href="/acero">Tanques de Acero</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/fibra">Tanques de Fibra de Vidrio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/residual">
                    Tanques para Tratamiento de Agua Residual
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/mas-servicios">Más servicios</Link>
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
          {/* Sidebar nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <MountainIcon className="h-6 w-6" />
                  <span className="sr-only">Solinox</span>
                </Link>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Nosotros
                </Link>
                <Link
                  href="/certificaciones"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Certificaciones
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="text-muted-foreground hover:text-foreground hover:no-underline">
                      Servicios
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link href="/acero">Tanques de Acero</Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link href="/fibra">Tanques de Fibra de Vidrio</Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link href="/residual">
                        Tanques para Tratamiento de Agua Residual
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link href="/mas-servicios">Más servicios</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger>
                      <Link
                        href="/contacto"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Contacto
                      </Link>
                    </AccordionTrigger>

                    <AccordionContent>
                      <Link href="/agendar-cita">Agendar cita</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <ModeToggleSidebar />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
