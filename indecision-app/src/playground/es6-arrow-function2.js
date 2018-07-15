//arguments object - no longer bound with arrow functions
//this keyword no - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));
//the arguments will log (can access)

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}
console.log(addArrow(55, 1, 1001));
//the arguments will not log. no access to arguments with arrow function

const user = {
    name: 'Amy',
    cities: ['Ottawa', 'Philadelphia', 'Singapore', 'Toronto', 'Yamagata'],
    printPlacesLived() {
        return cityMessages = this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
};

console.log(user.printPlacesLived());

//Challenge time!
const multiplier = {
    numbers: [2, 5, 9],
    multiplyBy: 3,
    multiply(multiplyBy) { 
        return this.numbers.map((num) => num * this.multiplyBy); 
    }
};

console.log(multiplier.multiply());