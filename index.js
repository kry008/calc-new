let BasicMath = require('./class/basicMath.js');
let functionsMath = require('./class/functionsMath.js');
class AllMath {
    constructor() {
        this.basicMath = new basicMath();
        this.functionsMath = new functionsMath();
    }

}

module.exports = {
    BasicMath: BasicMath,
    functionsMath: functionsMath,
    AllMath: AllMath
}