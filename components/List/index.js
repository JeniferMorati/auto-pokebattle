import React from "react";
import { FlatList, Image, Text, View } from "react-native-web";
import { styles } from "../../styles";

const List = ({ pokemonList, isLoading }) => {
  const renderPokemon = ({ item }) => {
    const { name, url, id: searchID } = item;
    const id = url?.split("/").slice(-2, -1)[0] || searchID;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <View style={styles.pokemon}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.row}>
        <FlatList
          data={pokemonList}
          keyExtractor={(item) => item.name}
          renderItem={renderPokemon}
        />
      </View>
      {isLoading && (
        <View style={styles.row}>
          <Text style={styles.name}>Carregando...</Text>
        </View>
      )}
    </>
  );
};

export default List;
