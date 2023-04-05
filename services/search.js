export const searchOne = ({ pokemon, setSearch, setDuel, pokeDuel }) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        if (setSearch) {
          setSearch(data);
        } else {
          const arenaIsFull = pokeDuel.length === 2;
          if (!arenaIsFull) {
            pokeDuel.length
              ? setDuel((currentPokemon) => [...currentPokemon, data])
              : setDuel([data]);
          }
        }
      } else {
        setSearch(undefined);
      }
    })
    .catch((error) => console.error(error));
};
