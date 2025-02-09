const express = require("express");
const path = require("path");

const AnimalRepository = require("./models/AnimalRepository");
const AnimalController = require("./controllers/animalController");

const repo = new AnimalRepository(path.join(__dirname, "data", "animals.json"));
const controller = new AnimalController(repo);

const app = express();

// ตั้งค่า view engine เป็น ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// หน้า 1: สัตว์ทั้งหมด
app.get("/", (req, res) => {
    let animals = controller.getAllAnimals();
    const { type } = req.query;

    if (type) {
      animals = animals.filter((a) => a.type === type); // กรองสัตว์ที่ตรงกับ `type`
    }
    res.render("pages/all", { animals, activeMenu: "all", filterType: type });
});
 
  
// หน้า 2: สัตว์ที่รับได้
app.get("/accepted", (req, res) => {
    let animals = controller.getAcceptedAnimals();
    const { type } = req.query;

    if (type) {
        animals = animals.filter((a) => a.type === type);
    }
    res.render("pages/accepted", {
        animals,
        activeMenu: "accepted",
        filterType: type
    });
});

// หน้า 3: สัตว์ที่ถูกปฏิเสธ
app.get("/rejected", (req, res) => {
    let animals = controller.getRejectedAnimals();
    const { type } = req.query;
    if (type) {
        animals = animals.filter((a) => a.type === type);
    }
    res.render("pages/rejected", {
        animals,
        activeMenu: "rejected",
        filterType: type
    });
});

// หน้า 4: สรุปจำนวน
app.get("/count", (req, res) => {
  // ดึงข้อมูล count ของทุกประเภท
    let counts = controller.getAnimalTypeCounts();
  
    const { type } = req.query;
    if (type) {
        const filtered = {};
        if (counts[type] !== undefined) {
            filtered[type] = counts[type];
        }
        counts = filtered;
    }

    res.render("pages/count", {
        counts,
        activeMenu: "count",
        filterType: type
    });
});

// ฟังก์ชันนับจำนวนสัตว์ทั้งหมดและแต่ละประเภท
function countAnimalsByType(animals) {
    const counts = {
        total: animals.length,
        Phoenix: 0,
        Dragon: 0,
        Owl: 0
    };
  
    for (const a of animals) {
        if (counts[a.type] !== undefined) {
            counts[a.type]++;
        } 
        else {}
    }
    return counts;
}
  
// รันเซิร์ฟเวอร์
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
