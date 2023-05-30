import { BlurView } from "expo-blur";
import { View } from "react-native-web";
import React from "react";
import { styles } from "../../styles";
import { Input, Text, Heading, Image, Box, VStack } from "native-base";

const Search = ({
  handleTextChange,
  handleSearch,
  pokemonSearch,
  searchText,
  handleSelectedToDuel,
}) => {
  return (
    <BlurView intensity={60} tint="light" style={styles.search}>
      <Box w="full" px="4" maxW="2xl">
        <VStack space={2}>
          <Heading color="rose.900">PokeBattle</Heading>
          <Input
            w="full"
            bg="pink.300"
            placeholderTextColor="rose.900"
            borderWidth={0}
            placeholder="Digite o nome de um Pokemon"
            onChange={handleTextChange}
            onSubmitEditing={handleSearch}
            value={searchText}
          />
          {pokemonSearch && searchText && (
            <View
              style={styles.row}
              onStartShouldSetResponder={() =>
                handleSelectedToDuel(pokemonSearch)
              }
            >
              <View style={styles.pokemon}>
                <View style={styles.coverBoxImage}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonSearch?.id}.gif`,
                    }}
                  />
                </View>
                <Text style={styles.name}>{pokemonSearch?.name}</Text>
              </View>
            </View>
          )}
        </VStack>
      </Box>
    </BlurView>
  );
};

export default Search;
