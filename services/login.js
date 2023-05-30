import { signInWithEmailAndPassword } from "firebase/auth";

export const handleLogin = async ({ auth, email, password, callback }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    callback();
  } catch (error) {
    console.log(error);
  }
};
