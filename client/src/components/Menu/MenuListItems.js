import React from 'react';
import { withRouter } from 'react-router-dom';
import { IonMenuToggle, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { star, logoGameControllerB, tv, hammer, search } from 'ionicons/icons';

import { routes } from '../../constants/routes';

const list = [
  { title: 'Featured Apps', path: routes.index, icon: star },
  { title: 'Games', path: routes.games, icon: logoGameControllerB },
  { title: 'Entertainment', path: routes.entertainment, icon: tv },
  { title: 'Tools & Utilities', path: routes.tools, icon: hammer },
  { title: 'Search', path: routes.search, icon: search }
];

const BaseMenuListItems = ({ history }) => {
  console.log(history);
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

export const MenuListItems = withRouter(BaseMenuListItems);
