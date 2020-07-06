import document from "document";

// declare vars
let views;
let fallString = "null";



export function init(_views) {
	views = _views;
	onMount();
}
export function getFallType() {
	return fallString;
}

/**
 * When this view is mounted, setup elements and events.
 */
function onMount() {

	let foreBtn = document.getElementById("foreBtn");
	foreBtn.onactivate = function (evt) {
		fallString = "Forwards";
		views.navigate("view-4");
	}

	let backBtn = document.getElementById("backBtn");
	backBtn.onactivate = function (evt) {
		fallString = "Backwards";
		views.navigate("view-4");
	}

	let rightBtn = document.getElementById("rightBtn");
	rightBtn.onactivate = function (evt) {
		fallString = "Rightwards";
		views.navigate("view-4");
	}

	let leftBtn = document.getElementById("leftBtn");
	leftBtn.onactivate = function (evt) {
		fallString = "Leftwards";
		views.navigate("view-4");
	}
}


