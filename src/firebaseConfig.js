
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { uuid } from 'uuidv4';

export function firebaseConfig() {
    const config = {
        apiKey: "AIzaSyD-dWz65aqSaeppHrCIba17MYGauEG3yDM",
        authDomain: "sistema-bf93a.firebaseapp.com",
        projectId: "sistema-bf93a",
        storageBucket: "sistema-bf93a.appspot.com",
        messagingSenderId: "667094875337",
        appId: "1:667094875337:web:7e8ebda6e4e3340f022118",
        measurementId: "G-1ZNT5BXFKM"
    };

    // Initialize Firebase
    const app = initializeApp(config);
}

export function firebaseCrear(coleccion, objeto) {
    objeto.id = uuid();
    let referencia = doc(getFirestore(), coleccion, objeto.id);
    setDoc(referencia, objeto);
}

export async function firebaseBuscar(coleccionABuscar) {
    //  try{
    let listado = [];
    let consulta = collection(getFirestore(), coleccionABuscar);
    let resultado = await getDocs(consulta);
    resultado.forEach(documento => {
        let objeto = documento.data();
        objeto.id = documento.id;
        listado.push(objeto);
    });
    return listado;
    //    }catch(e){
    //      console.log(e)
    //    return [''];
    //}
}

