var newKnotweedRules = true;  // They're good. Always on!
var simpleCanonRules = false;
var newSpecialFlowerRules = false;  // Special Flowers planted next to Growing Flower
var newGatesRule = true;  // Great! Always on! (New Gate Rules: Player cannot plant on Bonus if already controlling two Gates)
var newWheelRule = true;  // Wheel can be played next to Gate as long as it's ok. Always on.
var newOrchidClashRule = false; // Orchid clashes with all opponent Flowers... I don't think it's a good idea.
var newOrchidVulnerableRule = false;  // Testing new Orchid vulnerable rules
var newOrchidCaptureRule = false;  // Testing new Orchid capture rules
var simpleSpecialFlowerRule = false;  // Simplest special flower rule
var specialFlowerBonusRule = false; // Special Flowers can be moved on Harmony Bonus - not implemented
var rocksUnwheelable = true; // Rocks Unwheelable: Rocks cannot be moved by Wheel but can be removed by Boat. Boat can remove any Accent Tile.
var lotusNoCapture = true; // Lotus not able to be captured. Always on.
var simpleRocks = false;  // Rocks don't disable Harmonies.
var simplest = false; // Simple Accents and Special Flowers.
var lessBonus = false;  // Can only Plant on Bonus if no Growing Flowers.
var superHarmonies = false; // Any number flower harmonies with differently numbered flower.
var completeHarmony = false; // Harmony Ring must contain a 3, 4, and 5
var superRocks = false;  // Tiles surrounding Rock cannot be moved by Wheel.
var boatOnlyMoves = false;  // Boat moves all tiles to surrounding space. No removing of Accent Tiles.
var sameStart = true;  // Host starts with same tile, not clashing tile.
var oneGrowingFlower = false;

var limitedGatesRule = true; // Cannot Plant Basic Flower on Harmony Bonus if already controlling one or more Gates
var specialFlowerLimitedRule = false; // NOT UI READY, DO NOT SET TO TRUE. Cannot Plant Special Flower on Harmony Bonus if not able to Plant Basic Flower either.

var skudTilesKey = "tgggyatso";
var paiShoBoardKey = "default";
var customBoardUrl = null;

var debugOn = false;
var gameDevOn = false;

/* Set to true if building for iOS, else set to false */
var ios = false;

/* Set to true if building for Android, else set to false */
var runningOnAndroid = false;

/* Testing */
var onlinePlayEnabled = false;
/* */

/* --- */


// Redirect if needed
if (window.location.href.includes("thegg.games")) {
  window.location.replace("https://skudpaisho.com");
}
if (shouldRedirectIfNotHttps() && window.location.href.includes("http://")) {
  window.location.replace(window.location.href.replace("http://", "https://"));
}

function shouldRedirectIfNotHttps() {
  return ios;
}

function humanYearsToTreeYears(humanAge) {
  /* f(x)=x+90floor(x/10) */
  return humanAge + 90 * (Math.floor(humanAge / 10));
}


function debug(str) {
    if (debugOn) {
      if (ios || QueryString.appType === 'ios') {
        try {
          webkit.messageHandlers.callbackHandler.postMessage(
              "{debugMessage:" + str + "}"
          );
        } catch(err) {
            console.log('error');
        }
      }

      console.log(str);
    }
}

function debugStackTrace() {
  if (debugOn) {
    console.trace();
  }
}

function masterDebug(str) {
  console.log(str);
}

// Tile Types

var BASIC_FLOWER = "Basic Flower";
var ACCENT_TILE = "Accent Tile";
var SPECIAL_FLOWER = "Special Flower";
var ORIGINAL_BENDER = "Original Bender";

var ROCK = "Rock";
var WHEEL = "Wheel";
var KNOTWEED = "Knotweed";
var BOAT = "Boat";

var POND = "Pond";
var BAMBOO = "Bamboo";
var LION_TURTLE = "Lion Turtle";

var WHITE_LOTUS = "White Lotus";
var ORCHID = "Orchid";

var BADGERMOLE = "Badgermole";
var FLYING_BISON = "Flying Bison";
var KOI = "Koi";
var DRAGON = "Dragon";

