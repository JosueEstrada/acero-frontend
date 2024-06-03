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

interface Setting {
  category: string;
  value: string | number | boolean;
}

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Categoría",
  },
  {
    accessorKey: "value",
    header: "Valor",
  },
];
const data: Setting[] = [
  {
    category: "Cuenta",
    value: "Administrador",
  },
  {
    category: "Notificaciones",
    value: "Activado",
  },
  {
    category: "Lenguaje",
    value: "Español",
  },
  {
    category: "Tema",
    value: "claro",
  },
];

export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Ajustes" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
