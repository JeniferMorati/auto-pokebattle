import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-web";
import { listAllPokemons, listAllPokemonsByPage } from "./services/list";
import { searchOne } from "./services/search";
import { styles } from "./styles";
import Search from "./components/Search";
import List from "./components/List";

export default function App() {
  const [pageUrl, setPageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pokemonSearch, setPokemonSearch] = useState(undefined);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    handleLoadMorePokemons();
  }, []);

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
    <View style={styles.container}>
      <Search
        handleSearch={handleSearch}
        handleTextChange={handleTextChange}
        pokemonSearch={pokemonSearch}
        searchText={searchText}
      />
      <List isLoading={isLoading} pokemonList={pokemonList} />
      <Button
        color="#f43f5e"
        disabled={isLoading}
        title="Carregar mais"
        onPress={() => handleLoadMorePokemons()}
      />
    </View>
  );
}
