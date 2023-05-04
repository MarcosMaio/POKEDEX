import { useState } from "react";
import Cabecalho from "../componentes/Cabecalho";
import Pokemons from "../componentes/Pokemons";
import Botao from "../componentes/Botao";
import Api from "../Api";



function App() {
  
  const [filtraPokemons, setFiltraPokemons] = useState('') //Estado responsavel por filtrar os pokemons 
  const [url, setUrl] = useState(''); //Estado responsavel por mudar o valor da url para renderizar os pokemons da api
  const [i, setI] = useState(1); // Estado para controlar o valor inicial de 'i' que e utilizado para manipular quais pokemons irão ser renderizados
  const [pokemons, setPokemons] = useState([]); // Estado para armazenar os dados da API
  
  const filtrandoPokemons = pokemons.filter((pokemon) =>
  pokemon.data.name.toLowerCase().includes(filtraPokemons.toLowerCase()));


  return (
    <main className="App">
        <Cabecalho setFiltraPokemons={setFiltraPokemons}/>
        <Pokemons filtrandoPokemons={filtrandoPokemons}/>
        <Botao 
        setI={setI}
        setUrl={setUrl}
        i={i} />
        
        <Api 
        url={url}
        i={i}
        setPokemons={setPokemons}/>

    </main>
  );
}

export default App;
