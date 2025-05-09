'use client';
import { useState } from "react";

export default function Temperatura() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);

    const handleCelsius = (e) => {
        const value = parseFloat(e.target.value || 0);
        setCelsius(value);
        setFahrenheit((value * 9) / 5 + 32);
    };

    const handleFahrenheit = (e) => {
        const value = parseFloat(e.target.value || 0);
        setFahrenheit(value);
        setCelsius(((value - 32) * 5) / 9);
    };

    return (
        <main className="min-h-screen p-8 flex flex-col items-center justify-center bg-black text-white">
          <h1 className="text-3xl font-bold text-blue-400 mb-6">Conversor ºC ↔ ºF</h1>
          <div className="flex flex-col gap-4 border border-blue-500 p-6 rounded-lg">
            <label className="text-white">Celsius</label>
            <input type="number" value={celsius} onChange={handleCelsius} className="bg-white text-black border p-2 rounded" placeholder="Celsius" />
            <label className="text-white">Fahrenheit</label>
            <input type="number" value={fahrenheit} onChange={handleFahrenheit} className="bg-white text-black border p-2 rounded" placeholder="Fahrenheit" />
          </div>
        </main>
    )
}