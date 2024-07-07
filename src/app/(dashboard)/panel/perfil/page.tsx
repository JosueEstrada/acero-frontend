"use client";

import PageTitle from "@/components/dashboard/PageTitle";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormDataUpdateProfile {
  name: string;
  email: string;
  phone: string;
  company: string;
  password: string;
}

export default function PerfilPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataUpdateProfile>();
  const onSubmitUpdateProfile: SubmitHandler<FormDataUpdateProfile> = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/usuarios/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // localStorage.setItem('alertMessage', 'Registro creado correctamente');
        // router.push("/");
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Perfil" />
    <div>
      <div className="rounded-md border">
      <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit(onSubmitUpdateProfile)}>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Datos personales</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
                {...register("name", { required: "El nombre es requerido" })}
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
              />
               {errors.company && <p className="text-red-500">{errors.company.message}</p>}
            </div>
            <Button type="submit" className="w-full mb-5">
              Actualizar perfil
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}