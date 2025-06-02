import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex h-[9rem] pt-[0.5rem] flex-col items-center justify-center bg-gray-100 drop-shadow-sm drop-shadow-gray-600 ">
        <Image
            className="invert-0 rounded"
            src="/komuk_edit.JPG"
            alt="komuk logo"
            width={250}
            height={250}
            priority
        />
        <h1 className="text-2xl font-bold text-center text-black">
          Libro de Visitas
        </h1>
        <p className="text-center text-gray-600 ">
          Tu chance de dejar un mensaje y leer a quien estuvo acá antes.
        </p>
    </header>
  )
}
