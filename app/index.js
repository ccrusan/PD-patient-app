

import document from "document";
import { init } from "./views";

//let tripButton = document.getElementById("tripButton");
//tripButton.onactivate = function(evt) {
//  console.log(localStorage.getItem("fallType"));
  
//}

//let slipButton = document.getElementById("slipButton");
//slipButton.onactivate = function(evt) {
//  console.log("Fall type: slip");
//}

//let fallButton = document.getElementById("fallButton");
//fallButton.onactivate = function(evt) {
//  console.log("Fall type: fall");
//}

//let collapseButton = document.getElementById("collapseButton");
//collapseButton.onactivate = function(evt) {
//  console.log("Fall type: collapse");
//}

const views = init(
    [
        ["view-1", () => import("./views/view-1")],
        ["view-2", () => import("./views/view-2")]
    ],
    "./resources/views/"
);

// Select the first view (view-1) after 1 second
setTimeout(() => {
    views.navigate("view-1");
}, 1000);
