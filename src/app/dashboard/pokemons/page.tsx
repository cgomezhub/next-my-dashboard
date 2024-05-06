import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "151 pokemons",
  description: "Listado de 151 Pokemons estático",
};

const getpokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  // console.log(data.results);

  const pokemons = response.results.map((pokemon) => {
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
