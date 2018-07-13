var nameVar = 'Amy';
var nameVar = 'Gatsby'
//two vars with the same name!! oh noes; reassign and redefine
console.log('nameVar', nameVar);

let nameLet = 'Gunther';
nameLet = 'Jasmine'
//let nameLet = 'Blah' You can't redfine a let variable!
console.log('nameLet', nameLet)

const nameConst = 'Jasper';
//nameConst = 'Jasp' doesn't work because you can't reassign const
console.log('nameConst', nameConst)

//var is function-scoped

function getPetName() {
    var petName = 'Gatsby';
    return petName;
}

getPetName();
console.log(petName)

//const and let are block-scoped

const fullName = 'Amy Kirasack'
//let firstName; declaring the variable allows you to call firstName outside of the block

if (fullName) {
    const firstName = fullName.split('');[0]
    console.log(firstName);
}

console.log(firstName); //this won't work