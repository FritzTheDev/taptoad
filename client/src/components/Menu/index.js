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

import { MenuListItems } from './MenuListItems';

export const Menu = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <MenuListItems />
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
