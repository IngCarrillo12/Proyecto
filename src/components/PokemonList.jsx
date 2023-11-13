import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { CardPokemon } from '../components/CardPokemon'
import { Loader } from './Loader'
export const PokemonList = () => {
  const { allpokemons, loading, filteredPokemons} = useContext(PokemonContext)

  return (
    <>
			{loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon container'>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allpokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
			)}
		</>
  //   <>
  //   {
  //     loading ? (
  //       <Loader/>
  //     ):(
  //       <div className="container">
  //       <div className="card-list-pokemon">
  //       <>
  //          { 
  //          filtrar?(
  //           filteredPokemons.map(pokemon =>(<CardPokemon pokemon={pokemon} key={pokemon.id}/>))
  //          (setfiltrar(!filtrar))
  //           ):(
  //          allpokemons.map(pokemon =>(<CardPokemon pokemon={pokemon} key={pokemon.id}/>))
  //          )
  //          } 
  //          </>
  //       </div>
  //       </div>
  //   )
  // }
  //   </>
  )
}
