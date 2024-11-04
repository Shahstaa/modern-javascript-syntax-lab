//Exercise 1:
// Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array.
const doubledNums = nums.map(num => num * 2);
console.log(doubledNums);

//Exercise 2:
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping, secondTopping);
//Exercise 4: 
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings);

//Exercise 3:
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
const car = { make: 'Audi', model: 'q5' };
const { make, model } = car;
console.log(make, model);
//Exercise 5:
const myCar = { ...car, model: 'q7' };
console.log(car);
console.log(myCar);

//Exercise 6:
const userProfile = {};
const propertyName = 'username'; 
userProfile[propertyName] = 'shahsta_sab'; 
console.log(userProfile);

//Exercise 8:
function describeCat(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  describeCat(); 


//Exercise9:
let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}
// Your code here
console.log(pizza === 'tasty' ? 'yum' : 'yuck');

//Exercise 10:
//a
const localLangConfig = null;
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);
//b
const userSavedTheme = null;
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

//Exercise 11:
const adventurer = { 
    name: 'Alice' };
let cat = adventurer.cat?.age; // Will not throw an error
console.log(cat); // undefined
