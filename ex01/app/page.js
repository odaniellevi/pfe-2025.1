function Texto1() {
  return <p>Um outro parágrafo de texto</p>
}

export default function Home() {
  const aula = 2
  return (
    <div>
      <h1>Olá Turma!!!</h1>
      <p>Essa é a nossa {aula}ª aula de React</p>
      <p>Um outro parágrafo de texto</p>
      <Texto1 />
    </div>
  )
}