// App.js

// Package Imports
import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// Relative Imports
import { AppContent } from './AppContent';
import { AppHeader } from './AppHeader';
// CSS Imports
import '@ionic/core/css/core.css';
import '@ionic/react/css/ionic.bundle.css';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <AppHeader />
        <AppContent />
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
