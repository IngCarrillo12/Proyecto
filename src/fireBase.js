// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClw98Knx1ocHvFWsTj_hJ5qtQT0XSB5AU",
  authDomain: "pokedexmon-464c6.firebaseapp.com",
  projectId: "pokedexmon-464c6",
  storageBucket: "pokedexmon-464c6.appspot.com",
  messagingSenderId: "736331360700",
  appId: "1:736331360700:web:d84ec574a647b38df1a3b9",
  measurementId: "G-7F8HEYW8YP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
const db = getFirestore(app)
export const MostrarFavoritos = async (id) => {
  const favoritosCollectionRef = collection(db, 'favoritos');

  // Crear una consulta para obtener los favoritos del usuario actual
  const favoritosQuery = query(favoritosCollectionRef, where('userId', '==', id));

  try {
    const querySnapshot = await getDocs(favoritosQuery);

    const favoritosData = querySnapshot.docs.map((doc) => {
      // Acceder a los datos de cada favorito
      return doc.data();
    });

    return favoritosData;
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    throw error; // Re-lanza el error para que pueda ser manejado en el nivel superior
  }
};
export const toggleItemId =async(userId, itemId)=>{
  const db = getFirestore(app);
  const favoritosCollectionRef = collection(db, 'favoritos');

  // Crear una consulta para verificar si el documento ya existe para el usuario actual
  const favoritosQuery = query(favoritosCollectionRef, where('userId', '==', userId));

  // Obtener los documentos que cumplen con la consulta
  const querySnapshot = await getDocs(favoritosQuery);

  if (querySnapshot.empty) {
    // El documento no existe, entonces lo creamos con el itemId
    await setDoc(doc(favoritosCollectionRef), {
      userId: userId,
      itemIds: [itemId],
      // Otros campos según tus necesidades
    });
  } else {
    // El documento existe, entonces lo actualizamos

    const favoritoDoc = querySnapshot.docs[0]; // Suponemos que solo hay un documento por usuario
    const itemIdsActuales = favoritoDoc.data().itemIds || [];

    if (itemIdsActuales.includes(itemId)) {
      // El itemId está presente, lo eliminamos
      const itemIdsActualizados = itemIdsActuales.filter((id) => id !== itemId);
      await updateDoc(favoritoDoc.ref, {
        itemIds: itemIdsActualizados,
        // Otros campos según tus necesidades
      });
    } else {
      // El itemId no está presente, lo agregamos
      const itemIdsActualizados = [...itemIdsActuales, itemId];
      await updateDoc(favoritoDoc.ref, {
        itemIds: itemIdsActualizados,
        // Otros campos según tus necesidades
      });
    }
  }
}