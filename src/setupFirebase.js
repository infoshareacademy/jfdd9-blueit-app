import firebase from 'firebase'
import config from './config/firebaseConfig'

export default () => firebase.initializeApp(config);



