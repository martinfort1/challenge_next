"use client";

import ListaMensajes from "@/components/ListaMensajes";

export default function Home() {

  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-8 gap-15">

      <main className="flex flex-col gap-[16px] row-start-3 items-center w-full max-w-2xl">
          
          <ListaMensajes />

      </main>
    </div>
  );
}
