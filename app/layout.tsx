import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymFlow",
  description: "Sistema de gestão para academias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} 
antialiased`}>
        <nav className="border-b p-4 flex gap-6">
          <a href="/dashboard">Dashboard</a>
          <a href="/alunos">Alunos</a>
          <a href="/alunos/novo">Novo Aluno</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
