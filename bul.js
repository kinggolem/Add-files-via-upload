const express = require("express");const bodyParser = require("body-parser");const cors = require("cors");const path = require("path");const fs = require("fs");const app = express();const port = 6969;app.use(cors());app.use(bodyParser.urlencoded({ extended: false }));app.use(bodyParser.json());app.use("/image", express.static(path.join("Add files via upload")));allSkins = [{"name": "bull","displayName": "Bull","rarity": 0,"portrait": "portrait_bull.png","skins": [{"name": "bullguydefault","displayName": "Bull","cost": 0,"currency": "","features": [],"limited": false,"group": "","image": "bullguydefault.png","rating": 0},{"name": "bullguyhair","displayName": "Viking Bull","cost": 79,"currency": "Gems","features": ["Brawler Model"],"limited": true,"group": "Archive","image": "bullguyhair.png","rating": 0},{"name": "bullguyfootbull","displayName": "Touchdown Bull","cost": 79,"currency": "Gems","features": ["Brawler Model"],"limited": true,"group": "Archive","image": "bullguyfootbull.png","rating": 0},{"name": "bulldudefootbullblue","displayName": "Linebacker Bull","cost": 2500,"currency": "StarPoints","features": ["Brawler Model"],"limited": false,"group": "","image": "bulldudefootbullblue.png","rating": 0},{"name": "bulldudebarbking","displayName": "Barbarian King Bull","cost": 79,"currency": "Gems","features": ["Brawler Model","Texture","Animations","Effects"],"limited": true,"group": "Supercell 10 Years","image": "bulldudebarbking.png","rating": 0},{"name": "bulldudegold","displayName": "True Gold Bull","cost": 25000,"currency": "Coins","features": ["Brawler Model","Texture"],"limited": false,"group": "True Gold","image": "bulldudegold.png","rating": 0},{"name": "bulldudesilver","displayName": "True Silver Bull","cost": 10000,"currency": "Coins","features": ["Brawler Model","Texture"],"limited": false,"group": "True Silver","image": "bulldudesilver.png","rating": 0},{"name": "bulldudeox","displayName": "Space Ox Bull","cost": 149,"currency": "Gems","features": ["Brawler Model","Texture","Animations","Effects","Voice"],"limited": true,"group": "Lunar Brawl 2021","image": "bulldudeox.png","rating": 0},{"name": "bulldudeterminator","displayName": "B-800","cost": 79,"currency": "Gems","features": ["Brawler Model","Texture","Animations","Effects"],"limited": true,"group": "Brawl Pass","image": "bulldudeterminator.png","rating": 0},{"name": "bulldudelion","displayName": "Lion Bull","cost": 2500,"currency": "ClubCoins","features": ["Brawler Model","Texture","Animations","Effects"],"limited": false,"group": "Club League","image": "bulldudelion.png","rating": 0},{"name": "bulldudemang","displayName": "Bull Mang","cost": 149,"currency": "Gems","features": ["Brawler Model","Texture","Animations","Effects"],"limited": false,"group": "BT21","image": "bulldudemang.png","rating": 0}]},{"name": "frank","displayName": "Frank","rarity": 3,"portrait": "portrait_frank.png","skins": [{"name": "frankdefault","displayName": "Frank","cost": 0,"currency": "","features": [],"limited": false,"group": "","image": "frankdefault.png","rating": 0},{"name": "frankcaveman","displayName": "Caveman Frank","cost": 79,"currency": "Gems","features": ["Brawler Model"],"limited": true,"group": "Archive","image": "frankcaveman.png","rating": 0},{"name": "hammerdudedj","displayName": "DJ Frank","cost": 79,"currency": "Gems","features": ["Brawler Model","Texture","Effects"],"limited": false,"group": "","image": "hammerdudedj.png","rating": 0},{"name": "hammerdudegold","displayName": "True Gold Frank","cost": 25000,"currency": "Coins","features": ["Brawler Model","Texture"],"limited": false,"group": "True Gold","image": "hammerdudegold.png","rating": 0},{"name": "hammerdudesilver","displayName": "True Silver Frank","cost": 10000,"currency": "Coins","features": ["Brawler Model","Texture"],"limited": false,"group": "True Silver","image": "hammerdudesilver.png","rating": 0},{"name": "hammerdudexmas","displayName": "Holiday Party Frank","cost": 149,"currency": "Gems","features": ["Brawler Model","Texture","Animations","Effects"],"limited": true,"group": "Brawlidays","image": "hammerdudexmas.png","rating": 0}]}];eventList = [{"name": "EventSlot1","displayName": "Gem Grab","eventDuration": 24,"offset": 0,"gameModes": [{"name": "gemgrab","displayName": "Gem Grab","rotationTime": 24,"data": {"image": "gemgrab.png","backgroundColor": "#9A3DF3","textColor": "#D852FF"},"maps": [{"name": "deep-diner","displayName": "Deep Diner","gameMode": "gemgrab","image": "deep-diner.png"},{"name": "duality","displayName": "Duality","gameMode": "gemgrab","image": "duality.png"},{"name": "minecart-madness","displayName": "Minecart Madness","gameMode": "gemgrab","image": "minecart-madness.png"},{"name": "spring-trap","displayName": "Spring Trap","gameMode": "gemgrab","image": "spring-trap.png"},{"name": "double-swoosh","displayName": "Double Swoosh","gameMode": "gemgrab","image": "double-swoosh.png"},{"name": "hard-rock-mine","displayName": "Hard Rock Mine","gameMode": "gemgrab","image": "hard-rock-mine.png"},{"name": "glass-half-full","displayName": "Glass Half Full","gameMode": "gemgrab","image": "glass-half-full.png"},{"name": "crystal-arcade","displayName": "Crystal Arcade","gameMode": "gemgrab","image": "crystal-arcade.png"},{"name": "gem-exchange","displayName": "Gem Exchange","gameMode": "gemgrab","image": "gem-exchange.png"},{"name": "deathcap-trap","displayName": "Deathcap Trap","gameMode": "gemgrab","image": "deathcap-trap.png"},{"name": "open-space","displayName": "Open Space","gameMode": "gemgrab","image": "open-space.png"},{"name": "gem-fort","displayName": "Gem Fort","gameMode": "gemgrab","image": "gem-fort.png"},{"name": "flooded-dam","displayName": "Flooded Dam","gameMode": "gemgrab","image": "flooded-dam.png"},{"name": "chill-space","displayName": "Chill Space","gameMode": "gemgrab","image": "chill-space.png"}]}]},{"name": "EventSlot4","displayName": "Team Events 1","eventDuration": 24,"offset": 6,"gameModes": [{"name": "knockout","displayName": "Knockout","rotationTime": 48,"data": {"image": "knockout.png","backgroundColor": "#F7831C","textColor": "#FD9B0E"},"maps": [{"name": "crimewater","displayName": "Crimewater","gameMode": "knockout","image": "crimewater.png"},{"name": "flaring-phoenix","displayName": "Flaring Phoenix","gameMode": "knockout","image": "flaring-phoenix.png"},{"name": "hidden-enemy","displayName": "Hidden Enemy","gameMode": "knockout","image": "hidden-enemy.png"},{"name": "goldarm-gulch","displayName": "Goldarm Gulch","gameMode": "knockout","image": "goldarm-gulch.png"},{"name": "out-in-the-open","displayName": "Out in the Open","gameMode": "knockout","image": "out-in-the-open.png"},{"name": "belles-rock","displayName": "Belle's Rock","gameMode": "knockout","image": "belles-rock.png"},{"name": "riverside","displayName": "Riverside","gameMode": "knockout","image": "riverside.png"}]},{"name": "bounty","displayName": "Bounty","rotationTime": 48,"data": {"image": "bounty.png","backgroundColor": "#00CFFF","textColor": "#24D6FF"},"maps": [{"name": "dont-turn-around","displayName": "Don't turn around","gameMode": "bounty","image": "dont-turn-around.png"},{"name": "dry-season","displayName": "Dry Season","gameMode": "bounty","image": "dry-season.png"},{"name": "shooting-star","displayName": "Shooting Star","gameMode": "bounty","image": "shooting-star.png"},{"name": "side-by-side","displayName": "Side by Side","gameMode": "bounty","image": "side-by-side.png"},{"name": "snake-prairie","displayName": "Snake Prairie","gameMode": "bounty","image": "snake-prairie.png"},{"name": "canal-grande","displayName": "Canal Grande","gameMode": "bounty","image": "canal-grande.png"},{"name": "layer-cake","displayName": "Layer Cake","gameMode": "bounty","image": "layer-cake.png"}]}]}];function getBrawler(allSkins, name){for (let x of allSkins){if (x.hasOwnProperty("name")){if (x.name === name){return x;}}}return {};}function getSkin(brawler, skin){if (brawler.hasOwnProperty("skins")){for (let x of brawler.skins){if (x.hasOwnProperty("name")){if (x.name === skin){return x;}}}}return {};}class SeasonTime{constructor(season, hour, minute, second){this.season = season;this.hour = hour;this.minute = minute;this.second = second;this.hoursPerSeason = MAP_CYCLE_HOURS;this.maxSeasons = MAP_CYCLES_PER_SEASON;}convertToSeconds(){var seconds = 0;seconds += this.season * this.hoursPerSeason * 3600;seconds += this.hour * 3600;seconds += this.minute * 60;seconds += this.second;return seconds;}}class EventSlot{constructor(gameModes, eventDuration, offset){this.gameModes = gameModes;this.eventDuration = eventDuration;this.offset = 0;if (offset > 0){this.offset = offset;}}getCurrentGameMode(seasonTime){var seasonHour = seasonTime.hour;seasonHour -= this.offset;seasonHour = mod(seasonHour, MAP_CYCLE_HOURS);var gameModeIndex = Math.floor(seasonHour / this.eventDuration);gameModeIndex = mod(gameModeIndex, this.gameModes.length);var currentGameMode = this.gameModes[gameModeIndex];return currentGameMode;}getCurrentGameMap(seasonTime){var theGameMode = this.getCurrentGameMode(seasonTime);return theGameMode.getMapAtTime(seasonTime, this.offset);}getCurrentGameMapFast(theGameMode, seasonTime){return theGameMode.getMapAtTime(seasonTime, this.offset);}getEventTimeLeft(seasonTime){var seasonHour = seasonTime.hour;seasonHour -= this.offset;var nextEventHour = (Math.floor(seasonHour / this.eventDuration) + 1) * this.eventDuration;var nextEventTime = subtractSeasonTimes(new SeasonTime(seasonTime.season, this.offset + nextEventHour, 0, -1), seasonTime);return nextEventTime;}searchForMap(mapName){for (var x = 0; x < this.gameModes.length; x++){let mapSearchResult = this.gameModes[x].findMapIndex(mapName);if (mapSearchResult >= 0){return this.gameModes[x].getMap(mapSearchResult);}}return {};}getMapStartTimes(mapName){var gameModeIndex = -1;var mapIndex = -1;var validStartTimes = [];for (var x = 0; x < this.gameModes.length; x++){let mapSearchResult = this.gameModes[x].findMapIndex(mapName);if (mapSearchResult >= 0){gameModeIndex = x;mapIndex = mapSearchResult;}}if (gameModeIndex >= 0){var theGameMode = this.gameModes[gameModeIndex];var startTime = theGameMode.getTimeAtMap(mapIndex, this.offset, this.eventDuration);const thisEventDuration = new SeasonTime(0, this.eventDuration, 0, 0);for (var x = 0; x < startTime.length; x++){const thisTime = new SeasonTime(0, startTime[x], 0, 0);if (this.getCurrentGameMode(thisTime) == theGameMode){validStartTimes.push({"start":thisTime, "duration":thisEventDuration});}}}return validStartTimes;}getNextStartTime(mapName, currentTime){if (this.getCurrentGameMap(currentTime).name == mapName){return new SeasonTime(0, 0, 0, 0);}var gameModeIndex = -1;var mapIndex = -1;var lowestStartTime = new SeasonTime(1, 0, 0, 0);for (var x = 0; x < this.gameModes.length; x++){let mapSearchResult = this.gameModes[x].findMapIndex(mapName);if (mapSearchResult >= 0){gameModeIndex = x;mapIndex = mapSearchResult;}}if (gameModeIndex >= 0){var theGameMode = this.gameModes[gameModeIndex];var startTime = theGameMode.getTimeAtMap(mapIndex, this.offset, this.eventDuration);for (var x = 0; x < startTime.length; x++){const thisTime = new SeasonTime(currentTime.season, startTime[x], 0, -1);if (seasonTimesLessThan(thisTime, currentTime)){thisTime.season += 1;}if (this.getCurrentGameMode(thisTime) == theGameMode){const timeDiff = subtractSeasonTimes(thisTime, currentTime);if (seasonTimesLessThan(timeDiff, lowestStartTime)){lowestStartTime = timeDiff;}}}}return lowestStartTime;}}class GameMode{constructor(name, displayName, rotationTime){this.name = name;this.displayName = displayName;this.rotationTime = rotationTime;this.data = {};this.maps = [];}addMap(mapObject){this.maps.push(mapObject);}getMap(index){if (index < this.maps.length){return this.maps[index];} else{return {};}}setData(newData){this.data = newData;}findMapIndex(mapName){var index = -1;for (var x = 0; x < this.maps.length; x++){if (this.maps[x].hasOwnProperty("name")){if (this.maps[x].name == mapName){index = x;}}}return index;}getMapAtTime(seasonTime, offset){var seasonHour = seasonTime.hour;seasonHour -= offset;seasonHour = mod(seasonHour, MAP_CYCLE_HOURS);var mapIndex = Math.floor(seasonHour / this.rotationTime);mapIndex = mod(mapIndex, this.maps.length);return this.maps[mapIndex];}getTimeAtMap(mapIndex, offset, eventDuration){mapIndex = mod(mapIndex, this.maps.length);var startTime = mapIndex * this.rotationTime;startTime += offset;startTime = mod(startTime, MAP_CYCLE_HOURS);var activeTimes = [];for (var seasonPos = 0; seasonPos < MAP_CYCLE_HOURS; seasonPos += this.rotationTime * this.maps.length){for (var x = startTime + seasonPos; x < (startTime + seasonPos + this.rotationTime); x += eventDuration){activeTimes.push(mod(x, MAP_CYCLE_HOURS));}}return activeTimes;}}function jsonToEvents(eventData){var events = [];for (var x = 0; x < eventData.length; x++){var gameModes = [];for (var y = 0; y < eventData[x].gameModes.length; y++){let gameModeData = eventData[x].gameModes[y];var thisGameMode = new GameMode(gameModeData.name, gameModeData.displayName, gameModeData.rotationTime);for (var m = 0; m < gameModeData.maps.length; m++){thisGameMode.addMap(gameModeData.maps[m]);}thisGameMode.setData(gameModeData.data);gameModes.push(thisGameMode);}var thisEvent = new EventSlot(gameModes, eventData[x].eventDuration, eventData[x].offset);     events.push(thisEvent);}return events;}function mod(x, y){return (((x % y) + y) % y);}function realToTime(real){real = Math.floor(real / 1000);return secondsToTime((real - first_season_time) % SEASON_SECONDS);}function secondsToTime(seconds){var seasonTime = new SeasonTime(0, 0, 0, 0);seasonTime.season = Math.floor(seconds/MAP_CYCLE_SECONDS);seasonTime.hour = Math.floor((Math.floor(seconds/3600) % MAP_CYCLE_HOURS));seasonTime.minute = Math.floor((seconds % 3600) / 60);seasonTime.second = Math.floor(seconds % 60);return seasonTime;}function addSeasonTimes(time1, time2){const resultSeconds = time1.second + time2.second;const resultMinutes = time1.minute + time2.minute + Math.floor(resultSeconds / 60);const resultHours = time1.hour + time2.hour + Math.floor(resultMinutes / 60);const resultSeasons = time1.season + time2.season + Math.floor(resultHours / time1.hoursPerSeason);return new SeasonTime(mod(resultSeasons, time1.maxSeasons), mod(resultHours, time1.hoursPerSeason), mod(resultMinutes, 60), mod(resultSeconds, 60));}function subtractSeasonTimes(time1, time2){const resultSeconds = time1.second - time2.second;const resultMinutes = time1.minute - time2.minute + Math.floor(resultSeconds / 60);const resultHours = time1.hour - time2.hour + Math.floor(resultMinutes / 60);const resultSeasons = time1.season - time2.season + Math.floor(resultHours / time1.hoursPerSeason);return new SeasonTime(mod(resultSeasons, time1.maxSeasons), mod(resultHours, time1.hoursPerSeason), mod(resultMinutes, 60), mod(resultSeconds, 60));}function seasonTimesLessThan(time1, time2){const seconds1 = time1.convertToSeconds();const seconds2 = time2.convertToSeconds();return seconds1 < seconds2;}function getModeInformation(eventList, modeName){var result = {};var x = 0;var found = false;while (x < eventList.length && found == false){var y = 0;while (y < eventList[x].gameModes.length){if (eventList[x].gameModes[y].name == modeName){found = true;const thisGameMode = eventList[x].gameModes[y];result.name = thisGameMode.name;result.displayName = thisGameMode.displayName;result.data = thisGameMode.data;const allMaps = thisGameMode.maps;var mapList = [];for (var m = 0; m < allMaps.length; m++){if (allMaps[m].hasOwnProperty("name") && allMaps[m].hasOwnProperty("displayName")){mapList.push({"name": allMaps[m].name,"displayName": allMaps[m].displayName});}}result.maps = mapList;}y++;}x++;        }return result;}function getMapInformation(eventList, mapName){var result = {};var x = 0;var found = false;while (x < eventList.length && found == false){const mapInThisSlot = eventList[x].searchForMap(mapName);var isEmpty = true;for (var y in mapInThisSlot){isEmpty = false;}if (isEmpty == false){found = true;for (var y in mapInThisSlot){result[y] = mapInThisSlot[y];}result["times"] = eventList[x].getMapStartTimes(mapName);}x++;}return result;}function getMapStartDelay(eventList, mapName, currentTime){var lowestStartTime = new SeasonTime(1, 0, 0, 0);for (var x = 0; x < eventList.length; x++){const timeDiff = eventList[x].getNextStartTime(mapName, currentTime);if (seasonTimesLessThan(timeDiff, lowestStartTime)){var lowestStartTime = timeDiff;}}return lowestStartTime;}function getEventInformation(event, seasonTime){var thisEvent = {};thisEvent["gameMode"] = {};thisEvent["map"] = {};thisEvent["timeLeft"] = new SeasonTime(0, 0, 0, 0);const thisGameMode = event.getCurrentGameMode(seasonTime);const thisMap = event.getCurrentGameMapFast(thisGameMode, seasonTime);for (var x in thisGameMode){if (x == "data"){thisEvent["gameMode"][x] = copyMapData(thisGameMode[x], "");}else if (x != "maps" && x != "rotationTime"){thisEvent["gameMode"][x] = thisGameMode[x];}}for (var x in thisMap){if (x != "image" && x != "gameMode"){thisEvent["map"][x] = thisMap[x];}}thisEvent.timeLeft = event.getEventTimeLeft(seasonTime);return thisEvent;}function copyMapData(data, image){var dataCopy = {};for (var y in data){if (y == "image"){if (image != ""){dataCopy[y] = image;}} else{dataCopy[y] = data[y];}}return dataCopy;}function getAllActiveEvents(eventList, seasonTime){var activeEvents = [];for (var x = 0; x < eventList.length; x++){var thisEvent = {};thisEvent = getEventInformation(eventList[x], seasonTime);activeEvents.push(thisEvent);}return activeEvents;}function getAllUpcomingEvents(eventList, seasonTime){var upcomingEvents = [];for (var x = 0; x < eventList.length; x++){var thisEvent = {};thisEvent = getEventInformation(eventList[x], addSeasonTimes(seasonTime, new SeasonTime(0, eventList[x].eventDuration, 0, 0)));upcomingEvents.push(thisEvent);}return upcomingEvents;}const MAP_CYCLE_HOURS=336;const MAP_CYCLE_SECONDS=1209600;const SEASON_SECONDS=2419200;const MAP_CYCLES_PER_SEASON=2;const next_season_time = (((86400*365)*(2021-1970))+(12*86400)+(263*86400)+(8*3600));const first_season_time = next_season_time % SEASON_SECONDS;function isEmpty(x){var isEmpty = true;for (var y in x){isEmpty = false;}return isEmpty;}function isValidTime(hour, minute, second){var valid = true;if (isNaN(hour)){valid = false;} if (isNaN(minute)){valid = false;} if (isNaN(second)){valid = false;}return valid;}function highresImageExists(skinFile){var data = {"exists": false,"image": ""};const checkFile = skinFile.replace(".png", "_highres.png");data.exists = fs.existsSync("Add files via upload/" + checkFile);if (data.exists){data.image = checkFile;}return data;}eventList = jsonToEvents(eventList);app.get("/", (req, res) => {res.send("frank bul el golm whac a king ash much fun");});app.get("/brawler", (req, res) => {var allBrawlers = [];for (let x of allSkins){if (x.hasOwnProperty("name") && x.hasOwnProperty("displayName")){allBrawlers.push({"name": x.name,"displayName": x.displayName});}}res.json(allBrawlers);});app.get("/brawler/:brawler", (req, res) => {const brawler = req.params.brawler;let brawlerData = getBrawler(allSkins, brawler);if (isEmpty(brawlerData)){res.status(404).send("Brawler not found.");return;}var brawlerInfo = {};var portraitFile = "portraits/";for (var x in brawlerData){if (x == "portrait"){portraitFile = portraitFile + brawlerData[x];}else if (x != "skins"){brawlerInfo[x] = brawlerData[x];}}brawlerInfo["skins"] = [];if (brawlerData.hasOwnProperty("skins")){let brawlerSkins = brawlerData.skins;for (var x = 0; x < brawlerSkins.length; x++){if (brawlerSkins[x].hasOwnProperty("name") && brawlerSkins[x].hasOwnProperty("displayName")){brawlerInfo["skins"].push({"name": brawlerSkins[x].name,"displayName": brawlerSkins[x].displayName});}}}brawlerInfo["image"] = portraitFile;res.send(brawlerInfo);});app.get("/skin/:brawler/:skin", (req, res) => {const brawler = req.params.brawler;const skin = req.params.skin;let brawlerData = getBrawler(allSkins, brawler);if (isEmpty(brawlerData)){res.status(404).send("Brawler or skin not found.");return;} if (!(brawlerData.hasOwnProperty("name"))){res.status(404).send("Brawler has no name!");return;}let skinData = getSkin(brawlerData, skin);if (isEmpty(skinData)){res.status(404).send("Skin not found.");return;}var skinInfo = {};var skinFile = "skins/";for (var x in skinData){if (x == "image"){skinFile = skinFile + brawlerData.name + "/" + skinData.image;} else{skinInfo[x] = skinData[x];}}skinInfo["image"] = skinFile;skinInfo["highresImage"] = highresImageExists(skinFile);res.json(skinInfo);});app.get("/gamemode", (req, res) => {var allGameModes = [];var alreadyChecked = [];for (let x of eventList){if (x.hasOwnProperty("gameModes")){for (let y of x.gameModes){if (y.hasOwnProperty("name") && y.hasOwnProperty("displayName")){if (alreadyChecked.includes(y.name) == false){alreadyChecked.push(y.name);allGameModes.push({"name":y.name,"displayName":y.displayName});}}}}}res.json(allGameModes);});app.get("/gamemode/:gamemode", (req, res) => {const gameMode = req.params.gamemode;let gameModeData = getModeInformation(eventList, gameMode);if (isEmpty(gameModeData)){res.status(404).send("Game mode not found.");return;}var gameModeInfo = {};var gameModeFile = "gamemodes/";for (var x in gameModeData){if (x == "data"){if (gameModeData[x].hasOwnProperty("image")){gameModeFile = gameModeFile + gameModeData[x].image;}gameModeInfo[x] = copyMapData(gameModeData[x], gameModeFile);} else{gameModeInfo[x] = gameModeData[x];}}res.json(gameModeInfo);});app.get("/map/:map", (req, res) => {const map = req.params.map;const currentTime = realToTime(Date.now());let mapData = getMapInformation(eventList, map);if (isEmpty(mapData)){res.status(404).send("Map not found.");return;} if (!(mapData.hasOwnProperty("gameMode"))){res.status(404).send("Map does not know which game mode it is in!");return;}var mapInfo = {};var mapFile = "maps/";for (var x in mapData){if (x == "image"){mapFile = mapFile + mapData.gameMode + "/" + mapData.image;} else{mapInfo[x] = mapData[x];}}const mapTime = getMapStartDelay(eventList, map, currentTime);if (mapTime.season > 0){res.status(404).send("Map either does not exist or never appears.");return;}mapInfo["next"] = mapTime;mapInfo["image"] = mapFile;res.json(mapInfo);});app.get("/event/current", (req, res) => {const currentTime = realToTime(Date.now());var eventsInfo = {};const activeEvents = getAllActiveEvents(eventList, currentTime);eventsInfo["time"] = currentTime;eventsInfo["events"] = activeEvents;res.json(eventsInfo);});app.get("/event/upcoming", (req, res) => {const currentTime = realToTime(Date.now());var eventsInfo = {};const activeEvents = getAllUpcomingEvents(eventList, currentTime);eventsInfo["time"] = currentTime;eventsInfo["events"] = activeEvents;res.json(eventsInfo);});app.get("/event/time/:hour/:minute/:second", (req, res) => {const hourString = req.params.hour;const minuteString = req.params.minute;const secondString = req.params.second;var time = new SeasonTime(0, 0, 0, 0);var eventsInfo = {};if (isValidTime(hourString, minuteString, secondString) == false){res.status(400).send("Invalid input.");return;}time.hour = mod(parseInt(hourString), MAP_CYCLE_HOURS);time.minute = mod(parseInt(minuteString), 60);time.second = mod(parseInt(secondString), 60);const activeEvents = getAllActiveEvents(eventList, time);eventsInfo["time"] = time;eventsInfo["events"] = activeEvents;res.json(eventsInfo);});app.get("/event/later/:hour/:minute/:second", (req, res) => {const hourString = req.params.hour;const minuteString = req.params.minute;const secondString = req.params.second;const currentTime = realToTime(Date.now());var deltaTime = new SeasonTime(0, 0, 0, 0);var eventsInfo = {};if (isValidTime(hourString, minuteString, secondString) == false){res.status(400).send("Invalid input.");return;}const deltaHours = parseInt(hourString);deltaTime.season = Math.floor(deltaHours / MAP_CYCLE_HOURS);deltaTime.hour = mod(deltaHours, MAP_CYCLE_HOURS);deltaTime.minute = mod(parseInt(minuteString), 60);deltaTime.second = mod(parseInt(secondString), 60);deltaTime = addSeasonTimes(currentTime, deltaTime);const activeEvents = getAllActiveEvents(eventList, deltaTime);eventsInfo["time"] = deltaTime;eventsInfo["events"] = activeEvents;res.json(eventsInfo);});app.use((error, req, res, next) => {console.error(error.stack);if (error.type == "FILE_DOES_NOT_EXIST"){res.send("ASH THREW THAT FILE IN THE TRASH ! ! !");}next();});app.listen(port, () => console.log(port));