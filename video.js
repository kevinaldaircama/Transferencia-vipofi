// Importar Firebase desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Tu configuración de Firebase (reemplaza con tus datos)
const firebaseConfig = {
  apiKey: "AIzaSyB28uLNC-7NBDBSJeQJ1Li_bYR6ygbf0DI",
    authDomain: "transferencia-88fd7.firebaseapp.com",
    databaseURL: "https://transferencia-88fd7-default-rtdb.firebaseio.com",
    projectId: "transferencia-88fd7",
    storageBucket: "transferencia-88fd7.firebasestorage.app",
    messagingSenderId: "343352831024",
    appId: "1:343352831024:web:9ac2d08b41874b15e611f5",
    measurementId: "G-LNX1B0RLK7"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificar sesión
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Mostrar contenido si hay sesión
    document.getElementById("content").style.display = "block";
  } else {
    // Redirigir si no hay sesión
    window.location.href = "loginvip.html";
  }
});
