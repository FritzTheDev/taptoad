import React from 'react';
import { IonApp, IonContent, IonSplitPane, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Switch } from 'react-router-dom';

import '@ionic/core/css/core.css';
import '@ionic/react/css/ionic.bundle.css';
import { Menu } from './components/Menu';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
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
