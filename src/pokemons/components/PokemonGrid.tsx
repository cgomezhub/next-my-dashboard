import { SimplePokemon } from "../interfaces/simple-pokemons";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 justify-start w-full">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} /> // Uncomment this line and pass the key prop with pokemon.id value
      ))}
    </div>
  );
};
