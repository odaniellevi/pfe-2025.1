'use client';
import { useState } from 'react';
import Image from "next/image";

function Tittle() {
  return (
    <h1>Exercício do componente: Dado</h1>
  )
}

function MyButton({onClick}) {
  return (
    <button onClick = {onClick} style={{ border: "2px solid red", borderRadius: "5px", padding: "10px", cursor: "pointer" }}>GIRAR</button>
  )
}

function gerarNumAleat() {
  return Math.floor(Math.random() * 6) + 1;
}

function Dado({ valor }) {
  return (
    <img
      src={`/dado${valor}.jpg`}
      alt={`Dado ${valor}`}
      style={{ borderRadius: '50px', padding: '20px' }}
    />
  );
}

export default function Home() {
  const [random, setRandom] = useState(1);
  const handleClick = () => {
    setRandom(gerarNumAleat());
  }
  return (
    <div className="container">
      <Tittle/>
      <MyButton onClick={handleClick}/>
      <Dado valor={random} />
    </div>
  )
}