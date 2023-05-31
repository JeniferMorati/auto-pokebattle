import { BlurView } from "expo-blur";
import { View } from "react-native-web";
import React from "react";
import { styles } from "../../styles";
import {
  Input,
  Text,
  Heading,
  Image,
  Box,
  VStack,
  Button,
  Flex,
} from "native-base";

const Header = ({
  handleTextChange,
  handleSearch,
  pokemonSearch,
  searchText,
  handleSelectedToDuel,
  handleSignOut,
}) => {
  return (
    <BlurView intensity={60} tint="light" style={styles.search}>
      <Box w="full" px="4" maxW="2xl">
        <VStack space={2}>
          <Heading color="rose.900">PokeBattle</Heading>
          <VStack
            space={2}
            alignItems="center"
            justifyContent="space-between"
            direction="row"
          >
            <Input
              h="10"
              w="full"
              maxW="64"
              bg="pink.300"
              placeholderTextColor="rose.900"
              borderWidth={0}
              placeholder="Digite o nome de um Pokemon"
              onChange={handleTextChange}
              onSubmitEditing={handleSearch}
              value={searchText}
            />
            <Button onPress={handleSignOut} bgColor="red.500">Logout</Button>
          </VStack>
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

export default Header;
