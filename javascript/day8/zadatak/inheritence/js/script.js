function Vehicle(manufacturer, model, price, tax) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.price = price;
    this.tax = tax;

    this.priceWithVAT = function() {
        return this.price + (this.price * (this.tax / 100));
    }
}

function Car(manufacturer, model, price, tax, powerKw, acceleration, maxSpeed) {
    Vehicle.call(this, manufacturer, model, price, tax);
    this.powerKw = powerKw;
    this.acceleration = acceleration;
    this.maxSpeed = maxSpeed;

    this.calculatePowerInHP = function() {
        return this.powerKw * 1.36;
    }
}

function Boat(manufacturer, model, price, tax, speedInKnots, maxWeight, length) {
    Vehicle.call(this, manufacturer, model, price, tax);
    this.speedInKnots = speedInKnots;
    this.maxWeight = maxWeight;
    this.length = length;

    this.calcualteSpeedInKMH = function() {
        return this.speedInKnots * 1.85;
    }
}

Car.prototype = Object.create(Vehicle.prototype);
Boat.prototype = Object.create(Vehicle.prototype);

function print(vehicle) {
    isCar = vehicle instanceof Car;
    const toPrint = document.getElementById("print");
    toPrint.innerHTML += `<h2>${isCar ? "Car" : "Boat"}:</h2>`
    toPrint.innerHTML += `Vehicle ${vehicle.model} from manufacturer ${vehicle.manufacturer} costs ${vehicle.priceWithVAT()}<br>`;
    if (isCar) {
        toPrint.innerHTML += `Power of car in kw is ${vehicle.powerKw}, which is equals to ${vehicle.calculatePowerInHP()} HP<br>`; 
    } else {
        toPrint.innerHTML += `Max speed of boat is ${vehicle.speedInKnots}, which is equals to ${vehicle.calcualteSpeedInKMH()} km/h<br>`; 
    }
    toPrint.innerHTML += "<br>";
}

print(new Car("Mercedes", "C 200", 45000, 25, 134, 7.2, 236));
print(new Boat("Ranieri", "Voyager19s", 80000, 25, 14, 10000, 40));