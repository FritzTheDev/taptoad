import React from 'react';
import {
  IonApp,
  IonContent,
  IonSplitPane,
  IonMenu,
  IonPage
} from '@ionic/react';
import { Switch } from 'react-router-dom';

import '@ionic/core/css/core.css';
import '@ionic/react/css/ionic.bundle.css';

function App() {
  return (
    <IonApp>
      <IonContent>
        <IonSplitPane contentId="main">
          <IonMenu></IonMenu>
          <IonPage id="main">
            <Switch></Switch>
          </IonPage>
        </IonSplitPane>
      </IonContent>
    </IonApp>
  );
}

export default App;
