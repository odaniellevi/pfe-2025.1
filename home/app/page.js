import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Programação Front-End 2025.1</h1>
      <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
        <Link href="/app-ex01" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition-all duration-200 transform hover:bg-blue-700 hover:scale-105 text-center mt-8">
          Exercício 01
        </Link>
        <Link href="/app-ex02" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition-all duration-200 transform hover:bg-blue-700 hover:scale-105 text-center">
          Exercício 02
        </Link>
        <Link href="/app-conversores" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition-all duration-200 transform hover:bg-blue-700 hover:scale-105 text-center">
          Conversor de Medidas
        </Link>
      </div>
      <div className="mt-auto text-center">
        <p className="text-1xl font-semibold mb-0">Desenvolvido por: Daniel Levi.</p>
        <p className="text-1xl font-semibold mb-0">Ferramenta utilizada: Next.JS</p>
      </div>
    </main>
  );
}