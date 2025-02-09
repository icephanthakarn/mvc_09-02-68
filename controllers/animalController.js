const AnimalRepository = require("../models/AnimalRepository");

class AnimalController {
  constructor(repo) {
    this.repo = repo; 
  }

  getAllAnimals() {
    return this.repo.getAll();
  }

  getAcceptedAnimals() {
    return this.getAllAnimals().filter((a) => a.isAcceptable());
  }

  getRejectedAnimals() {
    return this.getAllAnimals().filter((a) => !a.isAcceptable());
  }

  getAnimalTypeCounts() {
    return this.repo.countByType();
  }
}

module.exports = AnimalController;
