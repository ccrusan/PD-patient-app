import document from "document";

// declare vars
let views;
let fallString = "null";



export function init(_views) {
	views = _views;
	onMount();
}
export function getFall() {
	return fallString;
}

/**
 * When this view is mounted, setup elements and events.
 */
function onMount() {

	let tripBtn = document.getElementById("tripBtn");
	tripBtn.onactivate = function (evt) {
		fallString = "Trip";
		views.navigate("view-3");
	}

	let slipBtn = document.getElementById("slipBtn");
	slipBtn.onactivate = function (evt) {
		fallString = "Slip";
		views.navigate("view-3");
	}

	let fallBtn = document.getElementById("fallBtn");
	fallBtn.onactivate = function (evt) {
		fallString = "Fall";
		views.navigate("view-3");
	}

	let collapseBtn = document.getElementById("collapseBtn");
	collapseBtn.onactivate = function (evt) {
		fallString = "Collapse";
		views.navigate("view-3");
	}


}

