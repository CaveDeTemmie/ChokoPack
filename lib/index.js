"use strict";
/**
 *
 * @param name - Name
 * @param wantLog - Boolean
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isChokoJoestar(name, wantLog) {
    if (name === "ChokoJoestar") {
        if (wantLog) {
            console.log(`Your responce is ${name}, it's true`);
        }
        return true;
    }
    else if (name !== "ChokoJoestar") {
        if (wantLog) {
            console.log(`Your responce is ${name}, it's false`);
        }
        return false;
    }
}
exports.default = isChokoJoestar;
//# sourceMappingURL=index.js.map