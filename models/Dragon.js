const Animal = require("./Animal");

class Dragon extends Animal {
    constructor(id, type, latestCheck, vaccineCount, smokePoisonLevel) {
        super(id, type, latestCheck, vaccineCount);
        this.smokePoisonLevel = smokePoisonLevel;
    }

  // มังกรต้องมีมลพิษทางควัน < 70
    isAcceptable() {
        return this.smokePoisonLevel < 70;
    }
}
module.exports = Dragon;
