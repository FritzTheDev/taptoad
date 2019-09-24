import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Switch } from 'react-router-dom';

import { Menu } from '../Menu';

import './node_modules/@ionic/core/css/core.css';
import './node_modules/@ionic/react/css/ionic.bundle.css';

function App() {
  return (
    <IonApp>
      <IonReactRouter></IonReactRouter>
    </IonApp>
  );
}

export default App;
