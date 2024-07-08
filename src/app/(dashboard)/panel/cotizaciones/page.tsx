/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/dashboard/DataTable";
import PageTitle from "@/components/dashboard/PageTitle";
import { getSession } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import QuoteItem from "@/components/dashboard/QuotesTable";

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
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          {row.getValue('usuario.email')}
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



/* NUEVO CÓDIGO */
interface Quote {
  email: string;
  // selected3DFile: File | null;
  // selectedPdfFile: File | null;
  specifications: string;
}

const quoteColumns: ColumnDef<Quote>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  // {
  //   accessorKey: "selected3DFile",
  //   header: "Archivo 3D"
  // },
  // {
  //   accessorKey: "selectedPdfFile",
  //   header: "Archivo PDF"
  // },
  {
    accessorKey: "specifications",
    header: "Especificaciones"
  }
];


export default function UsersPage({}: Props) {

  const [quotes, setQuotes] = useState<Array<any>>([]);
  const session = getSession();
  useEffect(() => {
    const getQuotesData = async () => {

      try {
        const response = await fetch(`http://localhost:8080/panel/${session && session.userData.email}`);
  
        if (!response.ok) {
          throw {
            status: response.status, statusText: response.statusText
          }
        }
  
        const data = await response.json();
        data.cotizaciones && setQuotes(data.cotizaciones);
      } catch (error: any) {
        console.error("Error al enviar los datos:", error.statusText);
      }
    };
    getQuotesData();
  }, [])

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Cotizaciones" />
      {/* <DataTable columns={quoteColumns} data={quotes} /> */}
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Archivo 3D</TableHead>
            <TableHead>Archivo Pdf</TableHead>
            <TableHead>Especificaciones</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
                {quotes.map((item, index) => (
                  <QuoteItem key={index} quote={item} />
                ))}
          </TableBody>
        </Table>
      </div>
    </div>
    </div>
  );
}
