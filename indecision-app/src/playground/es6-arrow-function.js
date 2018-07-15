const square = function (x) {
    return x * x;
}

console.log(square(8))

//arrow functions are always anonymous, so you need to assign it to a variable
const squareArrow = (x) => x * x ;

console.log(squareArrow(8));

//Challenge: create getFirstName arrow function
const getFirstName = (fullName) => fullName.split(' ')[0];