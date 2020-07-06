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
    // convert received message to strings
    var time = (JSON.stringify(evt.data.time));
    var hr = (JSON.stringify(evt.data.hr));
    var event = (JSON.stringify(evt.data.event));
    var fall = (JSON.stringify(evt.data.fall));
    
    // save the message to local storage
    localStorage.setItem(event, hr, fall, time);
    // retrieve data from local storage and display to console
    //console.log(`${localStorage.getItem(time)}:${localStorage.getItem(key)}`)

    console.log(`${time},${hr},${event},${fall}`)
}

// Message socket closes
messaging.peerSocket.onclose = () => {
    console.warn("Companion Socket Closed");
};
