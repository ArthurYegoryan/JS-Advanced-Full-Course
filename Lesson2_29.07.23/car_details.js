const cars = [ 
    { 
        make: "Toyota", 
        model: "Corolla", 
        year: 2022, 
    }, 
    { 
        make: "Honda", 
        model: "Civic", 
        year: 2023, 
    }, 
    { 
        make: "Ford", 
        model: "Mustang", 
        year: 2021, 
    }, 
    { 
        make: "Toyota", 
        model: "Camry", 
        year: 2023, 
    }, 
    { 
        make: "Chevrolet", 
        model: "Silverado", 
        year: 2022, 
    }, 
    { 
        make: "Toyota", 
        model: "Rav4", 
        year: 2023, 
    }, 
];

const carName = "Toyota";

function filterCarDetailsByName(carName, cars) {
    const result = cars.filter(car => car.make === carName);

    return result;
}

console.log(JSON.stringify(filterCarDetailsByName(carName, cars)));