"use client";
/** @format */

import BarChart from "@/components/dashboard/BarChart";
import Card, { CardContent, CardProps } from "@/components/dashboard/Card";
import PageTitle from "@/components/dashboard/PageTitle";
import SalesCard, { SalesProps } from "@/components/dashboard/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DataTable } from "@/components/dashboard/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { getSession } from "@/lib/utils";

const cardData: CardProps[] = [
  {
    label: "Total de ventas por web",
    amount: "S/. 17,231.89",
    discription: "+20.1% desde el mes pasado",
    icon: DollarSign,
  },
  {
    label: "Pedidos de prototipo",
    amount: "+20",
    discription: "+180.1% desde el mes pasado",
    icon: Users,
  },
  {
    label: "Ventas finales",
    amount: "+8",
    discription: "+19% desde el mes pasado",
    icon: CreditCard,
  },
  {
    label: "Prototipos en espera",
    amount: "+4",
    discription: "En espera de aprobación",
    icon: Activity,
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+S/1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+S/1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+S/390.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+S/299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+S/200.00",
  },
];
/* CODIGO NUEVO */
interface Appointment {
  name: string;
  email: string;
  phone: string;
  description: string;
  date: Date | undefined;
  hour: string;
}

const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Celular",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
  {
    accessorKey: "hour",
    header: "Hora",
  }
];

const appointmentData: Appointment[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-789",
    description: "Checkup appointment",
    date: new Date("2024-06-15"),
    hour: "10:00 AM"
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-321",
    description: "Dental cleaning",
    date: new Date("2024-06-17"),
    hour: "2:30 PM"
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "555-123-456",
    description: "Orthodontic consultation",
    date: new Date("2024-06-20"),
    hour: "11:45 AM"
  }
]

export default function Home() {
  const [appointments, setAppointments] = useState<Array<Appointment>>([]);
  //const [quotes, setQuotes] = useState<Array<Quote>>([]);
  const session = getSession();
  useEffect(() => {

    const getAppointmentData = async () => {
     
      try {
        console.log(session);
        const response = await fetch(`http://localhost:8080/panel/${session && session.userData.email}`);

  
        if (!response.ok) {
          throw {
            status: response.status, statusText: response.statusText
          }
        }
  
        const data = await response.json();
        console.log(data);
        data.citas && setAppointments(data.citas);
        //setQuotes(data.quotes);
      } catch (error: any) {
        console.error("Error al enviar los datos:", error.statusText);
      }
    };
    getAppointmentData();
  }, [])
 
  return (
    <div className="flex flex-col gap-5  w-full">
    <PageTitle title="Citas" />
    <DataTable columns={columns} data={appointments} />
  </div>
    // <div className="flex flex-col gap-5  w-full">
    //   <PageTitle title="Dashboard" />
    //   <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
    //     {cardData.map((d, i) => (
    //       <Card
    //         key={i}
    //         amount={d.amount}
    //         discription={d.discription}
    //         icon={d.icon}
    //         label={d.label}
    //       />
    //     ))}
    //   </section>
    //   <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
    //     <CardContent>
    //       <p className="p-4 font-semibold">Vista general</p>

    //       <BarChart />
    //     </CardContent>
    //     <CardContent className="flex justify-between gap-4">
    //       <section>
    //         <p>Prototipos producidos X Precio</p>
    //         <p className="text-sm text-gray-400">
    //           Realizaste 10 prototipos este mes.
    //         </p>
    //       </section>
    //       {uesrSalesData.map((d, i) => (
    //         <SalesCard
    //           key={i}
    //           email={d.email}
    //           name={d.name}
    //           saleAmount={d.saleAmount}
    //         />
    //       ))}
    //     </CardContent>

    //     {/*  */}
    //   </section>
    // </div>
  );
}
