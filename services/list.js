export const listAllPokemons = async ({ setPage, setList, setLoading }) => {
  setLoading(true);
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then((response) => response.json())
    .then((data) => {
      setList(data.results);
      data?.next && setPage(data?.next);
    })
    .catch((error) => console.error(error));
  setLoading(false);
};

export const listAllPokemonsByPage = async ({
  setList,
  setPage,
  pageUrl,
  setLoading,
}) => {
  setLoading(true);
  await fetch(pageUrl)
    .then((response) => response.json())
    .then((data) => {
      setList((currentPokemons) => [...currentPokemons, ...data.results]);
      data?.next && setPage(data?.next);
    })
    .catch((error) => console.error(error));
  setLoading(false);
};
