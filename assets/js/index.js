//Exercise #1
const user = {
  name: "Oles",
  surname: "Lukashev",
  email: "lukasevoles@gmail.com",
  password: "qwerty",
  phoneNumber: "+380950233937",
  address: {
    city: "Zaporizhie",
    street: "Oleksanrivskia",
    house: "68",
    apartment: 5,
  },
};
//Exercise #2
function userGreeting(userObj) {
  console.log(`Доброго дня, ${userObj.name} ${userObj.surname}!`);
}
userGreeting(user);
//Exercise #3
for (key in user) {
  //   key != "address" ? console.log(`${key} = ${user[key]}`) : null;
  //   if (key === "address") {
  //     for (key in user.address) {
  //       console.log(`${key} = ${user.address[key]}`);
  //     }
  //   }
  if (key != "address") {
    console.log(`${key} = ${user[key]}`);
  } else {
    for (key in user.address) {
      console.log(`${key} = ${user.address[key]}`);
    }
  }
}
//Exercise #4
const car = {
  colour: "black",
  model: "R8",
  mark: "AUDI",
  engineDisplacement: 5.2,
  numberOfPassengers: 2,
  currentSpeed: 0,
  maxSpeed: 334,
  accelerate(kmPerHour) {
    this.currentSpeed += kmPerHour;
    if (this.currentSpeed > this.maxSpeed) {
      this.currentSpeed = this.maxSpeed;
    }
  },
  deaccelerate(kmPerHour) {
    this.currentSpeed =
      this.currentSpeed - kmPerHour < 0 ? 0 : this.currentSpeed - kmPerHour;
  },
  stop() {
    this.currentSpeed = 0;
  },
};
car.accelerate(600);
console.log(car.currentSpeed);
car.deaccelerate(134);
console.log(car.currentSpeed);
car.stop();
console.log(car.currentSpeed);
//Exercise #5
function Car(
  colour,
  model,
  mark,
  engineDisplacement,
  numberOfPassengers,
  currentSpeed,
  maxSpeed
) {
  this.colour = colour;
  this.model = model;
  this.mark = mark;
  this.engineDisplacement = engineDisplacement;
  this.numberOfPassengers = numberOfPassengers;
  this.currentSpeed = currentSpeed;
  this.maxSpeed = maxSpeed;
}
const carProto = {};
carProto.accelerate = function (kmPerHour) {
  this.currentSpeed += kmPerHour;
  if (this.currentSpeed > this.maxSpeed) {
    this.currentSpeed = this.maxSpeed;
  }
};
carProto.deaccelerate = function (kmPerHour) {
  this.currentSpeed =
    this.currentSpeed - kmPerHour < 0 ? 0 : this.currentSpeed - kmPerHour;
};
carProto.stop = function () {
  this.currentSpeed = 0;
};
Car.prototype = carProto;
const car1 = new Car("white", "Q8", "AUDI", 3, 5, 60, 300);
console.log("car1:", car1);
car1.accelerate(50);
console.log("car1:", car1);
const car2 = new Car("purple", "A8", "AUDI", 3, 5, 200, 300);
console.log("car2:", car2);
car2.deaccelerate(300);
console.log("car2:", car2);
console.log(car1.accelerate === car2.accelerate);
