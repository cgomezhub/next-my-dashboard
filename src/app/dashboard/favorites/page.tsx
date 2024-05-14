import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "pokemons favoritos",
  description: "Listado de Pokemons favoritos",
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-4 font-bold text-center">
        Listado de Pokemons <small className="text-blue-600"> estático</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
