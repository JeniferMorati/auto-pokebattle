export const searchOne = ({ pokemon, setSearch }) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setSearch(data);
      } else {
        setSearch(undefined);
      }
    })
    .catch((error) => console.error(error));
};
