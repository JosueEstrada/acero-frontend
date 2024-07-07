"use client";

import { ChangeEvent, useState, useEffect } from "react";
import { FileIcon, TrashIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getSession } from "@/lib/utils";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
export default function CotizacionSection() {
  const [selected3DFile, setSelected3DFile] = useState<File | null>(null);
  const [selectedPdfFile, setSelectedPdfFile] = useState<File | null>(null);
  const [specifications, setSpecifications] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handle3DFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelected3DFile(file);
  };

  const handlePdfFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedPdfFile(file);
  };
  
  const convertFileToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString().split(',')[1]); // Elimina el prefijo "data:application/octet-stream;base64,"
      reader.onerror = (error) => reject(error);
    });
  };
  

  useEffect(() => {
    const session = getSession();
    if (session) {
      session.userData?.email && setIsLoggedIn(true);
      setEmail(session.userData?.email);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let base64_3DFile: any = '';
    let base64_PdfFile: any = '';

    if (selected3DFile) {
      base64_3DFile = await convertFileToBase64(selected3DFile);
    }

    if (selectedPdfFile) {
      base64_PdfFile = await convertFileToBase64(selectedPdfFile);
    }

    const data = {
      specifications,
      email,
      isLoggedIn: isLoggedIn ? 1 : 0,
      file3D: base64_3DFile,
      filePdf: base64_PdfFile
    };

    try {
      if (!isLoggedIn) {
        throw new Error("Debes iniciar sesión para hacer una cotización");
      }

      const response = await fetch("http://localhost:8080/cotizaciones/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // alert("Cotización enviada con éxito");
        localStorage.setItem('alertMessage', 'Cotización enviada con éxito');
        router.push("/");
      } else {
        toast.error('Ups, sucedió un error');
      }
    } catch (error) {
      toast.error('Ups, sucedió un error: ' +error);
    }
  };

  return (
    <>
    <Toaster />
      <section className="w-full py-6">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Solicita una cotización
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cargue sus archivos 3D y especificaciones en PDF para obtener un
              presupuesto personalizado para su proyecto, nos pondremos en
              contacto mediante correo electrónico.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container px-4 md:px-6">
          <form className="grid gap-6 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-lg font-semibold">Cargar archivos</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Arrastre y suelte o haga clic para cargar sus archivos 3D y PDF
                especificaciones.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center space-x-4">
                  <FileIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">Archivo 3D</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      .stl, .obj, .step
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    // onClick={handleFileUpload}
                  >
                    <Input id="file1" type="file" onChange={handle3DFileChange} accept=".stl, .obj, .step" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <TrashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center space-x-4">
                  <FileIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">Especificaciones PDF</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      .pdf
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    // onClick={handleFileUpload}
                  >
                    <Input id="file2" type="file" onChange={handlePdfFileChange} accept=".pdf" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <TrashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center space-x-4">
                  <FileIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">
                      Especificación del tanque
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Describa las necesidades de su tanque
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Textarea
                    className="w-[350px] max-w-[400px] rounded-md border border-gray-200 bg-white p-2 text-sm shadow-sm transition-colors focus:border-gray-400 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 dark:focus:border-gray-600"
                    id="tank-spec"
                    placeholder="Describa las necesidades de su tanque..."
                    value={specifications}
                    onChange={(e) => setSpecifications(e.target.value)}
                  />
                </div>
              </div>
              <Button className="w-full" type="submit">
                  Enviar
                </Button>
            </div>
          </form>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tipos de archivo aceptados: .stl, .obj, .step, .pdf. Por favor,
              incluya la siguiente información en su especificación PDF:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-bold">Dimensiones del Tanque: </span>
                Ancho, Largo, Alto
              </li>
              <li>
                <span className="font-bold">Material:</span>
                Acero al carbono, acero inoxidable, etc.
              </li>
              <li>
                <span className="font-bold">Espesor:</span>
                Pared, Parte inferior, Parte superior
              </li>
              <li>
                <span className="font-bold">Conexiones:</span>
                Entrada, salida, paso, etc.
              </li>
              <li>
                <span className="font-bold">Accesorios:</span>
                Escaleras, plataformas, aislamiento, etc.
              </li>
              <li>
                <span className="font-bold">Tipo de tanque:</span>
                Vertical, Horizontal, Rectangular, etc.
              </li>
              <li>
                <span className="font-bold">Propósito del tanque:</span>
                Almacenamiento, procesamiento, contención, etc.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {
        !isLoggedIn && (
        <section className="w-full pb-12">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Crear una Cuenta</h3>
              <form className="mt-4 grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Escriba su nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Escriba su email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      placeholder="Escriba su número de teléfono"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      placeholder="Escriba una contraseña"
                      type="password"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    placeholder="Escriba el nombre de su compañía"
                  />
                </div>
                <Button className="w-full" type="submit">
                  Crear cuenta y solicitar cotización...
                </Button>
                <Button className="w-full" type="submit" variant="outline">
                  Ya tengo una cuenta, iniciar sesión...
                </Button>
              </form>
            </div>
          </div>
        </section>
        ) 
      }
    </>
  );
}
