"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkvalue = exports.getpositions = void 0;
// This function generates a new array where for each element v[a[i]]=i; v is the new array, 
// a is the array previously given and i is the element  
var getpositions = function (keyboard) {
    var positions = __spreadArray([], keyboard, true);
    for (var poselement = 0; poselement < keyboard.length; poselement++) {
        positions[keyboard[poselement]] = poselement;
    }
    return positions;
};
exports.getpositions = getpositions;
// this function takes the positions of every element, and then for each unit checks the position and 
// adds the difference between the current position and the next one
var checkvalue = function (target, keyboard) {
    var positions = (0, exports.getpositions)(keyboard);
    var targetstring = target.toString();
    var init = 0;
    var ans = 0;
    for (var targetposition = 0; targetposition < targetstring.length; targetposition++) {
        var num = parseInt(targetstring[targetposition]);
        ans += Math.abs(init - positions[num]);
        init = positions[num];
    }
    return ans;
};
exports.checkvalue = checkvalue;
// const target: number = 1297;  
// const keyboard: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
// const keyboard: number[] = [0, 1, 2, 9, 7, 5, 6, 3, 8, 4]; 
// console.log(checkvalue(target, keyboard), "ms"); 
