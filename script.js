/*  Exercise 01_11_01

    Whole Spectrum Energy Solutions
    Author: Ty Ary
    Date:  8.28.18

    Filename: script.js
*/

"use strict";

// global variables
var selectedCity = "Tucson, AZ"; //Default location
var weatherReport = null;
//Gets the weather in response to click events on city locations
//And for default city on page load
function getWeather(evt) {
   var latitude;
   var longitude;
   if (evt.type !== "load") {
      if (evt.target) {
         selectedCity = evt.target.innerHTML;
      } else if (evt.srcElement) {
         selectedCity = evt.srcElement.innerHTML;
      }
   }
   if (selectedCity === "Tucson, AZ") {
      latitude = 37.7577;
      longitude = -122.4376;
   } else if (selectedCity === "Chicago, IL") {
      latitude = 41.8337329;
      longitude = -87.7321555;
   } else if (selectedCity === "Montreal, QC") {
      latitude = 45.5601062;
      longitude = -73.7120832;
   }
}

//Retrieve li elements holding city location choices
var locations = document.querySelectorAll("section ul li");
//Add click event listeners to all city location elements
//Event handler will be getWeather()
for (var i = 0; i < locations.length; i++) {
   if (locations[i].addEventListener) {
      locations[i].addEventListener("click", getWeather, false);
   } else if (locations[i].attachEvent) {
      locations[i].attachEvent("onclick", getWeather);
   }
}
//Adds a load event listeners to get weather for default locaiton, event handler is getWeather
if (window.addEventListener) {
   window.addEventListener("load", getWeather, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", getWeather);
}