import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, setDoc, doc, query, where, getDocs, writeBatch, addDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB_2x62XB4nz5llZNa4lw3vu5Wlq8PoOhE",
    authDomain: "kire-s-world.firebaseapp.com",
    projectId: "kire-s-world",
    storageBucket: "kire-s-world.firebasestorage.app",
    messagingSenderId: "833477285520",
    appId: "1:833477285520:web:3fd86382cfb5bb3d47aa15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Guardar documento en una colección
export const guardarDocumento = async (coleccion, id, datos) => {
    try {
        await setDoc(doc(db, coleccion, id), datos);
        console.log("✅ Documento guardado con éxito");
    } catch (error) {
        console.error("❌ Error al guardar documento:", error);
    }
};

// Guardar documento en una colección con ID generado automáticamente
export const guardarDocumentoIdAutomatico = async (coleccion, datos) => {
    try {
        const docRef = await addDoc(collection(db, coleccion), datos);
        console.log("✅ Documento guardado con éxito con ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("❌ Error al guardar documento:", error);
        return null;
    }
};

// Editar documento (merge) en una colección
export const editarDocumento = async (coleccion, id, nuevosDatos) => {
    try {
        const docRef = doc(db, coleccion, id.toString()); // Convertimos el id a string
        await setDoc(docRef, nuevosDatos, { merge: true });
        console.log("✅ Documento editado con éxito");
    } catch (error) {
        console.error("❌ Error al editar documento:", error);
    }
};

// Buscar documento por un campo específico
export const buscarDocumentoPorCampo = async (coleccion, campo, valor) => {
    try {
        const q = query(collection(db, coleccion), where(campo, "==", valor));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0]; // Solo el primero
            return doc.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error("❌ Error al buscar documento:", error);
        return null;
    }
};

// Borrar documentos por un campo específico
export const borrarDocumentosPorCampo = async (coleccion, campo, valor) => {
    try {
        const q = query(collection(db, coleccion), where(campo, "==", valor));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const batch = writeBatch(db);
            querySnapshot.docs.forEach(doc => {
                batch.delete(doc.ref);
            });
            await batch.commit();
            console.log("✅ Documentos borrados con éxito");
        } else {
            console.log("⚠️ No se encontraron documentos para el criterio proporcionado");
        }
    } catch (error) {
        console.error("❌ Error al borrar documentos:", error);
    }
};

// Obtener todos los documentos de una colección
export const obtenerTodosLosDocumentos = async (coleccion) => {
    try {
        const querySnapshot = await getDocs(collection(db, coleccion));
        const documentos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return documentos;
    } catch (error) {
        console.error("❌ Error al obtener documentos:", error);
        return [];
    }
};

// Buscar múltiples documentos por un campo específico
export const buscarDocumentosPorCampo = async (coleccion, campo, valor) => {
    try {
        const q = query(collection(db, coleccion), where(campo, "==", valor));
        const querySnapshot = await getDocs(q);

        const documentos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return documentos;
    } catch (error) {
        console.error("❌ Error al buscar documentos:", error);
        return [];
    }
};

// Actualizar múltiples documentos por un campo específico
export const actualizarDocumentosPorCampo = async (coleccion, campo, valor, nuevosDatos) => {
    try {
        const q = query(collection(db, coleccion), where(campo, "==", valor));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const batch = writeBatch(db);
            querySnapshot.docs.forEach(doc => {
                batch.update(doc.ref, nuevosDatos);
            });
            await batch.commit();
            console.log("✅ Documentos actualizados con éxito");
        } else {
            console.log("⚠️ No se encontraron documentos para el criterio proporcionado");
        }
    } catch (error) {
        console.error("❌ Error al actualizar documentos:", error);
    }
};

// Agregar un nuevo documento a una colección
export const agregarDocumento = async (coleccion, datos) => {
    try {
        const docRef = await addDoc(collection(db, coleccion), datos);
        console.log("✅ Documento agregado con éxito con ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("❌ Error al agregar documento:", error);
        return null;
    }
};

// Eliminar un documento específico por ID
export const borrarDocumentoPorId = async (coleccion, id) => {
    try {
        await deleteDoc(doc(db, coleccion, id));
        console.log("✅ Documento borrado con éxito");
    } catch (error) {
        console.error("❌ Error al borrar documento:", error);
    }
};