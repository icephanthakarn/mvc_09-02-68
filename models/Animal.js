class Animal {
    constructor(id, type, latestCheck, vaccineCount) {
        if (new.target === Animal) {
            throw new Error("Animal is an abstract class and cannot be instantiated directly.");
        }
        this.id = id;
        this.type = type;
        this.latestCheck = latestCheck;
        this.vaccineCount = vaccineCount;
    }
  
    isAcceptable() {
        throw new Error("Subclasses must implement isAcceptable method.");
    }
  
    toString() {
        return `ID: ${this.id} | Type: ${this.type} | LatestCheck: ${this.latestCheck} | Vaccines: ${this.vaccineCount}`;
    }
}

module.exports = Animal;
  