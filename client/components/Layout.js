import { IonApp, IonSplitPane, IonMenu, IonPage } from "@ionic/react";

export function Layout({ children }) {
    return (
        <IonApp>
            <IonSplitPane contentId="main">
                <IonPage>
                    {children}
                </IonPage>
            </IonSplitPane>
        </IonApp>
    )
}