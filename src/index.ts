/**
 *
 * @param name - Name
 * @param wantLog - Boolean
 * @returns
 */


function isChokoJoestar(name: string, wantLog: boolean) {
	if (name === "ChokoJoestar") {
		if (wantLog) {
			console.log(`Your responce is ${name}, it's true`);
		}
		return true;
	} else if (name !== "ChokoJoestar") {
		if (wantLog) {
			console.log(`Your responce is ${name}, it's false`);
		}
		return false;
	}
}

export default isChokoJoestar;
