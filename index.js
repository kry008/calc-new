let BasicMath = require('./class/basicMath.js');
let FunctionsMath = require('./class/functionsMath.js');
class AllMath {
    constructor() {
        this.BasicMath = new basicMath();
        this.FunctionsMath = new functionsMath();
        this.FunctionsDate = new FunctionsDate();
    }

}

module.exports = {
    BasicMath: BasicMath,
    FunctionsMath: FunctionsMath,
    AllMath: AllMath
}