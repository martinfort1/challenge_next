"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Mensaje } from "@/lib/types";

export const columns: ColumnDef<Mensaje>[] = [
  {
    accessorKey: "nombre",
    header: "Nombre",
    cell: ({ row }) => <span className="text-pretty">{row.getValue("nombre")}</span>,
  },
  {
    accessorKey: "mensaje",
    header: "Mensaje",
    cell: ({ row }) => <span className="text-pretty">{row.getValue("mensaje")}</span>,
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
    cell: ({ row }) => (
      <span className="text-pretty">
        {new Date(row.getValue("fecha")).toLocaleDateString("es-AR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </span>
    ),
  },
];