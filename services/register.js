import { createUserWithEmailAndPassword } from "firebase/auth";

export const handleCreateAccount = ({ auth, email, password, callback }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      callback();
    })
    .catch(() => console.log("error"));
};
