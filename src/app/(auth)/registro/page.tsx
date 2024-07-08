"use client"; // Esto marca el componente como un Client Component

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  password: string;
}

export default function RegistroPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data: FormData = {
  //     name,
  //     email,
  //     phone,
  //     company,
  //     password,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:8080/usuarios/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       //router.push("/acceso");
  //       localStorage.setItem('alertMessage', 'Registro creado correctamente');
  //       router.push("/");
  //     } else {
  //       console.error("Error en el registro");
  //     }
  //   } catch (error) {
  //     console.error("Error al enviar los datos:", error);
  //   }
  // };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/usuarios/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        localStorage.setItem('alertMessage', 'Registro creado correctamente');
        router.push("/");
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        {/* <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit}> */}
        <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Registrarme</h1>
            <p className="text-balance text-muted-foreground">
              Ingresa tus datos para crear una cuenta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
                {...register("name", { required: "El nombre es requerido" })}
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                // required
              />
               {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@ejemplo.com"
                {...register("email", { 
                  required: "El correo electrónico es requerido", 
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "El formato del correo electrónico no es válido"
                  }
                })}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                // required
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Ingresa tu número de teléfono"
                {...register("phone", { 
                  required: "El teléfono es requerido", 
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: "El teléfono debe tener exactamente 9 dígitos"
                  }
                })}
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                // required
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                type="text"
                placeholder="Ingresa el nombre de tu Empresa"
                {...register("company", { required: "La empresa es requerida" })}
                // value={company}
                // onChange={(e) => setCompany(e.target.value)}
                // required
              />
               {errors.company && <p className="text-red-500">{errors.company.message}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Ingrese tu contraseña"
                {...register("password", { required: "La contraseña es requerida" })}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                // required
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              Registrarme
            </Button>
            {/* <Button variant="outline" className="w-full">
              Registrar con Google
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            ¿Ya tiene una cuenta?{" "}
            <Link href="/acceso" className="underline" prefetch={false}>
              Acceder
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/galeria1.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
