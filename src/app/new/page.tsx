"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  mensaje: z.string().min(20, { message: "El mensaje debe tener al menos 20 caracteres" })
})

export default function Page() {

  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      mensaje: ""
    }
  })

 async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })

      if (!res.ok) throw new Error("Error al enviar el mensaje")
      
      setSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Error:", error)
      setSuccess(false);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormDescription>Este es el nombre que vas a mostrar al público</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Input placeholder="Dejá tu mensaje" {...field} />
                </FormControl>
                <FormDescription>Compartí tu experiencia!</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="bg-gray-200 text-gray-950 hover:bg-gray-400" type="submit">Enviar mensaje</Button>
        </form>
      </Form>

      {success && (
        <div className="mt-4 text-green-600">
          <p>¡Mensaje enviado con éxito!</p>
        </div>
      )}

      {success == false && (
        <div className="mt-4 text-red-600">
          <p>Hubo un error al enviar el mensaje. Por favor, intentalo de nuevo.</p>
        </div>
      )}

      <Link href="/" className={buttonVariants({ variant: "outline" }) + " mt-4"}>
        Volver al libro de visitas
      </Link>
    </div>
  )
}
