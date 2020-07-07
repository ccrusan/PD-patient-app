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
    var mytime = (JSON.stringify(evt.data.time));
    var myhr = (JSON.stringify(evt.data.hr));
    var myevent = (JSON.stringify(evt.data.event));
    var myfall = (JSON.stringify(evt.data.fall));
    
    // save the message to local storage
    localStorage.setItem("time", mytime);    //"key_name", string
    localStorage.setItem("hr", myhr);
    localStorage.setItem("event", myevent);
    localStorage.setItem("fall", myfall);

    // retrieve data from local storage and display to console
    console.log(`${localStorage.getItem("time")},${localStorage.getItem("hr")},${localStorage.getItem("event")},${localStorage.getItem("fall")}`);
}

// Message socket closes
messaging.peerSocket.onclose = () => {
    console.warn("Companion Socket Closed");
};
