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
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  date: Date | undefined;
  hour: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

export default function AgendarCitaSection() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [hour, setHour] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const router = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
    
  //   const data: FormData = {
  //     date,
  //     hour,
  //     name,
  //     email,
  //     phone,
  //     description
  //   };

  //   try {
  //     const response = await fetch("http://localhost:8080/citas/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       // alert("Cita agendada con éxito");
  //       localStorage.setItem('alertMessage', 'Cita agendada con éxito');
  //       router.push("/");
  //     } else {
  //       toast.error('Ups, sucedió un error');
  //     }
  //   } catch (error) {
  //     toast.error('Ups, sucedió un error: ' +error);
  //   }
  // };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    let existeCita : boolean = false;
    const dataToExisteCita = {
      date,
      hour: data.hour
    }

    try {
      const response = await fetch("http://localhost:8080/citas/existe-cita", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToExisteCita),
      });

      if (response.ok) {
        existeCita = await response.json();
      } else {
        toast.error('Ups, sucedió un error');
      }
    } catch (error) {
      toast.error('Ups, sucedió un error');
    }

    if(!existeCita){
      /* AGENDAR CITA */
      const payload = {
        ...data,
        date,
      };
  
      try {
        const response = await fetch("http://localhost:8080/citas/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
  
        if (response.ok) {
          localStorage.setItem('alertMessage', 'Cita agendada con éxito');
          router.push("/");
        } else {
          toast.error('Ups, sucedió un error');
        }
      } catch (error) {
        toast.error('Ups, sucedió un error');
      }
    }else{
      toast.error('Cita ya existe, modificar la fecha');
    }
  };

  return (
    <>
    <Toaster />
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
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            {/* <Select onValueChange={(e) => setHour(e)}> */}
            <Select onValueChange={(value) => setValue("hour", value)}>

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
            {errors.hour && <p className="text-red-500">{errors.hour.message}</p>}
          </div>
          {/* <form className="space-y-4" onSubmit={handleSubmit}> */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input 
              id="name"
              type="text" 
              placeholder="Nombre" 
              {...register("name", { required: "El nombre es requerido" })}
              // required
              // value={name} 
              // onChange={(e) => setName(e.target.value)}
              />
               {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              <Input 
              id="email" 
              placeholder="Email" 
              type="email" 
              {...register("email", { required: "El email es requerido", pattern: { value: /^\S+@\S+$/i, message: "Formato de email inválido" } })}
              // required
              // value={email} 
              // onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <Input
                id="phone"
                type="tel"
                placeholder="Ingresa tu número de teléfono"
                {...register("phone", {
                  required: "El teléfono es requerido",
                  pattern: {
                    value: /^\d{9}$/,
                    message: "El teléfono debe tener exactamente 9 dígitos",
                  },
                })}
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                // required
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            <Textarea
              className="min-h-[100px]"
              placeholder="Información adicional de tu proyecto"
              // id="company"
              id="description"
              {...register("description", { required: "La descripción es requerida" })}
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
              // required
            />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            <Button className="w-full" type="submit">
              Agendar cita
            </Button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
