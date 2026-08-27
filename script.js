window.addEventListener("beforeunload", (event) => {
	event.preventDefault();
	event.returnValue = "Your information may be lost. Do you want to continue?";
});

setTimeout(() => {
	document.getElementById("timeout-message").hidden = false;
}, 30000);
