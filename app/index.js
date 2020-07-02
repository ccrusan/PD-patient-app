

import document from "document";
import { init } from "./views";
import { HeartRateSensor } from "heart-rate";
import * as messaging from "messaging";

// Fetch UI elements we will need to change
let hrLabel = document.getElementById("hrm");
let updatedLabel = document.getElementById("updated");

// Keep a timestamp of the last reading received. Start when the app is started.
let lastValueTimestamp = Date.now();


const views = init(
    [
        ["view-1", () => import("./views/view-1")],
        ["view-2", () => import("./views/view-2")]
        //["view-3", () => import("./views/view-3")]
    ],
    "./resources/views/"
);


// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();
                                
// Select the first view (view-1) after 1 second
setTimeout(() => {              
    views.navigate("view-1");   
}, 1000);                                                   

// Begin monitoring the sensor
hrm.start();

// And update the display every second
setInterval(sendMessage, 5000);

//---------------------------------------------------------------------------------//

// Listen for the onopen event
messaging.peerSocket.onopen = function () {
    // Ready to send or receive messages
    console.log("App socket opened");
    sendMessage();
}

// Send a message to the companion
function sendMessage() {
    // heart rate data to send
    var data = {
        key: 'Heart Rate',
        value: hrm.heartRate
    }
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        // Send the data to peer as a message
        messaging.peerSocket.send(data);
    } else {
        // Catch error
        console.error("Unable to send data from app.");
    }
}

// Message socket closes
messaging.peerSocket.onclose = () => {
    console.warn("App Socket Closed");
};