const Animal = require("./Animal");

class Phoenix extends Animal {
    constructor(id, type, latestCheck, vaccineCount, fireProofCertificate) {
        super(id, type, latestCheck, vaccineCount);
        this.fireProofCertificate = fireProofCertificate;
    }

  //  Phoenix ต้องมีใบรับรอง
    isAcceptable() {
        return this.fireProofCertificate == true;
    }
}
module.exports = Phoenix;
