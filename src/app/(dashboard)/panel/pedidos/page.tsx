/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/dashboard/DataTable";
import PageTitle from "@/components/dashboard/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};
type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Pedido",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pendiente",
            "bg-orange-200": row.getValue("status") === "Procesando",
            "bg-green-200": row.getValue("status") === "Completado",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: "Último pedido",
  },
  {
    accessorKey: "method",
    header: "Método de pago",
  },
];

const data: Payment[] = [
  {
    order: "PED001",
    status: "Pendiente",
    lastOrder: "2024-01-15",
    method: "Tarjeta de crédito",
  },
  {
    order: "PED002",
    status: "Procesando",
    lastOrder: "2024-02-20",
    method: "Yape",
  },
  {
    order: "PED003",
    status: "Completado",
    lastOrder: "2024-03-10",
    method: "Plim",
  },
  {
    order: "PED004",
    status: "Pendiente",
    lastOrder: "2024-04-05",
    method: "Yape",
  },
  {
    order: "PED005",
    status: "Completado",
    lastOrder: "2024-05-12",
    method: "Depósito bancario",
  },
  {
    order: "PED006",
    status: "Procesando",
    lastOrder: "2024-06-18",
    method: "Apple Pay",
  },
  {
    order: "PED007",
    status: "Completado",
    lastOrder: "2024-07-22",
    method: "Depósito bancario",
  },
  {
    order: "PED008",
    status: "Pendiente",
    lastOrder: "2024-08-30",
    method: "Depósito bancario",
  },
  {
    order: "PED009",
    status: "Procesando",
    lastOrder: "2024-09-05",
    method: "Yape",
  },
  {
    order: "PED010",
    status: "Completado",
    lastOrder: "2024-10-18",
    method: "Yape",
  },
  {
    order: "PED011",
    status: "Pendiente",
    lastOrder: "2024-11-25",
    method: "Yape",
  },
  {
    order: "PED012",
    status: "Completado",
    lastOrder: "2024-12-08",
    method: "Yape",
  },
  {
    order: "PED013",
    status: "Procesando",
    lastOrder: "2024-01-15",
    method: "Plim",
  },
  {
    order: "PED014",
    status: "Completado",
    lastOrder: "2024-02-20",
    method: "Yape",
  },
  {
    order: "PED015",
    status: "Pendiente",
    lastOrder: "2024-03-30",
    method: "Tarjeta de crédito",
  },
];

export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Pedidos" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
