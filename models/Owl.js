const Animal = require("./Animal");
class Owl extends Animal {
  constructor(id, type, latestCheck, vaccineCount, flightDistanceNoMeal) {
    super(id, type, latestCheck, vaccineCount);
    this.flightDistanceNoMeal = flightDistanceNoMeal;
  }

  // นกฮูกต้องบินได้มากกว่า 100 โดยไม่ทานข้าว
  isAcceptable() {
    return this.flightDistanceNoMeal >= 100;
  }
}
module.exports = Owl;
