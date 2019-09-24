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
import { Switch } from 'react-router-dom';

import '@ionic/core/css/core.css';
import '@ionic/react/css/ionic.bundle.css';
import { Menu } from './Menu';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Add.App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSplitPane contentId="main">
            <Menu />
            <IonPage id="main">
              <Switch></Switch>
            </IonPage>
          </IonSplitPane>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
