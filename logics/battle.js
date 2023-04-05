import { TYPE_CHART } from "./typechart";

export async function battle(pokemon1, pokemon2) {
  // Log da batalha
  let battleLog = {
    pokemon1: pokemon1,
    pokemon2: pokemon2,
    log: [],
    winner: '',
  };
  // Define a variável de turno
  let turn = 0;

  // Define os valores iniciais dos Pokémons
  let pokemon1_hp = pokemon1.stats[0].base_stat;
  let pokemon2_hp = pokemon2.stats[0].base_stat;

  // Cria a função de ataque do Pokémon
  async function attack(attacker, defender) {
    // Seleciona um movimento aleatório do atacante
    const move_index = Math.floor(Math.random() * attacker.moves.length);
    const move_response = await fetch(attacker.moves[move_index].move.url);
    const move = await move_response.json();

    // Imprime o movimento utilizado
    battleLog.log.push(`${attacker.name} usou ${move?.name}!`);

    // Obtém as informações dos tipos dos Pokémons
    const defender_types = defender.types.map((type) => type?.type?.name);

    // Calcula o dano causado pelo ataque
    const attack_stat = attacker.stats.find(
      (stat) => stat?.stat?.name === "attack"
    ).base_stat;
    const defense_stat = defender.stats.find(
      (stat) => stat?.stat?.name === "defense"
    ).base_stat;
    const level = 50; // Define o nível dos Pokémons como 50
    const power = move.power;
    const effectiveness =
      TYPE_CHART?.[move?.type?.name][defender_types[0]] *
      (defender_types[1] ? TYPE_CHART?.[move?.type?.name][defender_types?.[1]] : 1);
    const modifier = Math.random() * (1.0 - 0.85) + 0.85;
    const damage =
      Math.floor(
        ((((2 * level) / 5 + 2) * power * (attack_stat / defense_stat)) / 50 +
          2) *
          effectiveness *
          modifier
      ) + 1;

    // Aplica o dano ao Pokémon defensor
    defender.stats[0].base_stat -= damage;

    // Imprime o dano causado
    battleLog.log.push(`${defender.name} recebeu ${damage} de dano!`);
  }

  // Enquanto ambos os Pokémons estiverem vivos, eles continuam lutando
  while (pokemon1_hp > 0 && pokemon2_hp > 0) {
    // Aumenta o número do turno
    turn++;

    // Pokémon 1 ataca Pokémon 2
    await attack(pokemon1, pokemon2);

    // Verifica se Pokémon 2 ainda está vivo
    if (pokemon2.stats[0].base_stat <= 0) {
      battleLog.log.push(`${pokemon2.name} desmaiou!`);
      battleLog.log.push(
        `${pokemon1.name} venceu a batalha em ${turn} turnos!`
      );
      battleLog.winner = pokemon1.name;

      return battleLog;
    }
    // Pokémon 2 ataca Pokémon 1
    await attack(pokemon2, pokemon1);

    // Verifica se Pokémon 1 ainda está vivo
    if (pokemon1.stats[0].base_stat <= 0) {
      battleLog.log.push(`${pokemon1.name} desmaiou!`);
      battleLog.log.push(
        `${pokemon2.name} venceu a batalha em ${turn} turnos!`
      );
      battleLog.winner = pokemon2.name;
      return battleLog;
    }
  }
  // Caso os dois Pokémons tenham desmaiado ao mesmo tempo, o resultado é um empate
  battleLog.log.push(`A batalha terminou em empate após ${turn} turnos!`);
  return battleLog;
}
