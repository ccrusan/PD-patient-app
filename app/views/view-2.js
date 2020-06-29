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

	let foreButton = document.getElementById("foreButton");
	foreButton.onactivate = function (evt) {
		console.log("Fall type: trip");
		foreButton.addEventListener("click", clickHandler);
	}

	let backButton = document.getElementById("backButton");
	backButton.onactivate = function (evt) {
		console.log("Fall type: slip");
		backButton.addEventListener("click", clickHandler);
	}

	let rightButton = document.getElementById("rightButton");
	rightButton.onactivate = function (evt) {
		console.log("Fall type: fall");
		rightButton.addEventListener("click", clickHandler);
	}

	let leftButton = document.getElementById("leftButton");
	leftButton.onactivate = function (evt) {
		console.log("Fall type: collapse");
		leftButton.addEventListener("click", clickHandler);
	}
}

/**
 * Sample button click with navigation.
 */
function clickHandler(_evt) {
	console.log("view-2 Button Clicked!");
	/* Navigate to another screen */
	views.navigate("view-1");
}
