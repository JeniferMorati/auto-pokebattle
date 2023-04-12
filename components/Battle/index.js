import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native-web";
import { styles } from "../../styles";
import { BlurView } from "expo-blur";
import { battle } from "../../logics/battle";

const BattleComponent = ({ pokemons, setDuel }) => {
  const [battleResult, setBattleResult] = useState();

  const handleStartBattle = () => {
    setBattleResult(undefined);

    battle(pokemons?.[0], pokemons?.[1]).then((data) => {
      setBattleResult(data);
      setDuel(pokemons.filter((pokemon) => pokemon.name === data.winner));
    });
  };

  const handleRemoveDuelistPokemon = (removed) => {
    const removedPokemon = pokemons.filter(
      (pokemon) => pokemon.id !== removed.id
    );
    setBattleResult(undefined);
    setDuel(removedPokemon);
  };

  const handleRemoveBattleArena = () => {
    setDuel([]);
    setBattleResult(undefined);
  };

  if (pokemons.length === 0) return null;

  const RenderBattleLog = ({ item }) => {
    return <Text style={styles.pokemonBattleLog}>{item}</Text>;
  };

  const renderPokemonDuelist = ({ item }) => {
    return (
      <View
        onStartShouldSetResponder={() => handleRemoveDuelistPokemon(item)}
        style={styles.pokemonBattleIcon}
      >
        <View style={styles.coverBoxImage}>
          <Image
            style={styles.pokemonOnBattle}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${item?.id}.gif`,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <BlurView intensity={60} tint="light" style={styles.battleContainer}>
      <View style={styles.pokemonArenaContainer}>
        {battleResult && (
          <SafeAreaView>
            <ScrollView scrollEnabled>
              {battleResult?.log?.map((log, index) => (
                <RenderBattleLog key={`${log}-${index}`} item={log} />
              ))}
            </ScrollView>
          </SafeAreaView>
        )}
      </View>
      <View style={styles.pokemonArenaContainer}>
        <Button
          color="#f43f5e"
          title="Fechar"
          onPress={handleRemoveBattleArena}
        />
        <FlatList
          horizontal
          data={pokemons}
          keyExtractor={(item) => item.id}
          renderItem={renderPokemonDuelist}
        />
        <Button
          color="#f43f5e"
          disabled={pokemons.length < 2}
          title="Lutar"
          onPress={handleStartBattle}
        />
      </View>
    </BlurView>
  );
};

export default BattleComponent;
