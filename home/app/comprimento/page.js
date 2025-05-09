'use client';
import { useState } from "react";

export default function Comprimento() {
    const [metros, setMetros] = useState(0);
    const [pes, setPes] = useState(0);

    const handleMetros = (e) => {
        const m = parseFloat(e.target.value || 0);
        setMetros(m);
        setPes(m * 3.28084);
    };

    const handlePes = (e) => {
        const p = parseFloat(e.target.value || 0);
        setPes(p);
        setMetros(p / 3.28084);
    };

    return (
        <main className = "min-h-screen p-8 flex flex-col items-center justify-center bg-black text-white">
            <h1 className = "text-3xl font-bold text-blue-400 mb-6">Conversor de Metros ↔ Pés</h1>
            <div className = "flex flex-col gap-4 border border-blue-500 p-6 rounded-lg">
                <label className = "text-white">Metros</label>
                <input type = "number" value = {metros} onChange = {handleMetros} className = "bg-white text-black border p-2 rounded" placeholder = "Metros" />
                <label className = "text-white">Pés</label>
                <input type = "number" value = {pes} onChange = {handlePes} className = "bg-white text-black border p-2 rounded" placeholder = "Pés" />
            </div>
        </main>
    )
}