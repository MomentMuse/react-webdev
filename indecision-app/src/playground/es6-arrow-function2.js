//arguments object - no longer bound with arrow functions
//this keyword no - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));
//the arguments will log

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}
console.log(addArrow(55, 1, 1001));
//the arguments will not log. no access to arguments with arrow function