/* Helpful methods, polyfills, etc */
function TwoWayMap(map) {
  /* https://stackoverflow.com/questions/21070836/how-can-i-create-a-two-way-mapping-in-javascript-or-some-other-way-to-swap-out */
  this.map = map;
  this.reverseMap = {};
  for(var key in map) {
     var value = map[key];
     this.reverseMap[value] = key;   
  }
}
TwoWayMap.prototype.lookup = function(key){ return this.map[key]; };
TwoWayMap.prototype.reverseLookup = function(key){ return this.reverseMap[key]; };

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayIncludesAll(array1, array2) {
  for (var i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      return false;
    }
  }
  return true;
}

function arrayIncludesOneOf(arr, targetElements) {
  var found = false;
  if (targetElements && targetElements.length) {
    targetElements.forEach(function(targetElement) {
      if (arr.includes(targetElement)) {
        found = true;
        return true;
      }
    });
  }
  return found;
}

function copyArray(arr) {
	var copyArr = [];
	for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      copyArr.push(copyArray(arr[i]));
    } else if (arr[i].getCopy) {
      copyArr.push(arr[i].getCopy());
    } else {
      copyArr.push(arr[i]);
    }
	}
	return copyArr;
}

function copyObject(mainObject) {
  var objectCopy = {}; // objectCopy will store a copy of the mainObject
  var key;
  for (key in mainObject) {
    objectCopy[key] = mainObject[key]; // copies each property to the objectCopy object
  }
  return objectCopy;
}

function getLongestArrayFromArrayOfArrays(arrayOfArrays) {
  var longestYet = null;
  arrayOfArrays.forEach(arr => {
    if (!longestYet || longestYet.length < arr.length) {
      longestYet = arr;
    }
  });
  return longestYet;
}
function getShortestArrayFromArrayOfArrays(arrayOfArrays) {
  var shortestYet = null;
  arrayOfArrays.forEach(arr => {
    if (!shortestYet || shortestYet.length > arr.length) {
      shortestYet = arr;
    }
  });
  return shortestYet;
}

function arrayContainsDuplicates(array) {
  return array.length !== new Set(array).size;
}

// Array shuffle
function shuffleArray(array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function removeRandomFromArray(array) {
  if (array && array.length) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomEntry = array.splice(randomIndex, 1)[0];
    return randomEntry;
  }
}

function peekRandomFromArray(array) {
  if (array && array.length) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomEntry = array[randomIndex];
    return randomEntry;
  }
}

// polyfill
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

function arrayIntersection(array1, array2) {
  var filteredArray = array1.filter(function(n) {
    return array2.indexOf(n) !== -1;
  });
  return filteredArray;
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.lastIndexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}



// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


/* Clipboard */
async function copyTextToClipboard(theText, triggerButton) {
	if (!navigator.clipboard) {
		// Clipboard API not available
		return;
	}
	try {
		await navigator.clipboard.writeText(theText);
    if (triggerButton) {
      triggerButton.innerText = "Copied!";
    }
	} catch (err) {
		console.error('Failed to copy!', err);
	}
}

/* Date */
function dateIsBetween(date1MMSlashDDSlashYYYY, date2MMSlashDDSlashYYYY) {
  var currentDate = new Date();

  var dateRangeBegin = Date.parse(date1MMSlashDDSlashYYYY);
  var dateRangeEnd = Date.parse(date2MMSlashDDSlashYYYY);

  return currentDate >= dateRangeBegin && currentDate <= dateRangeEnd;
}





/* Miscellaneous */
// function updateGinsengGameHack() {
// 	var notationText = gameController.gameNotation.notationText;
// 	setGameController(GameType.Ginseng.id);
// 	addGameOption(SWAP_BISON_AND_DRAGON_ABILITIES);
// 	setGameController(GameType.Ginseng.id, true);
// 	gameController.setGameNotation(notationText);
// }


/* Browser check */

var browserCheck_chrome_ios = false;
var browserCheck_chrome = false;

doBrowserCheck();

function doBrowserCheck() {
  /* See https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome */
  // please note, 
  // that IE11 now returns undefined again for window.chrome
  // and new Opera 30 outputs true for window.chrome
  // but needs to check if window.opr is not undefined
  // and new IE Edge outputs to true now for window.chrome
  // and if not iOS Chrome check
  // so use the below updated condition
  var isChromium = window.chrome;
  var winNav = window.navigator;
  var vendorName = winNav.vendor;
  var isOpera = typeof window.opr !== "undefined";
  var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
  var isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {
    // is Google Chrome on IOS
    browserCheck_chrome_ios = true;
  } else if (
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
    // is Google Chrome
    browserCheck_chrome = true;
  } else {
    // not Google Chrome 
  }
}



