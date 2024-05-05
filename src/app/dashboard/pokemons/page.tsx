import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getpokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await response.json();

  // console.log(data.results);

  const pokemons = data.results.map((pokemon) => {
    return {
      name: pokemon.name,
      id: pokemon.url.split("/").at(-2)!,
    };
  });

  // throw new Error("Error al cargar los pokemons");
  // throw notFound();

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getpokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-4 font-bold text-center">
        Listado de Pokemons <small> estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
