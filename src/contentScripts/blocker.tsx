function START_BLOCK() {
	console.log("My content script is running!");
	const body = document.querySelector("body");
	const root = document.createElement("div");
	root.id = "myRottenDiv";

	while (body.firstChild) {
		root.appendChild(body.firstChild);
	}

	body.appendChild(root);

	const root2 = document.createElement("div");
	root2.id = "messageDisplay";
	root2.innerHTML = `
    <div class="blocked">
        <h1> This URL is blocked </h1>
        <h2> You are currently in focus mode and this URL was detected as a distraction under the "Distraction Websites" catergoy. If you think this website is not a distraction for you or need this in your workflow, then you can create an exception for this URL. </h2>

        <div class="btn" onClick="alert('Go BACK TO WORK!')"> Go Back to work! </div>
    </div>
`;
	document.body.appendChild(root2);
}

function STOP_BLOCK() {
    const root = document.getElementById("myRottenDiv");
    const body = document.querySelector("body");
    const root2 = document.getElementById("messageDisplay");
    while (root.firstChild) {
        body.appendChild(root.firstChild);
    }
    body.removeChild(root);
    body.removeChild(root2);
}

chrome.storage.sync.get(["focusMode", "name", "blocklist"], function (data) {
    var shouldBlock = false;
    if (typeof data.focusMode === "undefined") {
        console.log("focus is not set " + data.name);
    } else if (data.focusMode === "yes") {
        console.log("focus mode is enabled " + data.name);
        const currentUrl = window.location.href;
        const blocklist = data.blocklist;
        
        for (var categ of blocklist) {
            const websites = categ.websites;
            for (var website of websites) {
                if (currentUrl.includes(website)) {
                    shouldBlock = true;
                    break;
                }
            }
            if (shouldBlock) {
                break;
            }
        }
    } else if (data.focusMode === "no") {
        console.log("focus mode is disabled " + data.name);
        shouldBlock = false;
    }

    if (shouldBlock) {
        START_BLOCK();
    } else {
        STOP_BLOCK();
    }
});
