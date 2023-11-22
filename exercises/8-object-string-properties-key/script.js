// Show only string properties of an object
function showStringProperties(curObj) {
  // your code goes here
}

// usage example:
const Person = {
  name: 'Dinanath',
  age: 40,
  height: 5.6,
  country: 'India',
  designation: 'UI Developer'
}

showStringProperties(Person); // name, country, designation
console.log('----------');

const Technology = {
  name: 'JavaScipt',
  version: 6,
  purpose: 'Scripting language for Web',
  developer: 'Netscape Corporation'
}

showStringProperties(Technology); // name, purpose, developer
console.log('----------');
