function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;

    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function(gallons) { this.tank += gallons; };
Car.prototype.drive = function(distance) { 
    if (distance > this.tank * this.milesPerGallon) {
        return `I haven't enough fuel!\nI ran out of fuel at ${this.odometer} miles!`;
    }
    
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;

    return `I ran out of fuel at ${this.odometer} miles!`;
};

const car = new Car("Mercedes", 2);

car.fill(100);
console.log(car.tank);

console.log(car.drive(100));
console.log(car.tank);
console.log(car.odometer);

console.log(car.drive(200));