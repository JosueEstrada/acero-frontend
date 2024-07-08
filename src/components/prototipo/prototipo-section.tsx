"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Cilindro from "./cilindro";

export default function PrototipoSection() {
  const [radiusTop, setRadiusTop] = useState(1);
  const [radiusBottom, setRadiusBottom] = useState(1);
  const [height, setHeight] = useState(2);
  const cilindroRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full py-12">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Utiliza nuestro nuevo generador de prototipos en 3D
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ajusta los parámetros para crear tu modelo de tanque en 3D.
              Próximamente agregaremos más formas...
            </p>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Altura</Label>
                  <Input
                    id="height"
                    placeholder="Ingresa altura"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                  />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="width">Anchura</Label>
                  <Input
                    id="width"
                    placeholder="Ingresa anchura"
                    type="number"
                  />
                </div> */}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="radius">Radio superior</Label>
                  <Input
                    id="radius"
                    placeholder="Ingresa radio"
                    type="number"
                    value={radiusTop} // Utilizamos radiusTop para el radio
                    onChange={(e) => setRadiusTop(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="length">Radio inferior</Label>
                  <Input
                    id="length"
                    placeholder="Ingresa longitud"
                    type="number"
                    value={radiusBottom} // Utilizamos radiusBottom para el radio inferior
                    onChange={(e) => setRadiusBottom(Number(e.target.value))}
                  />
                </div>
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="material">Material</Label>
                <Select defaultValue="plastic" id="material">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plastic">Fibra</SelectItem>
                    <SelectItem value="metal">Acero</SelectItem>
                    <SelectItem value="wood">Carbono</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <Button className="w-full" type="submit">
                Genera tu prototipo y envíalo a producción
              </Button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <div
              ref={cilindroRef}
              className="relative h-[400px] w-[600px] overflow-auto rounded-lg  bg-gradient-to-br from-gray-100 to-gray-200 p-4 shadow-lg dark:from-gray-800 dark:to-gray-900"
            >
              <div className="absolute inset-0 mx-auto flex items-center justify-center">
                <Cilindro
                  radiusTop={radiusTop}
                  radiusBottom={radiusBottom}
                  height={height}
                  // setRadiusTop={setRadiusTop}
                  // setRadiusBottom={setRadiusBottom}
                  // setHeight={setHeight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
