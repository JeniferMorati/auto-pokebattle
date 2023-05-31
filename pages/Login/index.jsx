import React, { useState } from "react";
import { FirebaseAuth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import {
  Heading,
  Input,
  Button,
  Center,
  VStack,
  Text,
  Spinner,
  Row,
} from "native-base";

const firebaseProvider = new FirebaseAuth();

const LoginScreen = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMesssage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    setLoading(true);
    setErrorMesssage(false);
    const authParams = {
      auth: firebaseProvider.appAuth,
      email,
      password,
      onSuccess: () => {
        setLoading(false);
        navigation.navigate("Arena");
      },
      onError: (err) => {
        setLoading(false);
        setErrorMesssage(err);
      },
    };

    return authParams;
  };

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
        {loading && (
          <Row
            w="full"
            space={2}
            alignItems="center"
            justifyContent="start"
            flexDirection="row"
          >
            <Spinner color="pink.500" />
            <Text color="gray.600">Carregando...</Text>
          </Row>
        )}
        {errorMessage && <Text color="red.500">{errorMessage}</Text>}
        <Button
          bgColor="pink.300"
          w="full"
          onPress={() => firebaseProvider.handleLogin(handleAuth())}
        >
          <Text color="black">Login</Text>
        </Button>
        <Button
          bgColor="pink.300"
          w="full"
          onPress={() => firebaseProvider.handleCreateAccount(handleAuth())}
        >
          <Text>Criar conta</Text>
        </Button>
      </VStack>
    </Center>
  );
};

export default LoginScreen;
