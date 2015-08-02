/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(2)

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * navigation.js
	 *
	 * Handles toggling the navigation menu for small screens.
	 */
	( function() {
		var container, button, menu;

		container = document.getElementById( 'site-navigation' );
		if ( ! container )
			return;

		button = container.getElementsByTagName( 'button' )[0];
		if ( 'undefined' === typeof button )
			return;

		menu = container.getElementsByTagName( 'ul' )[0];

		// Hide menu toggle button if menu is empty and return early.
		if ( 'undefined' === typeof menu ) {
			button.style.display = 'none';
			return;
		}

		if ( -1 === menu.className.indexOf( 'nav-menu' ) )
			menu.className += ' nav-menu';

		button.onclick = function() {
			if ( -1 !== container.className.indexOf( 'toggled' ) )
				container.className = container.className.replace( ' toggled', '' );
			else
				container.className += ' toggled';
		};
	} )();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// Rudiments Script Example
	var $ = __webpack_require__(3);

	// Start your script here
	$(document).ready(function() {
		console.log($('body').html().length);
	}); 
	// end your script

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);