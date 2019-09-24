import React from 'react';
import {
  IonContent,
  IonSplitPane,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import { Switch } from 'react-router-dom';

import { Menu } from '../../Menu';

export const Layout = () => (
  <>
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
  </>
);
