import axios from 'axios';
import React, { useEffect} from 'react'

export default function Api({url , i , setPokemons}) {
    const limitePokemons = 20;
    

    useEffect(() => {
        getPokemons();
    }, [url, i]); // Atualize o efeito sempre que a URL ou 'i' mudar

    const getPokemons = async () => {
        var endPoints = [];
        for (var j = i; j < limitePokemons + i; j++) {
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${j}/`);
        }

        var response = axios
        .all(endPoints.map((endPoint) => axios.get(endPoint)))
        .then((res) => setPokemons(res));
        return response;
    };

    return (
        <div>
            <></>
        </div>
    )

}