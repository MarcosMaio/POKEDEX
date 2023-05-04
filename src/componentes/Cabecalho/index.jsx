import React from 'react'
import style from './Cabecalho.module.scss'
import logo from './pokemon-logo.png'

export default function Cabecalho({setFiltraPokemons}) {
    return (
        <header>
            <div className={style.container}>
                <h1>Pokedex</h1>
                <img src={logo} alt='Logo Pokemon'/>
                    <div className={style.inputBox}>
                        <input type='text' placeholder='Buscar...'
                        onChange={(event) => {
                        setFiltraPokemons(event.target.value);
                        }}
                        />
                    </div>

            </div>
        </header>
    )
}
