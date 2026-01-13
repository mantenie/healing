/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Heilungsgebet Script gestartet');

// Warten auf API-Bereitschaft
WA.onInit().then(() => {
    console.log('Scripting API bereit');

    // Willkommensnachricht anzeigen
    WA.chat.sendChatMessage('Willkommen im Heilungsgebet-Raum! Bewege dich mit den Pfeiltasten.', 'System');

    // Die Scripting API Extra Bibliothek initialisieren
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra bereit');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
