

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

// Select the first view (view-1) after 1 second
setTimeout(() => {
    views.navigate("view-1");
}, 1000);

// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();

                                                   

// Begin monitoring sensors
hrm.start();
    // TODO: add other sensors


// Listen for the onopen event
messaging.peerSocket.onopen = function () {
    // Ready to send or receive messages
}

// initialize empty json
let jsonObj = [];
// record sensor data every 1 second
setInterval(getSensorRecord, 5000);
// check for event every 1 second
setInterval(checkEvent, 1000);


function checkEvent() {
    if (getFallConfirmation() == true) {
        let event = `${getFallRecord()}:${getFall()}:${getFallType()}`;  // ex: "NearFall:Slip:Backwards"
        let data = getEventRecord(event);
        jsonObj.push(data);
    }
    // check if local records json is 'full', send to companion
    if (Object.keys(jsonObj).length >= 20) {         // ran out of memory at ~1000 when tested
        sendToCompanion(jsonObj);
        jsonObj = [];
    }
}

function getEventRecord(event) {
    var timeStamp = new Date();
    var jsonTime = timeStamp.toJSON();
    let record = {};
    record["time"] = jsonTime;
    record["event"] = event;
    return record;
}

function getSensorRecord() {
    // generates new time stamp for each new message
    var timeStamp = new Date();
    var jsonTime = timeStamp.toJSON();
    let record = {};
    record["time"]      = jsonTime;
    record["hr"]        = hrm.heartRate;
    // TODO: add other sensors
    jsonObj.push(record);
}

function sendToCompanion(data) {
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
