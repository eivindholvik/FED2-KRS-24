class Vehicle {
  static firm = "Volvo";
  hasCrashed = false;

  constructor(color, type = "car", wheels = 4) {
    this.color = color.toLowerCase();
    this.type = type.toLowerCase();
    this.wheels = wheels;
  }

  static honk() {
    console.log("HOOOOONK!!!!");
  }

  openDoor() {
    console.log(`The ${this.type} with ${this.wheels} wheels and the color of ${this.color} opens the door`);
  }
  drive(km) {
    console.log(`The ${this.type} is driving ${km}km`);
  }
  crashing() {
    console.log(`The ${this.type} crashed`);
    this.hasCrashed = true;
  }
  // ---- This is not Javascript ----
  // getFirm(){
  //   return this.firm;
  // }

  // setFirm(firm){
  //   this.firm = firm;
  // }
}

// const car = new Vehicle("black");

// car.openDoor();

const buss = new Vehicle("YeLlow", "bUSs", 6);

// buss.openDoor();

// buss.drive(340);

// buss.crashing();

// const arr = [4, 3, 5, 7, 4, 2];

// buss.color = "blue";
Vehicle.honk();

const myArr = new Array();


