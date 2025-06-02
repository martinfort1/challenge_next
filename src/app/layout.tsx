import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Challenge Técnico - Next.js",
  description: "Libro de visitas para desafío técnico",
  icons:{
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
