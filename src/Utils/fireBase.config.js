import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc, } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyC9khstzuIk-M9yiC1ilgxJsJq7p3sTZDE",
    authDomain: "dliriosinsumos.firebaseapp.com",
    projectId: "dliriosinsumos",
    storageBucket: "dliriosinsumos.appspot.com",
    messagingSenderId: "382769203974",
    appId: "1:382769203974:web:5ee8f4bf5ad72d2e30ec87",
    measurementId: "G-D28JQM3V83"
  };


const app = initializeApp(firebaseConfig);
export default app;

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();

export async function registerNewProduct(data) {
  try {
    const productRef = collection(db, data.clasificacion);
    await setDoc(doc(productRef, data.id), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getViniles() {
  let viniles = []
  const vinilesCol = collection(db, 'Viniles');
  const vinilesSnapshot = await getDocs(vinilesCol);
  vinilesSnapshot.forEach((doc) => {
    const vinil = { ...doc.data() };
    viniles.push(vinil);
  });
  return viniles.length;
}
export async function getCintas() {
  let cintas = []
  const cintasCol = collection(db, 'Cintas');
  const cintasSnapshot = await getDocs(cintasCol);
  cintasSnapshot.forEach((doc) => {
    const cinta = { ...doc.data() };
    cintas.push(cinta);
  });
  return cintas.length;
}
export async function getApliques() {
  let apliques = []
  const apliquesCol = collection(db, 'Apliques');
  const apliquesSnapshot = await getDocs(apliquesCol);
  apliquesSnapshot.forEach((doc) => {
    const aplique = { ...doc.data() };
    apliques.push(aplique);
  });
  return apliques.length;
}
export async function getDecorables() {
  let decorables = []
  const decorablesCol = collection(db, 'Decorables');
  const decorablesSnapshot = await getDocs(decorablesCol);
  decorablesSnapshot.forEach((doc) => {
    const decorable = { ...doc.data() };
    decorables.push(decorable);
  });
  return decorables.length;
}
export async function getHerramientas() {
  let herramientas = []
  const herramientasCol = collection(db, 'Herramientas');
  const herramientasSnapshot = await getDocs(herramientasCol);
  herramientasSnapshot.forEach((doc) => {
    const herramienta = { ...doc.data() };
    herramientas.push(herramienta);
  });
  return herramientas.length;
}
