หน้าที่ของแต่ละไฟล์
app.js หน้าที่: กำหนดเส้นทางของแต่ละหน้าเว็บ
Animal.js หน้าที่: เป็น abstract class ที่ใช้เป็นแม่แบบสำหรับคลาสสัตว์ทุกชนิด เช่น Phoenix, Dragon, Owl และกำหนดคุณสมบัติพื้นฐานของสัตว์ เช่น id, type, latestCheck, vaccineCount
Phoenix.js, Dragon.js, Owl.js หน้าที่: คลาสย่อยที่สืบทอดจาก Animal.js และกำหนดคุณสมบัติของปต่ละตัว
Phoenix.js: มีคุณสมบัติ fireProofCertificate (ใบรับรองกันไฟ) และกำหนดว่า isAcceptable() ต้องมีใบรับรองกันไฟ (true)
Dragon.js: มีคุณสมบัติ smokePoisonLevel (ระดับมลพิษจากควัน) และกำหนดว่า isAcceptable() ต้องมีระดับพิษไม่เกิน 70
Owl.js: มีคุณสมบัติ flightDistanceNoMeal (ระยะทางที่บินได้โดยไม่ทานอาหาร) และกำหนดว่า isAcceptable() ต้องมากกว่า 100 km.
AnimalRepository.js หน้าที่: โหลดและจัดเก็บข้อมูลสัตว์ทั้งหมดจากไฟล์ JSON
animals.json หน้าที่: เก็บข้อมูลสัตว์
animalController.js หน้าที่: เป็น Controller ที่เชื่อมระหว่าง Model และ View
all.ejs: แสดงสัตว์ทั้งหมดในระบบ
accepted.ejs: แสดงเฉพาะสัตว์ที่รับได้
rejected.ejs: แสดงเฉพาะสัตว์ที่ถูกปฏิเสธ
count.ejs: แสดงจำนวนสัตว์แยกตามประเภท
header.ejs หน้าที่: ส่วนหัวของหน้าเว็บ เช่น เมนูนำทาง (Navbar)
