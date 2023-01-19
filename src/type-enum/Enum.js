"use strict";
var colors;
(function (colors) {
    colors[colors["RED"] = 0] = "RED";
    colors[colors["BLUE"] = 1] = "BLUE";
})(colors || (colors = {}));
var profissions;
(function (profissions) {
    profissions[profissions["PROGRAMADOR"] = 0] = "PROGRAMADOR";
    profissions[profissions["PEDREIRO"] = 1] = "PEDREIRO";
})(profissions || (profissions = {}));
console.log(profissions);
console.log(colors.RED);
