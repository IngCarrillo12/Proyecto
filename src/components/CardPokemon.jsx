import React from 'react'
import { Link } from 'react-router-dom'

export const CardPokemon = ({ pokemon })=>{
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
            <div className="pokemon-img">
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            </div>
            <div className="pokemon-info">
                <span className="pokemon-id">Nº{pokemon.id}</span>
                <h3 className="pokemon-name text-capitalize">{pokemon.name}</h3>
                <div className="pokemon-types">
                  {
                    pokemon.types.map(type =>(
                        <span className={`type ${type.type.name}`} key={type.type.name}>{type.type.name}</span>
                    ))
                  }
                    
                  
                </div>
            </div>
        </Link>
  )
}
