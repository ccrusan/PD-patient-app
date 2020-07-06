import document from "document";

// declare vars
let views;
let confirmation = 0;


export function init(_views) {
	views = _views;
	onMount();
}
export function getFallConfirmation() {
	let confirmed = Boolean(confirmation);
	confirmation = 0;
	return confirmed;
}
/**
 * When this view is mounted, setup elements and events.
 */
function onMount() {

	let yesBtn = document.getElementById("yesBtn");
	yesBtn.onactivate = function (evt) {
		confirmation = 1;
		views.navigate("view-1");
	}

	let noBtn = document.getElementById("noBtn");
	noBtn.onactivate = function (evt) {
		confirmation = 0;
		views.navigate("view-1");
	}
}
