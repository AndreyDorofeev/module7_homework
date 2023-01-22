function Device(name, brand, power) {
    this.name = name,
    this.brand = brand,
    this.powerConsumption = power + " watt",
    this.isPlugged = false;
}
Device.prototype.plugIn = function () {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};
Device.prototype.unPlug = function () {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};
const iron = new Device("iron", "tefal", 24);
const computer = new Device("computer", "acer", 100);
iron.plugIn();
computer.unPlug();
  
console.log(iron);
console.log(computer);
  