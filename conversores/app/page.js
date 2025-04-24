'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <main className = "min-h-screen p-8 flex flex-col items-center justify-center text-center">
      <h1 className = "text-4xl font-bold mb-6">Bem-vindo ao Conversor!</h1>
      <p className = "mb-6 max-w-xl">
        Este é um aplicativo de conversões rápidas e fáceis.
      </p>
      <div className = "flex flex-col gap-4 w-full max-w-xs">
        <Link href = "/sobre" className = "text-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 text-center">Sobre</Link>
        <Link href = "/dolar" className = "text-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 text-center">Conversor de Dólar</Link>
        <Link href = "/temperatura" className = "text-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 text-center">Conversor de Temperatura</Link>
        <Link href = "/comprimento" className = "text-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 text-center">Conversor de Comprimento</Link>
        </div>
    </main>
  )
}