import { Mensaje } from "@/lib/types";
import { NextResponse } from "next/server"


const mensajes: Mensaje[] = [
    {
        nombre: "Jorge Perez",
        mensaje: "Grandisimos productos.",
        fecha: new Date().toISOString()
    },
    {
        nombre: "Ana Gomez",
        mensaje: "Maravillosa la atención de los chicos.",
        fecha: new Date().toISOString()
    },
    {
        nombre: "Carlos Lopez",
        mensaje: "Gran servicio! Me encantó el trato.",
        fecha: new Date().toISOString()
    }
]

export async function GET() {
    return NextResponse.json( mensajes, {
        status: 200
    })
}

export async function POST(req: Request) {

    try{
        const body: Partial<Mensaje> = await req.json();  
        const { nombre, mensaje } = body;
    
        if (!nombre || !mensaje) {
            return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
        }

        const nuevoMensaje = {
            nombre,
            mensaje,
            fecha: new Date().toISOString()
        }
        
        mensajes.unshift(nuevoMensaje);
        
        return NextResponse.json(nuevoMensaje, {
            status: 201
        });
    }
    catch(error){
        console.error("Error al guardar el mensaje:", error);
        return NextResponse.json({ error: "No hemos podido guardar el mensaje" }, { status: 500 });    
    }

}