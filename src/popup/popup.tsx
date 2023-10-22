import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

chrome.storage.sync.get("name", function (data) {
	if (typeof data.name === "undefined") {
		console.log("name is not set");
	} else if (data.name === "NOT_LOGGED_IN_USER") {
		console.log("user is not logged in");
		window.location.href = "login.html";
	} else {
		console.log("user is logged in and the name is " + data.name);
	}
});

const app = (
	<div
		id="mainBg"
		className="w-full h-full bg-gradient-to-br from-[#444743] to-[#29292c] flex flex-col justify-start items-center border-white/10 border-2 rounded-xl"
	>
		<div className="w-full bg-red-400/0 px-4 pt-3 flex row justify-between bg-gradient-to-b from-gray-800/50 to-transparent">
			<div
				id="xs"
				className="text-xl font-semibold  tracking-wide text-slate-100"
			>
				FocusX
			</div>
			<div className="flex flex-row gap-2 mr-0 items-center">
				<div className="group opacity-60 rounded-lg p-1 hover:bg-neutral-500/40 hover:opacity-100 w-8 h-8 cursor-pointer duration-300">
					<img
						src="settings.svg"
						alt="Icon"
						className="group-hover:rotate-12 duration-300"
					/>
				</div>
			</div>
		</div>

		<div className="w-full h-auto flex flex-col items-center justify-center relative mt-8">
			<div
				onClick={focusClick}
				id="power"
				className={`group aspect-square h-32 bg-[#707071] hover:bg-[#666565] rounded-full flex items-center justify-center cursor-pointer shadow-xl shadow-transparent hover:shadow-black/20 ease-in-out duration-300`}
			>
				<img
					src="power.svg"
					alt="Logo"
					className="opa-full mb-1 w-9 aspect-square opacity-70 scale-95 group-hover:opacity-100 group-hover:scale-105 duration-300 ease-in-out"
				/>
			</div>
			<h2 className="text-lg text-white/70 mt-6 font-sans text-opa-full">
				<span className="text-white-90 font-semibold">Focus Mode </span> —{" "}
				<span id="status">Disabled</span>
			</h2>
		</div>

		<div className="w-[90%] h-1 mt-5 bg-white/20 rounded-md "></div>

		<div className="flex flex-col gap-2 h-full w-full p-4 text-white/90">
			<h2 className="text-base font-semibold mb-2">Advanced Options</h2>
			<div className="group relative cursor-pointer w-full rounded-md bg-neutral-600 h-10 text-center text-base font-medium flex after:w-full flex-row gap-3 items-center justify-start hover:shadow hover:after:opacity-100 after:opacity-0 after:duration-300 after:ease-in-out after:h-full after:origin-top after:absolute z-10 after:-z-10 overflow-hidden after:bg-neutral-500 hover:text-white/90 text-white/70">
				<img
					src="block.svg"
					className="opacity-70 group-hover:opacity-100 aspect-square h-5 stroke-white fill-white/60 ml-3"
				/>
				View Blocking List
			</div>
			<div className="group relative cursor-pointer w-full rounded-md bg-neutral-600 h-10 text-center text-base font-medium flex after:w-full flex-row gap-3 items-center justify-start hover:shadow hover:after:opacity-100 after:opacity-0 after:duration-300 after:ease-in-out after:h-full after:origin-top after:absolute z-10 after:-z-10 overflow-hidden after:bg-neutral-500 hover:text-white/90 text-white/70">
				<img
					src="timer.svg"
					className="opacity-70 group-hover:opacity-100 aspect-square h-5 stroke-white fill-white/60 ml-3"
				/>
				Enable Focus Timer
			</div>
		</div>
	</div>
);

function focusClick() {
	chrome.storage.sync.get("focusMode", function (data) {
		if (data.focusMode === "yes") {
			removeFocusDisplay();
			chrome.storage.sync.set({ focusMode: "no" }, function () {
				console.log("focus mode disabled NOW!");
			});
		} else {
			chrome.storage.sync.set({ focusMode: "yes" }, function () {
				focusDisplay();
				console.log("focus mode enabled NOW!");
			});
		}
	});
}

function focusDisplay() {
	document.getElementById("power").classList.add("!bg-[#6eb15f]");
	document
		.getElementById("mainBg")
		.classList.add("!from-[#458f57]", "!to-[#296337]");
	document.getElementById("status").innerHTML = "Enabled";
	document.querySelectorAll(".text-opa-full").forEach(element => {
		element.classList.add("!text-white");
	});
	document.querySelectorAll(".opa-full").forEach(element => {
		element.classList.add("!opacity-100");
	});
	
}

function removeFocusDisplay() {
	document.getElementById("power").classList.remove("!bg-[#6eb15f]");
	document
	.getElementById("mainBg")
	.classList.remove("!from-[#458f57]", "!to-[#296337]");
	document.getElementById("status").innerHTML = "Disabled";
	document.querySelectorAll(".text-opa-full").forEach(element => {
		element.classList.remove("!text-white");
	});
	document.querySelectorAll(".opa-full").forEach(element => {
		element.classList.remove("!opacity-100");
	});
}

window.onload = function () {
	chrome.storage.sync.get("focusMode", function (data) {
		if (typeof data.focusMode === "undefined") {
			console.log("focus is not set");
		} else if (data.focusMode === "yes") {
			console.log("focus mode is enabled");
			focusDisplay();
		} else if (data.focusMode === "no") {
			console.log("focus mode is disabled");
			removeFocusDisplay();
		}
	});
};

console.log("popup main!");
const container = document.createElement("div");
const root = createRoot(container);
container.id = "root";

document.body.appendChild(container);

document.body.style.height = "290px";
root.render(app);
