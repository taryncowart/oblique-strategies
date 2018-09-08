/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/oblique.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/card.js":
/*!*********************!*\
  !*** ./lib/card.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./lib/data.js");


const drawCard = (data) => {
  let cardNumber = Math.floor(Math.random() * _data__WEBPACK_IMPORTED_MODULE_0__["default"].length);
  return _data__WEBPACK_IMPORTED_MODULE_0__["default"][cardNumber];
};

/* harmony default export */ __webpack_exports__["default"] = (drawCard);


/***/ }),

/***/ "./lib/data.js":
/*!*********************!*\
  !*** ./lib/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const text = [
  "(Organic) machinery",
  "A line has two sides",
  "A very small object         Its center",
  "Abandon desire",
  "Abandon normal instructions",
  "Abandon normal instruments",
  "Accept advice",
  "Accretion",
  "Adding on",
  "Allow an easement (an easement is the abandonment of a stricture)",
  "Always first steps",
  "Always give yourself credit for having more than personality",
  "Are there sections?  Consider transitions",
  "Ask people to work against their better judgement",
  "Ask your body",
  "Assemble some of the elements in a group and treat the group",
  "Balance the consistency principle with the inconsistency principle",
  "Be dirty",
  "Be extravagant",
  "Be less critical",
  "Breathe more deeply",
  "Bridges   -build   -burn",
  "Cascades",
  "Change ambiguities to specifics",
  "Change instrument roles",
  "Change nothing and continue with immaculate consistency",
  "Change specifics to ambiguities",
  "Children   -speaking     -singing",
  "Cluster analysis",
  "Consider different fading systems",
  "Consider transitions",
  "Consult other sources   -promising   -unpromising",
  "Convert a melodic element into a rhythmic element",
  "Courage!",
  "Cut a vital connection",
  "Decorate, decorate",
  "Define an area as 'safe' and use it as an anchor",
  "Destroy  -nothing   -the most important thing",
  "Discard an axiom",
  "Disciplined self-indulgence",
  "Disconnect from desire",
  "Discover the recipes you are using and abandon them",
  "Display your talent",
  "Distorting time",
  "Do nothing for as long as possible",
  "Do something boring",
  "Do something sudden, destructive and unpredictable",
  "Do the last thing first",
  "Do the washing up",
  "Do the words need changing?",
  "Do we need holes?",
  "Don't avoid what is easy",
  "Don't be frightened of cliches",
  "Don't break the silence",
  "Don't stress one thing more than another",
  "Don't be afraid of things because they're easy to do",
  "Don't be frightened to display your talents",
  "Emphasize differences",
  "Emphasize repetitions",
  "Emphasize the flaws",
  "Faced with a choice, do both",
  "Feed the recording back out of the medium",
  "Fill every beat with something",
  "Find a safe part and use it as an anchor",
  "Get your neck massaged",
  "Ghost echoes",
  "Give the game away",
  "Give the name away",
  "Give way to your worst impulse",
  "Go outside.  Shut the door.",
  "Go slowly all the way round the outside",
  "Go to an extreme, come part way back",
  "Honor thy error as a hidden intention",
  "How would someone else do it?",
  "How would you have done it?",
  "Humanize something free of error",
  "Idiot glee (?)",
  "Imagine the piece as a set of disconnected events",
  "In total darkness, or in a very large room, very quietly",
  "Infinitesimal gradations",
  "Intentions   -nobility of  -humility of   -credibility of",
  "Into the impossible",
  "Is it finished?",
  "Is something missing?",
  "Is the information correct?",
  "Is the style right?",
  "It is quite possible (after all)",
  "It is simply a matter of work",
  "Just carry on",
  "Left channel, right channel, center channel",
  "Listen to the quiet voice",
  "Look at the order in which you do things",
  "Look closely at the most embarrassing details & amplify them",
  "Lost in useless territory",
  "Lowest common denominator",
  "Magnify the most difficult details",
  "Make a blank valuable by putting it in an exquisite frame",
  "Make a sudden, destructive unpredictable action; incorporate",
  "Make an exhaustive list of everything you might do \n& do the last thing on the list",
  "Make it more sensual",
  "Make what's perfect more human",
  "Mechanicalize something idiosyncratic",
  "Move towards the unimportant",
  "Mute and continue",
  "Not building a wall but making a brick",
  "Once the search has begun, something will be found",
  "Only a part, not the whole",
  "Only one element of each kind",
  "Overtly resist change",
  "Put in earplugs",
  "Question the heroic approach",
  "Reevaluation (a warm feeling)",
  "Remember those quiet evenings",
  "Remove a restriction",
  "Remove ambiguities and convert to specifics",
  "Remove specifics and convert to ambiguities",
  "Repetition is a form of change",
  "Retrace your steps",
  "Reverse",
  "Short circuit \n(example: a man eating peas with the idea that they will improve his virility \nshovels them straight into his lap)",
  "Simple subtraction",
  "Simply a matter of work",
  "Slow preparation, fast execution",
  "Spectrum analysis",
  "State the problem in words as clearly as possible",
  "Take a break",
  "Take away the elements in order of apparent non-importance",
  "Take away the important parts",
  "Tape your mouth",
  "The inconsistency principle",
  "The most important thing is the thing most easily forgotten",
  "The tape is now the music",
  "Think - inside the work -outside the work",
  "Think of the radio",
  "Tidy up",
  "Towards the insignificant",
  "Trust in the you of now",
  "Try faking it",
  "Turn it upside down",
  "Twist the spine",
  "Use 'unqualified' people",
  "Use an old idea",
  "Use an unacceptable color",
  "Use cliches",
  "Use fewer notes",
  "Use filters",
  "Use something nearby as a model",
  "Use your own ideas",
  "Voice your suspicions",
  "Water",
  "What are the sections sections of?    Imagine a caterpillar moving",
  "What are you really thinking about just now?",
  "What context would look right?",
  "What is the reality of the situation?",
  "What is the simplest solution?",
  "What mistakes did you make last time?",
  "What to increase? What to reduce? What to maintain?",
  "What would your closest friend do?",
  "What wouldn't you do?",
  "When is it for?",
  "Where is the edge?",
  "Which parts can be grouped?",
  "Work at a different speed",
  "Would anyone want it?",
  "You are an engineer",
  "You can only make one dot at a time",
  "You don't have to be ashamed of using your own ideas",
  "[blank white card]"
];

/* harmony default export */ __webpack_exports__["default"] = (text);


/***/ }),

/***/ "./lib/modal.js":
/*!**********************!*\
  !*** ./lib/modal.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Modal {
  constructor() {
    this.modalBackground = document.getElementById('modal-background');
    this.closeButton = document.getElementById('close-button');
    this.openButton = document.getElementById('open-button');
  }

  closeModal() {
    this.modalBackground.addEventListener('click', (e) => {
      this.modalBackground.style.display = "none";
    });
    this.closeButton.addEventListener('click', (e) => {
      this.modalBackground.style.display = "none";
    });
  }

  openModal() {
    this.openButton.addEventListener('click', (e) => {
      this.modalBackground.style.display = "";
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);


/***/ }),

/***/ "./lib/oblique.js":
/*!************************!*\
  !*** ./lib/oblique.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./lib/modal.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./lib/card.js");



document.addEventListener("DOMContentLoaded", () => {
  const modal = new _modal__WEBPACK_IMPORTED_MODULE_0__["default"]();
  modal.closeModal();
  modal.openModal();

  const card = document.getElementById('strategy-card');
  card.addEventListener('click', () => {
    card.innerHTML = Object(_card__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map