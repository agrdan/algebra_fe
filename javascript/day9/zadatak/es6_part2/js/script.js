class Vehicle {
    constructor(manufacturer, model, price, tax) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.tax = tax;
    }

    priceWithVat() {
        return this.price + (this.price * (this.tax / 100));
    }
}

class Car extends Vehicle {
    constructor(manufacturer, model, price, tax, powerKw, acceleration, maxSpeed) {
        super(manufacturer, model, price, tax);
        this.powerKw = powerKw;
        this.acceleration = acceleration;
        this.maxSpeed = maxSpeed;
    }

    calculatePowerInHP() {
        return parseInt(this.powerKw * 1.3);
    }
}

class Boat extends Vehicle {
    constructor(manufacturer, model, price, tax, speedInKnots, maxWeight, length) {
        super(manufacturer, model, price, tax);
        this.speedInKnots = speedInKnots;
        this.maxWeight = maxWeight;
        this.length = length;
    }

    calcualteSpeedInKMH() {
        return (this.speedInKnots * 1.85).toFixed(2);
    }
}

function print(vehicle) {
    isCar = vehicle instanceof Car;
    const toPrint = document.getElementById("print");
    toPrint.innerHTML += `<h2>${isCar ? "Car" : "Boat"}:</h2>`
    toPrint.innerHTML += `Vehicle ${vehicle.model} from manufacturer ${vehicle.manufacturer} costs ${vehicle.priceWithVat()} €<br>`;
    if (isCar) {
        toPrint.innerHTML += `Power of car in kw is ${vehicle.powerKw}, which is equals to ${vehicle.calculatePowerInHP()} HP<br>`; 
    } else {
        toPrint.innerHTML += `Max speed of boat in knots is ${vehicle.speedInKnots}, which is equals to ${vehicle.calcualteSpeedInKMH()} km/h<br>`; 
    }
    toPrint.innerHTML += "<br>";
}

print(new Car("Mercedes", "C 200", 45000, 25, 134, 7.2, 236));
print(new Boat("Ranieri", "Voyager19s", 82500, 25, 14, 10000, 40));