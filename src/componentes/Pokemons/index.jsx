import { useState } from 'react';
import style from './Pokemons.module.scss';

export default function Pokemons({filtrandoPokemons}) { 
    const [hoveredItens, setHoveredItens] = useState(Array(filtrandoPokemons.length).fill(true));
    
    const hoveredMouseEnter = (index) => {
        const newHoveredItens = [...hoveredItens];
        newHoveredItens[index] = true;
        setHoveredItens(newHoveredItens)
    }

    const hoveredMouseLeave = (index) => {
        const newHoveredItens = [...hoveredItens];
        newHoveredItens[index] = false;
        setHoveredItens(newHoveredItens)
    }


    return (

        <section className={style.seçãoPokemons}>
            {filtrandoPokemons.map((pokemon, index) => (
                <div className={style.listaPokemons} key={pokemon.name}
                            onMouseEnter={() => hoveredMouseEnter(index)}
                            onMouseLeave={() => hoveredMouseLeave(index)}
                >
                    {!hoveredItens[index] ? (
                        <div className={style.container1}
                            >
                        <span>
                            <span className={style.indentificadorPokemon}>
                                <span>N°</span> 
                                {String(pokemon.data.id).padStart(4, '0')}
                            </span>
                        </span>
                            <img className={style.pokemonsImagens} src={pokemon.data.sprites.front_default} alt={pokemon.data.name}/>
                            
                            <span className={style.types}>
                                    {pokemon.data.types.map((ab, key) => {
                                         // Inicializa a cor como uma string vazia
                                        let background = '';
                                        switch (ab.type.name) {
                                            case 'normal':
                                                background = '#a4a4a4';
                                                break;
                                            case 'grass':
                                                background = '#9bcc50';
                                                break;
                                            case 'fire':
                                                background = '#fd7d24';
                                                break;
                                            case 'water':
                                                background = '#4592c4';
                                                break;
                                                case 'ground':
                                                background = 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)';
                                                break;
                                                case 'psychic':
                                                background = '#f366b9';
                                                break;
                                                case 'steel':
                                                background = '#9eb7b8';
                                                break;
                                                case 'flying':
                                                background = 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)';
                                                break;
                                                case 'fighting':
                                                background = '#d56723';
                                                break;
                                                case 'poison':
                                                background = '#b97fc9';
                                                break;
                                                case 'electric':
                                                background = '#eed535';
                                                break;
                                                case 'rock':
                                                background = '#a38c21';
                                                break;
                                                case 'bug':
                                                background = '#729f3f';
                                                break;
                                                case 'ghost':
                                                background = '#7b62a3';
                                                break;
                                                case 'dragon':
                                                background = 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)';
                                                break;
                                                case 'dark':
                                                background = '#707070';
                                                break;
                                                case 'fairy':
                                                background = '#fdb9e9';
                                                break;
                                                case 'ice':
                                                background = '#51c4e7';
                                                break;
                                            default:
                                                background = 'black'; // Cor padrão para tipos não mapeados
                                        }
                                                return (
                                                <span key={key} style={{ background: background}}>
                                                    <span>{ab.type.name}</span>
                                                    {key < pokemon.data.types.length - 1 ? ' ' : ''}
                                                </span>
                                            );
                                        })}
                                    </span>
                        </div>
        ) : 
                        
                                <ul className={style.container2}>
                                <li>   
                                    <div className={style.divisão}>
                                            <h3>{pokemon.data.name}</h3>
                                                
                                                <span className={style.estatisticas}>
                                                    <span>Peso: </span>
                                                    {new String(pokemon.data.weight / 10).replace(".", ",")}
                                                    kg
                                                </span>
                                                
                                                <span className={style.estatisticas}>
                                                    <span>Altura: </span>
                                                    {pokemon.data.height >= 10 ? (pokemon.data.height / 10 + "m").replace(".", ",") : (pokemon.data.height < 10 ? (pokemon.data.height / 10 + "cm").replace(".", ",") : (pokemon.data.height * 10 + "cm").replace(".", ","))}
                                                </span>
                                        </div>
                                        <span className={style.abilities}>
                                            {pokemon.data.abilities.map((ab, key) => (
                                                <span key={key}>
                                                    <span>{ab.ability.name}</span>
                                                    {key < pokemon.data.abilities.length - 1 ? ' ' : ''}
                                                </span>
                                            ))}
                                        </span>
                                </li>
                            </ul> 
                            }
                    </div>    
            ))}
        </section>
            );
    }


