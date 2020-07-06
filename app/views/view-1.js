import document from "document";

// declare vars
let views;
let fallString = "null";



export function init(_views) {
	views = _views;
	onMount();
}
export function getFallRecord() {
	return fallString;
}

/**
 * When this view is mounted, setup elements and events.
 */
function onMount() {

	let fallBtn = document.getElementById("fallBtn");
	fallBtn.onactivate = function (evt) {
		fallString = "Fall";
		views.navigate("view-2");
	}

	let nearFallBtn = document.getElementById("nearFallBtn");
	nearFallBtn.onactivate = function (evt) {
		fallString = "Near Fall";
		views.navigate("view-2");
	}


}