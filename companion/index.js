import * as messaging from "messaging";
import { me } from "companion";
import { settingsStorage } from "settings";
import { localStorage } from "local-storage";


// Listen for the onopen event
messaging.peerSocket.onopen = function () {
    // Ready to send or receive messages
    console.log("Companion socket opened");
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function (evt) {
    // save the message to local storage
    var key = (JSON.stringify(evt.data.key));
    var value = (JSON.stringify(evt.data.value));
    localStorage.setItem(key, value);
    // retrieve data from local storage and display to console
    console.log(`key is: ${localStorage.getItem(key)}`)
}

// Message socket closes
messaging.peerSocket.onclose = () => {
    console.warn("Companion Socket Closed");
};
