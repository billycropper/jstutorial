//Figuring out data type
const rating = 4.5;
console.log(typeof rating);

const name = 'John';
const age = 30;

//Template string
console.log('My name is ' + name + ' and I am ' + age);
console.log(`My name is ${name} and I am ${age}`);

//String methods
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(''));

//Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples','oranges','pears',10,true];
fruits[3] = 'grapes';
fruits.push('mangoes');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

//Objects
const person = {
    firstName: 'John',
    lkastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// const { firstName, lastName, address: { city }} = person;
// console.log(person);

person.email = 'john@gmail.com';

//Arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todos[1].text);

//Sending data to server with JSON
const todoJSON = JSON.stringify(todos);

//For loops
for(let i = 0; i <= 10; i++){
    console.log(i);
}

//While loops
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//Looping though arrays
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.text);
}

//forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted);

//Conditionals
const x = 4;
const y = 11;

if(x == 10){
    console.log('x is 10');
} else if(x > 10){
    console.log('x is greater than 10');
} else {
    console.log('x is less then 10');
}

if(x > 5 && y > 10){
    console.log('x is more than 5 or y is more than 10');
}

if(x > 5){
    if(y > 10){
        console.log('Hello');
    }
}

//Terrnary operator (short hand if statement)
//? means if true : means else
const z = 10;
const color = z > 10 ? 'red' : 'blue';

console.log(color);

//Switches
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//Functions
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
//Return num1 plus num2
console.log(addNums(5,5));

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName);

//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}