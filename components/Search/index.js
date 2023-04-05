import { BlurView } from "expo-blur";
import { Image, Text, TextInput, View } from "react-native-web";
import React from "react";
import { styles } from "../../styles";

const Search = ({
  handleTextChange,
  handleSearch,
  pokemonSearch,
  searchText,
}) => {
  return (
    <BlurView intensity={60} tint="light" style={styles.search}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome de um Pokemon"
        onChange={handleTextChange}
        onSubmitEditing={handleSearch}
        value={searchText}
      />
      {pokemonSearch && searchText && (
        <View style={styles.row}>
          <View style={styles.pokemon}>
            <Image
              style={styles.image}
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonSearch?.id}.png`,
              }}
            />
            <Text style={styles.name}>{pokemonSearch?.name}</Text>
          </View>
        </View>
      )}
    </BlurView>
  );
};

export default Search;
