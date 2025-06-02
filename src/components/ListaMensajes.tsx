"use client";

import { useEffect, useState } from "react";
import { Mensaje } from "@/lib/types";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import Link from "next/link";
import { buttonVariants } from "./ui/button";


export default function ListaMensajes() {

    const [mensajes, setMensajes] = useState<Mensaje[]>([]);

    useEffect(() => {
        fetch("/api/messages")
            .then((res) => res.json())
            .then((data) => setMensajes(data))
            .catch((error) => {
                console.error("No se pudo obtener los mensajes:", error);
            });
    }
    , []);
  return (
    <section className="flex flex-col gap-8 w-full mx-auto px-4 sm:px-0 mt-[9rem]">


      <DataTable columns={columns} data={mensajes} />

      <Link href={"/new"} className={ buttonVariants({ variant: "outline"}) + "text-pretty hover:bg-gray-200 w-[15rem] "}>
        Agregá tu mensaje
      </Link>

    </section>
  )
}
