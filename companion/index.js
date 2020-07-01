import * as messaging from "messaging";
import { me } from "companion";
import { settingsStorage } from "settings";

// Listen for the onopen event
messaging.peerSocket.onopen = function () {
    // Ready to send or receive messages
    console.log("Socket opened (companion)");
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function (evt) {
    // Output the message to the console
    console.log(JSON.stringify(evt.data));
}