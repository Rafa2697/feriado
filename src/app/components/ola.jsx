import React from "react"

async function getData() {
    const res = await fetch('https://brasilapi.com.br/api/feriados/v1/2025')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary

        throw new Error('Failed to fetch data')
    }


    return res.json()
}

export default async function Ola() {
    const dados = await getData()
    // const dataString = JSON.stringify(dados)
    const feriados = dados.map((feriado) => (
        <div key={feriado.dados}>
          <p>Data: {feriado.date}</p>
          <p>Nome: {feriado.name}</p> <br />
        </div>
      ));
    
    return (

        <div>
            {feriados}
           
        </div>
    );
}
