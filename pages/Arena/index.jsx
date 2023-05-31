import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-web";
import { listAllPokemons, listAllPokemonsByPage } from "../../services/list";
import { searchOne } from "../../services/search";
import Header from "../../components/Header";
import List from "../../components/List";
import BattleComponent from "../../components/Battle";
import { Center, Box } from "native-base";
import { useMainContext } from "../../context/main";

export default function Arena() {
  const { authProvider } = useMainContext();
  const [pageUrl, setPageUrl] = useState("");
  const [pokeDuel, setPokeDuel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pokemonSearch, setPokemonSearch] = useState(undefined);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    handleLoadMorePokemons();
  }, []);

  const handleSelectedToDuel = (pokemon) => {
    const hasPokemon = !!pokeDuel?.find((rival) => rival.name === pokemon.name);
    if (!pokeDuel <= 2 && !hasPokemon) {
      searchOne({
        pokeDuel,
        pokemon: pokemon.name,
        setDuel: setPokeDuel,
      });
    }
  };

  const handleLoadMorePokemons = () => {
    if (!pageUrl) {
      listAllPokemons({
        setList: setPokemonList,
        setPage: setPageUrl,
        setLoading: setIsLoading,
      });
    } else {
      listAllPokemonsByPage({
        setList: setPokemonList,
        setPage: setPageUrl,
        pageUrl: pageUrl,
        setLoading: setIsLoading,
      });
    }
  };

  const handleSearch = () => {
    if (searchText) {
      searchOne({
        pokemon: searchText,
        setSearch: setPokemonSearch,
      });
    }
  };

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Center bgColor="pink.200" py="32">
      <Header
        handleSearch={handleSearch}
        handleTextChange={handleTextChange}
        pokemonSearch={pokemonSearch}
        searchText={searchText}
        handleSelectedToDuel={handleSelectedToDuel}
        handleSignOut={authProvider.signOut}
      />
      <Box w="full" alignItems="center" maxW="2xl">
        <List
          isLoading={isLoading}
          pokemonList={pokemonList}
          handleSelectedToDuel={handleSelectedToDuel}
        />
        <Button
          color="#f43f5e"
          disabled={isLoading}
          title="Carregar mais"
          onPress={() => handleLoadMorePokemons()}
        />
        <BattleComponent pokemons={pokeDuel} setDuel={setPokeDuel} />
      </Box>
    </Center>
  );
}
