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
        <Link href = "/sobre" className = "bg-transparent text-blue-600 font-bold py-2 px-4 rounded-xl transition-all duration-200 transform hover:bg-blue-600 hover:text-white hover:scale-105 text-center sm:bg-blue-600 sm:text-white sm:hover:bg-blue-600 sm:hover:text-white sm:transform-none">Sobre</Link>
        <Link href = "/dolar" className = "bg-transparent text-blue-600 font-bold py-2 px-4 rounded-xl transition-all duration-200 transform hover:bg-blue-600 hover:text-white hover:scale-105 text-center sm:bg-blue-600 sm:text-white sm:hover:bg-blue-600 sm:hover:text-white sm:transform-none">Conversor de Dólar</Link>
        <Link href = "/temperatura" className = "bg-transparent text-blue-600 font-bold py-2 px-4 rounded-xl transition-all duration-200 transform hover:bg-blue-600 hover:text-white hover:scale-105 text-center sm:bg-blue-600 sm:text-white sm:hover:bg-blue-600 sm:hover:text-white sm:transform-none">Conversor de Temperatura</Link>
        <Link href = "/comprimento" className = "bg-transparent text-blue-600 font-bold py-2 px-4 rounded-xl transition-all duration-200 transform hover:bg-blue-600 hover:text-white hover:scale-105 text-center sm:bg-blue-600 sm:text-white sm:hover:bg-blue-600 sm:hover:text-white sm:transform-none">Conversor de Comprimento</Link>
        </div>
    </main>
  )
}