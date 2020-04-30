import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDJsdeCM2Mn9m_g2dBNjS49Hw7IJmHLWiQ",
    authDomain: "expensify-b9ddd.firebaseapp.com",
    databaseURL: "https://expensify-b9ddd.firebaseio.com",
    projectId: "expensify-b9ddd",
    storageBucket: "expensify-b9ddd.appspot.com",
    messagingSenderId: "883461478432",
    appId: "1:883461478432:web:662d00bf610ac42aa18445",
    measurementId: "G-G7WB8ZZTJB"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  database.ref().set({
      name: 'Muraliprasad Para',
      age: 36,
      isMarried: true,
      location:{
          city:'Hyderbad',
          country:'India'
      },
      children:['Purvi','Teju','No other']
  })


  //database.ref().set('This is a test string');


  database.ref('age').set(37);

  database.ref('location/city').set('Hyd');