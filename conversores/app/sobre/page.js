import Image from "next/image";

export default function Sobre() {
    return (
        <main className = "min-h-screen p-8 flex flex-col items-center justify-center text-center">
            <h1 className = "text-4xl font-bold mb-6">Sobre o Desenvolvedor</h1>

            <Image 
                src="/daniel.jpg"
                alt="Foto de Daniel T.I"
                width={350}
                height={350}
                className="rounded-full mb-6 border-4 border-blue-500 object-cover"
            />


            <p className = "max-w-xl">
                Fala! Eu sou o Daniel, tenho 19 anos de idade, sou estudante de Sistemas para Internet na Universidade Católica de Pernambuco e criador deste conversor. Utilizei Next.js e Tailwind CSS para desenvolver este projeto.
            </p>
        </main>
    )
}