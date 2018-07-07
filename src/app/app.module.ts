import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmwOfwfOCduP5CcixQgX5t5e5hShkLe30",
  authDomain: "buildingappswithangularf-16dd5.firebaseapp.com",
  databaseURL: "https://buildingappswithangularf-16dd5.firebaseio.com",
  projectId: "buildingappswithangularf-16dd5",
  storageBucket: "buildingappswithangularf-16dd5.appspot.com",
  messagingSenderId: "758423697128"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase needed for everything
    AngularFirestoreModule // imports firebase/storage needed for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
