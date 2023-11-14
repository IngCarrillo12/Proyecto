import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup ,updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import {doc, setDoc } from "firebase/firestore";
import { auth, db } from "../fireBase";
import { useEffect, useState } from "react";
import { authContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password, nick, imageUrl) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      try {
        await updateProfile(user, {
          displayName: nick,
          photoURL: imageUrl,
        });
        const userId = user.uid;
        const userData = {
          name: nick,
          imageUrl: imageUrl,
        };

        // Guardar los datos en Firestore
        const userDocRef = doc(db, 'users', userId);
        try {
          await setDoc(userDocRef, userData);
          console.log('Usuario registrado con éxito y datos adicionales guardados en Firestore.');
          return true;
        } catch (error) {
          console.error('Error al guardar datos adicionales en Firestore:', error.message);
          return false;
        }
      } catch (error_1) {
        console.error('Error al actualizar el perfil:', error_1.message);
        return false;
      }
    } catch (error_2) {
      console.error('Error al registrar usuario:', error_2.message);
      return false;
    }
  };

  const login = async(email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true; // Devuelve true si el inicio de sesión es exitoso
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      return false; // Devuelve false si hay un error durante el inicio de sesión
    }
  
  };
  
  const loginWithGoogle =()=>{
    const  GoogleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, GoogleProvider)
  }

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ signUp, login, user, logout, loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
};