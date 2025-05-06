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

function GirarDado({src, alt}) {
  return (
    <img src={src} alt={alt} style={{ borderRadius: '50px', padding: '20px' }}/>
  )
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
      <GirarDado src={`/dado${random}.jpg`} alt={`Dado ${random}`} />
    </div>
  )
}