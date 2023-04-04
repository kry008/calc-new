let basicMath = require('./class/basicMath.js');
let functionsMath = require('./class/functionsMath.js');
class allMath {
    constructor() {
        this.basicMath = new basicMath();
        this.functionsMath = new functionsMath();
    }

}

module.exports = {
    basicMath: basicMath,
    functionsMath: functionsMath,
    allMath: allMath
}