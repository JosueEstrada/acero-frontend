/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/dashboard/DataTable";
import PageTitle from "@/components/dashboard/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
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
    name: "John Doe",
    email: "john@example.com",
    lastOrder: "2024-01-01",
    method: "Tarjeta de crédito",
  },
  {
    name: "Alice Smith",
    email: "alice@example.com",
    lastOrder: "2024-02-15",
    method: "Yape",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    lastOrder: "2024-03-20",
    method: "Plim",
  },
  {
    name: "Emma Brown",
    email: "emma@example.com",
    lastOrder: "2024-04-10",
    method: "Tarjeta de crédito",
  },
  {
    name: "Michael Davis",
    email: "michael@example.com",
    lastOrder: "2024-05-05",
    method: "Transferencia bancaria",
  },
  {
    name: "Sophia Wilson",
    email: "sophia@example.com",
    lastOrder: "2024-06-18",
    method: "Transferencia bancaria",
  },
  {
    name: "Liam Garcia",
    email: "liam@example.com",
    lastOrder: "2024-07-22",
    method: "Yape",
  },
  {
    name: "Olivia Martinez",
    email: "olivia@example.com",
    lastOrder: "2024-08-30",
    method: "Transferencia bancaria",
  },
  {
    name: "Noah Rodriguez",
    email: "noah@example.com",
    lastOrder: "2024-09-12",
    method: "Yape",
  },
  {
    name: "Ava Lopez",
    email: "ava@example.com",
    lastOrder: "2024-10-25",
    method: "Yape",
  },
  {
    name: "Elijah Hernandez",
    email: "elijah@example.com",
    lastOrder: "2024-11-05",
    method: "Plim",
  },
  {
    name: "Mia Gonzalez",
    email: "mia@example.com",
    lastOrder: "2024-12-08",
    method: "Yape",
  },
  {
    name: "James Perez",
    email: "james@example.com",
    lastOrder: "2024-01-18",
    method: "Yape",
  },
  {
    name: "Charlotte Carter",
    email: "charlotte@example.com",
    lastOrder: "2024-02-22",
    method: "Tarjeta de crédito",
  },
  {
    name: "Benjamin Taylor",
    email: "benjamin@example.com",
    lastOrder: "2024-03-30",
    method: "Tarjeta de crédito",
  },
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Usuarios" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
