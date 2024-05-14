"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";



export const FavoritePokemons = () => {
  const isFavorite = useAppSelector(state => Object.values(state.pokemons.favorites))
  // console.log(isFavoriteArray);

  const [pokemons, setPokemons] = useState(isFavorite)

  return (
    <>
      {isFavorite.length === 0 ? (
        <NoFavorites /> 
      ) : (
        <PokemonGrid pokemons={isFavorite}/>
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-5xl my-4 font-bold text-center">
        No hay Pokemons <small className="text-blue-600"> favoritos</small>
      </span>
      <IoHeartOutline size={100} className="text-red-500" />
    </div>
  );
};
