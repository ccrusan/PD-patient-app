

import document from "document";
import { init } from "./views";
import { getFallRecord } from "./views/view-1.js";
import { getFall } from "./views/view-2.js";
import { getFallType } from "./views/view-3.js";
import { getFallConfirmation } from "./views/view-4.js";
import { HeartRateSensor } from "heart-rate";
import * as messaging from "messaging";

const views = init(
    [
        ["view-1", () => import("./views/view-1")],
        ["view-2", () => import("./views/view-2")],
        ["view-3", () => import("./views/view-3")],
        ["view-4", () => import("./views/view-4")]
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


// Listen for the onopen event
messaging.peerSocket.onopen = function () {
    // Ready to send or receive messages
    sendMessage();
}

// check for labeling event every 1 second
setInterval(getMessage, 1000);

// function to send message if fall has been recorded and confirmed
function getMessage() {
    if (getFallConfirmation() == true) {
        sendMessage("Fall");
    }
}

// When hrm sees new value, send message
hrm.onreading = function () {
    sendMessage(null);
}

// Send a message to the companion
function sendMessage(event) {
    // generates new time stamp for each new message
    var timeStamp = new Date();
    var jsonTime = timeStamp.toJSON();
    // heart rate data to send
    var data = {
        time: jsonTime,
        hr: hrm.heartRate,
        event: event,
        fall: `${getFallRecord()}:${getFall()}:${getFallType()}`       //ex: "Near Fall:Slip:Forewards" 
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