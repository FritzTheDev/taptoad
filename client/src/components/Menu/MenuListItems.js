import React from 'react';
import { IonMenuToggle, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { calendar, contacts, map, informationCircle } from 'ionicons/icons';

const list = [
  { title: 'Featured Apps', path: '/', icon: calendar },
  { title: 'Games', path: '/speakers', icon: contacts },
  { title: 'Entertainment', path: '/map', icon: map },
  { title: 'Tools & Utilities', path: '/about', icon: informationCircle }
];

export const MenuListItems = ({ history }) => {
  return list
    .filter(route => !!route.path)
    .map(p => (
      <IonMenuToggle key={p.title} auto-hide="false">
        <IonItem button onClick={() => history.push(p.path)}>
          <IonIcon slot="start" icon={p.icon} />
          <IonLabel>{p.title}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    ));
};
