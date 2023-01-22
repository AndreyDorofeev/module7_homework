class deviceClass {
    constructor(name, power) {
        this.name = name,
        this.powerConsumption = power + " watt",
        this.isPlugged = false;
    }
    on() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }
    off() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}

class iron extends deviceClass {
    constructor(name, brand, type, power) {
        super(name, power),
        this.brand = brand,
        this.type = type,
        this.isPlugged = true
    }
}
  
class pc extends deviceClass {
    constructor(name, power, type, brand) {
        super(name, power),
        this.type = type,
        this.brand = brand
    }
}

const first_iron = new iron("iron", "tefal", "first_iron", 24);
const first_pc = new pc("computer", 100, "first_pc", "acer");
    
first_iron.on();
first_pc.off();
  
console.log(first_iron);
console.log(first_pc);