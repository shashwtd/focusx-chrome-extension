chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ["blocker.js"],
	});
});

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.clear();
	chrome.storage.sync.set(
		{ name: "NOT_LOGGED_IN_USER", focusMode: "no" },
		() => {
			console.log("Application Started");
		}
	);
});