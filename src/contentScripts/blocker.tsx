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
        <h2> You are currently in focus mode and this URL was detected as a distraction under the "Social Media Websites" catergoy. If you think this website is not a distraction for you or need this in your workflow, then you can create an exception for this URL. </h2>

        <div class="btn"> Go Back to work! </div>
    </div>
`;
	document.body.appendChild(root2);
}
