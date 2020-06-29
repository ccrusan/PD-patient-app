import document from "document";

let views;

export function init(_views) {
	views = _views;
	console.log("view-1 init()");
	onMount();
}

/**
 * When this view is mounted, setup elements and events.
 */
function onMount() {

	let tripButton = document.getElementById("tripButton");
	tripButton.onactivate = function (evt) {
		console.log("Fall type: trip");
		tripButton.addEventListener("click", clickHandler);
	}

	let slipButton = document.getElementById("slipButton");
	slipButton.onactivate = function (evt) {
		console.log("Fall type: slip");
		slipButton.addEventListener("click", clickHandler);
	}

	let fallButton = document.getElementById("fallButton");
	fallButton.onactivate = function (evt) {
		console.log("Fall type: fall");
		fallButton.addEventListener("click", clickHandler);
	}

	let collapseButton = document.getElementById("collapseButton");
	collapseButton.onactivate = function (evt) {
		console.log("Fall type: collapse");
		collapseButton.addEventListener("click", clickHandler);
	}
}

/**
 * Sample button click with navigation.
 */
function clickHandler(_evt) {
	console.log("view-1 Button Clicked!");
	/* Navigate to another screen */
	views.navigate("view-2");
}
