// App Menu: functions as the main navigation bar for the app.
import React from 'react';
import {
  IonContent,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';

export const Menu = () => (
  <IonMenu contentId="main">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent></IonContent>
  </IonMenu>
);
