import React from 'react'
import style from './Botao.module.scss'

export default function Botao({setI,setUrl,i}) {
    
    function scrollToTop () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <div className={style.container}>
                <button
                onClick={() => {
                    if (i > 20) {
                    setI(i - 20); // Atualize o valor de 'i' quando o botão "Anterior" for clicado
                    setUrl(`https://pokeapi.co/api/v2/pokemon/${i}/`);
                    scrollToTop();
                    }
                }}
                style={i > 20 ? {} : { opacity: 0.5 }}
                >
                Anterior
                </button>
                <button
                onClick={() => {
                    setI(i + 20); // Atualize o valor de 'i' quando o botão "Próximo" for clicado
                    setUrl(`https://pokeapi.co/api/v2/pokemon/${i}/`);
                    scrollToTop();
                }}
                >
                Próximo
                </button>
            </div>
    )
}
