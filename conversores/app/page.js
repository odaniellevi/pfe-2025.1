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
      <div className = "flex flex-col gap-4">
        <Link href = "/sobre" className = "text-blue-600 hover:underline">Sobre</Link>
        <Link href = "/dolar" className = "text-blue-600 hover:underline">Conversor de Dólar</Link>
        <Link href = "/temperatura" className = "text-blue-600 hover:underline">Conversor de Temperatura</Link>
        <Link href = "/comprimento" className = "text-blue-600 hover:underline">Conversor de Comprimento</Link>
        </div>
    </main>
  )
}