class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
}

const me = new Person('Amy Kirasack');
console.log(me);

const other = new Person();
console.log(other);