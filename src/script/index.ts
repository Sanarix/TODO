import App from './modules/App.js';
import '../styles/index.css';
import {initializeApp} from 'firebase/app';
import firebaseConfig from '../../firebaseConfig.json';

//For firebase hosting
const init = initializeApp(firebaseConfig); 

const app = new App();

app.run();