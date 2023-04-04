let BasicMath = require('./class/basicMath.js');
let FunctionsMath = require('./class/functionsMath.js');
let FiguresMath = require('./class/figuresMath.js');
class AllMath {
    constructor() {
        this.BasicMath = new basicMath();
        this.FunctionsMath = new functionsMath();
        this.FiguresMath = new figuresMath();
    }

}

module.exports = {
    BasicMath: BasicMath,
    FunctionsMath: FunctionsMath,
    FiguresMath: FiguresMath,
    AllMath: AllMath
}