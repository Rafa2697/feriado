

import React from "react"
import { getData } from '../services/api'


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
