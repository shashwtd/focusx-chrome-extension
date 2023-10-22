import { useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const app = (
	<div className="w-full h-full bg-gradient-to-br from-[#434347] to-[#29292c] flex flex-col justify-start items-center border-white/10 border-2 rounded-xl">
		<div className="w-full bg-red-400/0 px-4 pt-3 flex row justify-between bg-gradient-to-b from-gray-800/50 to-transparent">
			<div className="text-xl font-semibold  tracking-wide text-slate-100">
				FocusX
			</div>
			<div className="flex flex-row gap-2 mr-0 items-center">
				<div className="group opacity-60 rounded-lg p-1 hover:bg-neutral-500/40 hover:opacity-100 w-8 h-8 cursor-pointer duration-300 flex-row flex items-center justify-center">
					<img src="user.svg" alt="Icon" />
				</div>
			</div>
		</div>

		<div
			id="part1"
			className="h-full w-full flex flex-col items-center justify-center gap-2 text-white px-2 duration-300"
		>
			<h2 className="text-xl font-bold opacity-90"> Hey There! </h2>

			<p className="text-sm text-center opacity-70 px-3">
				Enter your name to get started. You can change this later in the
				settings.
			</p>

			<div className="mt-5">
				<input
					type="text"
					name="name"
					id="name"
					className="w-full bg-[#29292c] border-[#29292c] border-2 rounded-lg text-white text-sm px-4 py-2.5 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50"
					placeholder="Enter your name"
				/>
			</div>

			<div className="px-6 sm:px-0 max-w-[280px] mt-2">
				<button
					type="button"
					onClick={proceed2}
					className="text-white w-full group bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 gap-1"
				>
					Proceed to next step{" "}
					<span className="group-hover:translate-x-1 duration-300">→</span>
				</button>
			</div>
		</div>

		<div
			id="part2"
			className="h-full w-full overflow-y-auto hidden opacity-0 flex-col items-center justify-center gap-2 text-white px-2 duration-300"
		>
			<p className="text-sm text-center text-white/70 px-2">
				Select the group of websites you want to be blocked{" "}
				<span className="text-white/80">(can be changed later)</span>
			</p>

			<BlockMenu />

			<div className="px-6 sm:px-0 max-w-[280px] mt-2">
				<button
					type="button"
					onClick={submit}
					className="text-white w-full group bg-[#7090c3] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 gap-1"
				>
					Submit and Continue
				</button>
			</div>
		</div>
	</div>
);

var name = "Guest";
var selectedBlockList = [];

function proceed2() {
	console.log("started SignIn ok?");
	document.body.style.height = "460px";
	document.getElementById("part1").classList.add("opacity-0");
	setTimeout(() => {
		document.getElementById("part1").style.display = "none";
	}, 300);
	document.getElementById("part2").classList.remove("hidden");
	document.getElementById("part2").classList.add("flex");
	const nameInp = document.getElementById("name") as HTMLInputElement;
	setTimeout(() => {
		document.getElementById("part2").classList.remove("opacity-0");
		name = nameInp.value;
	}, 300);
}

function submit() {
	console.log("submitted ok?");
	document.getElementById("part2").classList.add("opacity-0");
	saveData();
}

const blocklist = [
	{
		MemesAndFunnyImagesWebsites: {
			title: "Memes & Funny Images",
			websites: [
				"*://www.reddit.com",
				"*://www.9gag.com",
				"*://www.memedroid.com",
				"*://www.memecenter.com",
				"*://www.quickmeme.com",
				"*://www.cheezburger.com",
				"*://www.ifunny.co",
				"*://www.boredpanda.com",
				"*://www.memecrunch.com",
				"*://www.memegenerator.net",
				"*://www.imgflip.com",
				"*://www.memedesigner.org",
				"*://www.laughinggif.com",
				"*://www.uberhumor.com",
				"*://www.damnlol.com",
				"*://www.memeshappen.com",
				"*://www.cyanideandhappiness.com",
				"*://www.memebase.com",
				"*://www.memedispenser.com",
				"*://www.collegehumor.com",
				"*://www.reddit.com/r/funny",
				"*://www.9gag.com",
				"*://www.memedroid.com",
				"*://www.memecenter.com",
				"*://www.quickmeme.com",
				"*://www.cheezburger.com",
				"*://www.ifunny.co",
				"*://www.boredpanda.com",
				"*://www.memecrunch.com",
				"*://www.memegenerator.net",
				"*://www.imgflip.com",
				"*://www.memedesigner.org",
				"*://www.laughinggif.com",
				"*://www.uberhumor.com",
				"*://www.damnlol.com",
				"*://www.memeshappen.com",
				"*://www.cyanideandhappiness.com",
				"*://www.memebase.com",
				"*://www.memedispenser.com",
				"*://www.collegehumor.com",
			],
		},
	},
	{
		OnlineShoppingWebsites: {
			title: "Online Shopping Websites",
			websites: [
				"*://www.amazon.com",
				"*://www.ebay.com",
				"*://www.walmart.com",
				"*://www.target.com",
				"*://www.bestbuy.com",
				"*://www.newegg.com",
				"*://www.macys.com",
				"*://www.nordstrom.com",
				"*://www.zappos.com",
				"*://www.aliexpress.com",
				"*://www.asos.com",
				"*://www.sephora.com",
				"*://www.homedepot.com",
				"*://www.lowes.com",
				"*://www.overstock.com",
				"*://www.costco.com",
				"*://www.qvc.com",
				"*://www.hsn.com",
				"*://www.wayfair.com",
				"*://www.etsy.com",
				"*://www.amazon.com",
				"*://www.ebay.com",
				"*://www.walmart.com",
				"*://www.target.com",
				"*://www.bestbuy.com",
				"*://www.newegg.com",
				"*://www.macys.com",
				"*://www.nordstrom.com",
				"*://www.zappos.com",
				"*://www.aliexpress.com",
				"*://www.asos.com",
				"*://www.sephora.com",
				"*://www.homedepot.com",
				"*://www.lowes.com",
				"*://www.overstock.com",
				"*://www.costco.com",
				"*://www.qvc.com",
				"*://www.hsn.com",
				"*://www.wayfair.com",
				"*://www.etsy.com",
			],
		},
	},
	{
		NewsWebsites: {
			title: "News & Media Websites",
			websites: [
				"*://www.bbc.com/news",
				"*://www.cnn.com",
				"*://www.nytimes.com",
				"*://www.washingtonpost.com",
				"*://www.theguardian.com",
				"*://www.independent.co.uk",
				"*://www.telegraph.co.uk",
				"*://www.reuters.com",
				"*://www.apnews.com",
				"*://www.aljazeera.com",
				"*://www.abcnews.go.com",
				"*://www.nbcnews.com",
				"*://www.cbsnews.com",
				"*://www.foxnews.com",
				"*://www.msnbc.com",
				"*://www.huffpost.com",
				"*://www.usatoday.com/news",
				"*://www.wsj.com",
				"*://www.bloomberg.com",
				"*://www.ft.com",
				"*://www.economist.com",
				"*://www.forbes.com",
				"*://www.businessinsider.com",
				"*://www.cnbc.com",
				"*://www.bbc.com/news",
				"*://www.cnn.com",
				"*://www.nytimes.com",
				"*://www.washingtonpost.com",
				"*://www.theguardian.com",
				"*://www.independent.co.uk",
				"*://www.telegraph.co.uk",
				"*://www.reuters.com",
				"*://www.apnews.com",
				"*://www.aljazeera.com",
				"*://www.abcnews.go.com",
				"*://www.nbcnews.com",
				"*://www.cbsnews.com",
			],
		},
	},
	{
		SportsWebsites: {
			title: "Sport Websites",
			websites: [
				"*://www.espn.com",
				"*://www.sports.yahoo.com",
				"*://www.cbssports.com",
				"*://www.nba.com",
				"*://www.nfl.com",
				"*://www.nhl.com",
				"*://www.mlb.com",
				"*://www.olympic.org",
				"*://www.fifa.com",
				"*://www.uefa.com",
				"*://www.wwe.com",
				"*://www.ufc.com",
				"*://www.pga.com",
				"*://www.atpworldtour.com",
				"*://www.wtatennis.com",
				"*://www.f1.com",
				"*://www.nascar.com",
				"*://www.motogp.com",
				"*://www.bleacherreport.com",
				"*://www.sportingnews.com",
				"*://www.sbnation.com",
				"*://www.si.com",
				"*://www.goal.com",
				"*://www.foxsports.com",
				"*://www.nbcsports.com",
				"*://www.bbc.com/sport",
				"*://www.theguardian.com/sport",
				"*://www.independent.co.uk/sport",
				"*://www.telegraph.co.uk/sport",
				"*://www.reuters.com/news/sports",
				"*://www.apnews.com/apf-sports",
				"*://www.bbc.com/news",
				"*://www.cnn.com",
				"*://www.nytimes.com",
				"*://www.washingtonpost.com",
				"*://www.theguardian.com",
				"*://www.independent.co.uk",
				"*://www.telegraph.co.uk",
				"*://www.reuters.com",
				"*://www.apnews.com",
				"*://www.aljazeera.com",
				"*://www.bbc.com/news",
				"*://www.cnn.com",
				"*://www.nytimes.com",
				"*://www.washingtonpost.com",
				"*://www.theguardian.com",
				"*://www.independent.co.uk",
				"*://www.telegraph.co.uk",
				"*://www.reuters.com",
				"*://www.apnews.com",
				"*://www.aljazeera.com",
				"*://www.bbc.com/news",
				"*://www.cnn.com",
				"*://www.nytimes.com",
				"*://www.washingtonpost.com",
				"*://www.theguardian.com",
				"*://www.independent.co.uk",
				"*://www.telegraph.co.uk",
				"*://www.reuters.com",
				"*://www.apnews.com",
				"*://www.aljazeera.com",
				"*://www.bbc.com/news",
				"*://www.cnn.com",
				"*://www.nytimes.com",
				"*://www.washingtonpost.com",
				"*://www.theguardian.com",
				"*://www.independent.co.uk",
				"*://www.telegraph.co.uk",
				"*://www.reuters.com",
				"*://www.apnews.com",
				"*://www.aljazeera.com",
				"*://www.bbc.com/news",
				"*://www.cnn.com",
				"*://www.nytimes.com",
				"*://www.washingtonpost.com",
				"*://www.theguardian.com",
				"*://www.independent.co.uk",
				"*://www.telegraph.co.uk",
				"*://www.reuters.com",
				"*://www.apnews.com",
				"*://www.aljazeera.com",
			],
		},
	},
	{
		GamingWebsites: {
			title: "Gaming Related Websites",
			websites: [
				"*://www.ign.com",
				"*://www.gamespot.com",
				"*://kotaku.com",
				"*://www.polygon.com",
				"*://www.theverge.com/gaming",
				"*://www.eurogamer.net",
				"*://www.gameinformer.com",
				"*://www.rockpapershotgun.com",
				"*://www.pcgamer.com",
				"*://www.n4g.com",
				"*://www.twitch.tv",
				"*://gaming.youtube.com",
				"*://store.steampowered.com",
				"*://gamefaqs.gamespot.com",
				"*://www.gamasutra.com",
				"*://www.metacritic.com",
				"*://www.reddit.com/r/gaming",
				"*://www.giantbomb.com",
				"*://www.shacknews.com",
				"*://gamejolt.com",
				"*://www.escapistmagazine.com",
				"*://www.mmorpg.com",
				"*://www.polygon.com",
				"*://www.gamepedia.com",
				"*://www.gametrailers.com",
				"*://www.joystiq.com",
				"*://www.gamesradar.com",
				"*://www.gamesindustry.biz",
				"*://www.eurogamer.net",
				"*://www.giantbomb.com",
				"*://www.escapistmagazine.com",
				"*://www.pcgamer.com",
				"*://www.gamepressure.com",
				"*://www.trueachievements.com",
				"*://www.gameskinny.com",
				"*://www.rockpapershotgun.com",
				"*://www.gameplanet.com",
				"*://www.egmnow.com",
				"*://www.siliconera.com",
				"*://www.destructoid.com",
				"*://www.shacknews.com",
				"*://www.mmo-champion.com",
				"*://www.gamejolt.com",
				"*://www.gamerevolution.com",
				"*://www.games.tm",
				"*://www.gamehiker.com",
				"*://www.mmogames.com",
				"*://www.player.one",
				"*://www.bleedingcool.com",
				"*://www.twinfinite.net",
				"*://www.greenmangaming.com",
				"*://www.gamesindustry.biz",
				"*://www.xboxachievements.com",
				"*://www.dualshockers.com",
				"*://www.gamasutra.com",
				"*://www.rpgamer.com",
				"*://www.games.cz",
				"*://www.nintendolife.com",
				"*://www.usgamer.net",
				"*://www.psu.com",
				"*://www.mcvuk.com",
				"*://www.playstationlifestyle.net",
				"*://www.gamerstemple.com",
				"*://www.videogamer.com",
				"*://www.nintendoworldreport.com",
				"*://www.rpgfan.com",
				"*://www.gameogre.com",
				"*://www.cheatcc.com",
				"*://www.relyonhorror.com",
				"*://www.play-mag.co.uk",
				"*://www.mobygames.com",
				"*://www.capsulecomputers.com.au",
				"*://www.opencritic.com",
				"*://www.gamertweak.com",
				"*://www.gamespace.com",
				"*://www.eurogamer.net",
				"*://www.nintendosoup.com",
				"*://www.allgame.com",
				"*://www.hardcoregamer.com",
				"*://www.pcgamesn.com",
				"*://www.gamewatcher.com",
				"*://www.racketboy.com",
				"*://www.gamecrate.com",
				"*://www.onlysp.com",
				"*://www.retrogamer.net",
				"*://www.nintendoenthusiast.com",
				"*://www.gamegrep.com",
				"*://www.greenmangaming.com",
				"*://www.gamewatcher.com",
				"*://www.gamingonlinux.com",
				"*://www.retrouprising.com",
				"*://www.gamersdecide.com",
				"*://www.joystickdivision.com",
				"*://www.dvsgaming.org",
				"*://www.gamesforchange.org",
				"*://www.godisageek.com",
				"*://www.gamecritics.com",
				"*://www.venturebeat.com",
			],
		},
	},
];

function BlockMenu() {
	return (
		<div className="w-full px-6 mt-4">
			{blocklist.map((block, index) => {
				const title = Object.values(block)[0].title;
				return <BlockComponent key={index} title={title} />;
			})}
		</div>
	);
}

const BlockComponent = ({ title }: { title: string }) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleClick = () => {
		setIsSelected(!isSelected);
		if (isSelected)
			selectedBlockList = selectedBlockList.filter((block) => block !== title);
		else selectedBlockList.push(title);
	};

	return (
		<div
			className={`bg-neutral-800 hover:bg-neutral-900 text-white/70 hover:text-white/90 ${
				isSelected ? "!bg-[#70c38382] !text-white" : ""
			} py-2 flex flex-row items-center justify-center rounded-md cursor-pointer duration-300 w-full mb-1`}
			onClick={handleClick}
		>
			<h3 className="text-sm">{title}</h3>
		</div>
	);
};

function saveData() {
	chrome.storage.sync.set({ name: name, blocklist: blocklist }, function () {
		console.log("Saved login data");
		window.location.href = "popup.html";
	});
}

console.log("popup main!");
const container = document.createElement("div");
const root = createRoot(container);
container.id = "root";

document.body.appendChild(container);
document.body.style.height = "320px";
root.render(app);
