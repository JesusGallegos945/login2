import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importar Firebase y sus servicios necesarios
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCk5bNiSPkhd_GKTpytC25evjUPhfgNmHY",
  authDomain: "login-ti31-94daf.firebaseapp.com",
  projectId: "login-ti31-94daf",
  storageBucket: "login-ti31-94daf.appspot.com",
  messagingSenderId: "966075510275",
  appId: "1:966075510275:web:d3da009b9d7c3364d8e836"
};

const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app');

export { firebaseApp };

