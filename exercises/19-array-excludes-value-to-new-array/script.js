/*
  * Create the function `excludes` that receives an array and
  * another array of elements to be excluded from the first array.
 */
function excludes(arrayToExclude, elementsToExcluded) {
 // your code here
}

// Usage example:
const versionArray = [1, 2, 5, 7, 2];
const newVesionArray = (excludes(versionArray, [2]));
console.log('newVesionArray: ', newVesionArray); // [1, 5, 7]



const ageArray = [21, 25, 22, 25, 30, 25, 30];
const newAgeArray = (excludes(ageArray, [25,30]));
console.log('newAgeArray: ', newAgeArray); // [21, 22]
