const fs = require("fs");
const path = require("path");

const Phoenix = require("./Phoenix");
const Dragon = require("./Dragon");
const Owl = require("./Owl");

class AnimalRepository {
  constructor(jsonFilePath) {
    this.jsonFilePath = jsonFilePath;
    this.animals = [];
    this.loadData();
  }

  loadData() {
    if (!fs.existsSync(this.jsonFilePath)) {
      console.error("JSON file not found:", this.jsonFilePath);
      return;
    }

    const jsonStr = fs.readFileSync(this.jsonFilePath, "utf-8");
    let dataArr;

    try {
      dataArr = JSON.parse(jsonStr);
    } catch (err) {
      console.error("Invalid JSON format:", err);
      return;
    }

    if (!Array.isArray(dataArr)) {
      console.error("JSON is not an array.");
      return;
    }

    for (const record of dataArr) {
      const { id, type, latestCheck, vaccineCount } = record;
      switch (type) {
        case "Phoenix":
          this.animals.push(
            new Phoenix(
              id,
              type,
              latestCheck,
              vaccineCount,
              record.fireProofCertificate
            )
          );
          break;
        case "Dragon":
          this.animals.push(
            new Dragon(
              id,
              type,
              latestCheck,
              vaccineCount,
              record.smokePoisonLevel
            )
          );
          break;
        case "Owl":
          this.animals.push(
            new Owl(
              id,
              type,
              latestCheck,
              vaccineCount,
              record.flightDistanceNoMeal
            )
          );
          break;
        default:

          break;
      }
    }
  }

  // บันทึกไฟล์ (กรณีมีการแก้ไข/เพิ่ม)
  saveData() {
    const dataArr = this.animals.map((a) => {
  
      let base = {
        id: a.id,
        type: a.type,
        latestCheck: a.latestCheck,
        vaccineCount: a.vaccineCount,
      };
      if (a instanceof Phoenix) {
        base.fireProofCertificate = a.fireProofCertificate;
      } else if (a instanceof Dragon) {
        base.smokePoisonLevel = a.smokePoisonLevel;
      } else if (a instanceof Owl) {
        base.flightDistanceNoMeal = a.flightDistanceNoMeal;
      }
      return base;
    });

    fs.writeFileSync(this.jsonFilePath, JSON.stringify(dataArr, null, 2), "utf-8");
  }

  getAll() {
    return this.animals;
  }

  countByType() {
    let counts = {};
    for (const a of this.animals) {
      counts[a.type] = (counts[a.type] || 0) + 1;
    }
    return counts;
  }
}

module.exports = AnimalRepository;
