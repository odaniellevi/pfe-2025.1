import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Programação Front-End 2025.1</h1>
      <div className="flex flex-col gap-2">
        <Link href="/app-ex01" className="text-blue-500 hover:underline">
          Exercício 01
        </Link>
        <Link href="/app-ex02" className="text-blue-500 hover:underline">
          Exercício 02
        </Link>
        <Link href="/app-conversores" className="text-blue-500 hover:underline">
          Conversor de Medidas
        </Link>
      </div>
      <p className="text-1xl font-semibold">Site destinado aos exercícios e projetos da cadeira de programação front-end com o professor Márcio Bueno na Universidade Católica de Pernambuco.</p>
    </main>
  );
}