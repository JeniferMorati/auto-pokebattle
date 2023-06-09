import React, { useState } from "react";
import FirebaseAuth from "../../firebase";
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
  Box,
} from "native-base";
import { useMainContext } from "../../context/main";

const LoginScreen = () => {
  const { authProvider } = useMainContext();
  const [errorMessage, setErrorMesssage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    setLoading(true);
    setErrorMesssage(false);
    const authParams = {
      auth: authProvider.appAuth,
      email,
      password,
      onSuccess: () => {
        setLoading(false);
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
        <Heading>Bem vindo!</Heading>
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
        <Box minH="6">
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
        </Box>
        <Button
          bgColor="pink.300"
          w="full"
          onPress={() => authProvider.handleLogin(handleAuth())}
        >
          <Text color="black">Login</Text>
        </Button>
        <Button
          bgColor="pink.300"
          w="full"
          onPress={() => authProvider.handleCreateAccount(handleAuth())}
        >
          <Text>Criar conta</Text>
        </Button>
      </VStack>
    </Center>
  );
};

export default LoginScreen;
