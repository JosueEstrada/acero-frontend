/** @format */

import BarChart from "@/components/dashboard/BarChart";
import Card, { CardContent, CardProps } from "@/components/dashboard/Card";
import PageTitle from "@/components/dashboard/PageTitle";
import SalesCard, { SalesProps } from "@/components/dashboard/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Vista general</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Prototipos producidos X Precio</p>
            <p className="text-sm text-gray-400">
              Realizaste 10 prototipos este mes.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
