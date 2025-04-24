'use client';
import { useState } from "react";

export default function Dolar() {
    const cotacao = 5.67;
    const [real, setReal] = useState(0);
    const [dolar, setDolar] = useState(0);

    const handleReal = (e) => {
        const value = parseFloat(e.target.value || 0);
        setReal(value);
        setDolar((value / cotacao).toFixed(3));
    };

    const handleDolar = (e) => {
        const value = parseFloat(e.target.value || 0);
        setDolar(value);
        setReal((value * cotacao).toFixed(2));
    };

    return (
        <main className="min-h-screen p-8 bg-black flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold text-blue-400 mb-8">Conversor Dólar ↔ Real</h1>
          <div className="flex flex-col gap-6 border border-blue-500 rounded-xl p-8">
            <div className="flex flex-col">
              <label className="mb-2">Valor em Reais (BRL)</label>
              <input type="number" value={real} onChange={handleReal} className="bg-white text-black border p-2 rounded" placeholder="Reais" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Valor em Dólares (USD)</label>
              <input type="number" value={dolar} onChange={handleDolar} className="bg-white text-black border p-2 rounded" placeholder="Dólares" />
            </div>
          </div>
        </main>
    );
}