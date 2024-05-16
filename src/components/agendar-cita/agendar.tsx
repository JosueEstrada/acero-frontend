"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AgendarCitaSection() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <section className="w-full py-12 ">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Programe una cita con nuestro agente de ventas
          </h2>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Concierte una cita para hablar de su proyecto de construcción de
            tanque de acero, despeje sus dudas con nuestro asesor de ventas y
            consiga un presupuesto personalizado con descuento para su primer
            prototipo.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">
                Proceso de creación de prototipos en 3D
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nuestro equipo trabajará con usted para comprender sus
                necesidades y crear un modelo digital en 3D del tanque de acero
                en escala entre 10 a 50 centímetros. Este modelo se usa para la
                visualización, validación del diseño y planificación de la
                fabricación del tanque a escala real.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Plazo de entrega</h3>
              <p className="text-gray-500 dark:text-gray-400">
                El proceso de creación de prototipos en 3D suele tardar entre 5
                y 7 días laborables desde el momento de la consulta.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Requisitos adicionales</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tenga a mano la siguiente información para su consulta:
                dimensiones del tanque, especificaciones del material y
                limitaciones de diseño.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="mx-auto text-center">
            <p>Seleccionar fecha</p>
            <div className="flex justify-center">
              <Calendar
                initialFocus
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar hora" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="9:00">9:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
                <SelectItem value="11:00">11:00 AM</SelectItem>
                <SelectItem value="13:00">1:00 PM</SelectItem>
                <SelectItem value="14:00">2:00 PM</SelectItem>
                <SelectItem value="15:00">3:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input placeholder="Nombre" />
              <Input placeholder="Email" type="email" />
            </div>
            <Input placeholder="Teléfono" type="tel" />
            <Textarea
              className="min-h-[100px]"
              placeholder="Información adicional de tu proyecto"
            />
            <Button className="w-full" type="submit">
              Agendar cita
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
