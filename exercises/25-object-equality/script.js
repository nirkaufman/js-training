/*
 * create a constructor function for a student object
 */
function Student(name, age, rank, country) {
  // your code goes here
}

// example:
let Students1 = new Student('Dinanath', 35, 5, 'India');
console.log('Students1', Students1); // Students1 Student {name: "Dinanath", age: 35, rank: 5, country: "India"}

// example:
let Students2 = new Student('Dinanath', 35, 5, 'India');
console.log('Students2', Students2); // Students2 Student {name: "Dinanath", age: 35, rank: 5, country: "India"}


/*
  * create a function to check if two objects are equal
 */
function isObjectEqual(obj1, obj2) {
  // your code goes here
}

console.log('isEqual', isObjectEqual(Students1, Students2)); // true

/*
  * create a function to check if two objects are same
 */
function isObjectPointSame(obj1, obj2) {
  // your code goes here
}

// Example:
let isSame1 = isObjectPointSame(Students1, Students2);
console.log('isSame1', isSame1); // false

let Students3 = Students2;
let isSame2 = isObjectPointSame(Students2, Students3); // true
console.log('isSame2', isSame2); // true
