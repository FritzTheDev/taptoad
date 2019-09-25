import React from 'react';
import {
  IonApp,
  IonContent,
  IonSplitPane,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Menu } from '../Menu';

import '@ionic/core/css/core.css';
import '@ionic/react/css/ionic.bundle.css';

function App() {
  return (
    <IonApp>
      <IonReactRouter></IonReactRouter>
    </IonApp>
  );
}

export default App;
