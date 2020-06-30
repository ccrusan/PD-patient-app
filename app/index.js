

import document from "document";
import { init } from "./views";
import { HeartRateSensor } from "heart-rate";

// Fetch UI elements we will need to change
let hrLabel = document.getElementById("hrm");
let updatedLabel = document.getElementById("updated");

// Keep a timestamp of the last reading received. Start when the app is started.
let lastValueTimestamp = Date.now();


const views = init(
    [
        ["view-1", () => import("./views/view-1")],
        ["view-2", () => import("./views/view-2")]
    ],
    "./resources/views/"
);

// This function updates the heart rate printed to console.
function updateDisplay() {
    console.log("Current heart rate: " + hrm.heartRate);
}

// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();

// Select the first view (view-1) after 1 second
setTimeout(() => {
    views.navigate("view-1");
}, 1000);

// Begin monitoring the sensor
hrm.start();

// And update the display every second
setInterval(updateDisplay, 1000);