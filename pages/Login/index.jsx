import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { handleLogin } from "../../services/login";
import { handleCreateAccount } from "../../services/register";
import { Heading, Input, Button, Center, VStack, Text } from "native-base";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  const handleAuth = () => ({
    auth,
    email,
    password,
    callback: () => {
      navigation.navigate("Arena");
    },
  });

  return (
    <Center px="4" alignItems="center" justifyContent="center" minH="full">
      <VStack space={3} w="full" maxW="lg">
        <Heading>Bem vindo de volta!</Heading>
        <Input
          w="full"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          w="full"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          bgColor="pink.300"
          w="full"
          onPress={() => handleLogin(handleAuth())}
        >
          <Text color="black">Login</Text>
        </Button>
        <Button
          bgColor="pink.300"
          w="full"
          onPress={() => handleCreateAccount(handleAuth())}
        >
          <Text>Criar conta</Text>
        </Button>
      </VStack>
    </Center>
  );
};

export default LoginScreen;
