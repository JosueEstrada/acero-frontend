"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

export default function AccesoPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        router.push("/");
      } else {
        console.error("Error en el acceso");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  // const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
    
  //   const data: FormData = {
  //     email,
  //     password,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:8080/usuarios/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       const userData = await response.json();
  //       localStorage.setItem('user', JSON.stringify(userData));
  //       // if(userData.nombrePerfil === "administrador"){
  //       //   router.push("/panel");
  //       // }else{
  //       //   router.push("/panel/usuarios")
  //       // }
  //       router.push("/");
  //     } else {
  //       console.error("Error en el acceso");
  //     }
  //   } catch (error) {
  //     console.error("Error al enviar los datos:", error);
  //   }
  // };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        {/* <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmitLogin}> */}
        <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Acceso</h1>
            <p className="text-balance text-muted-foreground">
              Ingrese su correo electrónico a continuación para iniciar sesión
              en su cuenta
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
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
                // required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
               {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  ¿Olvidó su contraseña?
                </Link>
              </div>
              <Input 
              id="password" 
              type="password" 
              {...register("password", { required: "La contraseña es requerida" })}
              // required  
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            {/* Aqui segun el tipo de cuenta debe llevar al dashboard de usuario o administrador */}
            <Button type="submit" className="w-full">
              Iniciar Sesión
            </Button>
            {/* <Button variant="outline" className="w-full">
              Iniciar Sesión con Google
            </Button>  */}
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" className="underline">
              Registrarme
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/intro-hero.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-fit object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
