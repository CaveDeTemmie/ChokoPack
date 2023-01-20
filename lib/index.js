"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param name - Name
 * @param wantLog - Boolean
 * @returns
 */
function isChokoJoestar(name, wantLog) {
    if (name ===
        "ChokoJoestar" ||
        "Choko" ||
        "Chokomo" ||
        "chokojoestar" ||
        "choko" ||
        "chokomo") {
        if (wantLog) {
            console.log(`Your responce is ${name}, it's true`);
        }
        return true;
    }
    else if (name !==
        "ChokoJoestar" ||
        "Choko" ||
        "Chokomo" ||
        "chokojoestar" ||
        "choko" ||
        "chokomo") {
        if (wantLog) {
            console.log(`Your responce is ${name}, it's false`);
        }
        return false;
    }
}
exports.default = isChokoJoestar;
//# sourceMappingURL=index.js.map