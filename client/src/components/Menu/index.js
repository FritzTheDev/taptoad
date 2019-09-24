// App Menu: functions as the main navigation bar for the app.
import React from 'react';
import {
  IonContent,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList
} from '@ionic/react';

export const Menu = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <ListItems />
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
