// ==UserScript==
// @name         Cheats and stuff
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  some fun Hacks mods and cheets
// @author       Pcat
// @match        @match http://slither.io/*
// @downloadURL  https://github.com/Pcat0/Slither-IO-hacking/raw/master/Cheats-and-Stuff/Cheats%26Stuff.user.js
// @updateUR     https://github.com/Pcat0/Slither-IO-hacking/raw/master/Cheats-and-Stuff/Cheats%26Stuff.user.js
// ==/UserScript==

(function() {
    'use strict';
    this.scrol = .9;
    setInterval(function(){
        gsc = this.scrol;
    }, 1);
    document.onmousewheel = (function(e) {
        this.scrol *= Math.pow(0.9, e.wheelDelta / -120 || e.detail / 2 || 0);
    }).bind(this);
    document.onkeydown = (function(e){
        if (e.keyCode == 16) setAcceleration(1);
    }).bind(this);
    document.onkeyup = (function(e){
        if (e.keyCode == 16) setAcceleration(0);
    }).bind(this);
})();
