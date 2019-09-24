import React from 'react';
import { IonMenuToggle, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { star, logoGameControllerB, tv, hammer, search } from 'ionicons/icons';

const list = [
  { title: 'Featured Apps', path: '/', icon: star },
  { title: 'Games', path: '/games', icon: logoGameControllerB },
  { title: 'Entertainment', path: '/entertainment', icon: tv },
  { title: 'Tools & Utilities', path: '/tools', icon: hammer },
  { title: 'Search', path: '/search', icon: search }
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
