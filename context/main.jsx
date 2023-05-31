import React, { createContext, useContext, useEffect, useState } from "react";
import FirebaseAuth from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { Box, Spinner } from "native-base";

const authProvider = new FirebaseAuth();

const MainContext = createContext({
  authProvider,
});

const MainProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  authProvider.appAuth.onAuthStateChanged((user) => {
    setLoading(true);
    if (user) {
      navigation.navigate("Arena");
    } else {
      navigation.navigate("Login");
    }
    setLoading(false);
  });

  const value = {
    authProvider,
  };

  return (
    <MainContext.Provider value={value}>
      <>
        {loading && (
          <Box
            style={{ backgroundColor: "rgba(255,255,255, 0.6)" }}
            minH="full"
            minW="full"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            left="0"
            top="0"
            zIndex={9999}
          >
            <Spinner color="pink.600" />
          </Box>
        )}
        {children}
      </>
    </MainContext.Provider>
  );
};

const useMainContext = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainContext deve ser usado dentro de um MainProvider");
  }

  return context;
};

export { MainProvider, useMainContext };
