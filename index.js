//     JS EXERCISES

// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
// 22) Create an object with properties such name, surname, email
// 23) Delete the email property from the previously created object
// 24) Create an array with 10 strings in it
// 25) Print in the console every string from the previous array
// 26) Create an array with 100 random numbers in it
// 27) Write a function to get the maximum and minimum values from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays as parameters and returns the longest one
// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

let x = "John";
let y = "Doe";
console.log(`"${x} <> ${y}"`);
let myDetails = {
  name: "Sarah",
  surname: "Dennis",
  email: "sarahayanwale@gmail.com",
};
delete myDetails.email;
//console.log(myDetails);
fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grape",
  "Avocado",
  "Cashew",
  "Guava",
  "Mandrake",
  "Pineapple",
];
for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i]);
}

var randomNumberArray = [];
arrayLength = 100;
for (let i = 0; i < arrayLength; i++) {
  randomNumberArray.push(Math.round(Math.random() * arrayLength));
}
//console.log(randomNumberArray);

let findMaxMinNumbers = function () {
  console.log(Math.max(...randomNumberArray));
  console.log(Math.min(...randomNumberArray));
};
//findMaxMinNumbers();
let arrayOfArrays = [];
for (let i = 0; i < 4; i++) {
  let currentArray = [];
  for (let j = 0; j < 10; j++)
    currentArray.push(Math.floor(Math.random() * 10));
  arrayOfArrays.push(currentArray);
}
//console.log(arrayOfArrays);

let largestNumber = function (arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
};
//console.log(largestNumber([1, 3, 5, 6, 7, 8, 8], [0, 1, 2, 4]));

// 31) Get the element with an id of "container" from the page
// 32) Get every <td> element from the page
// 33) Use a loop for printing the text inside of every <td> element in the page
// 34) Write a function to change the heading of the page
// 35) Write a function to add an extra row to the table
// 36) Write a function to add a class of "test" to each row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a unordered list
// 40) Write a function to empty a list

let containerNode = document.getElementById("container");
let tdNode = document.getElementsByTagName("td");
for (let i = 0; i < tdNode.length; i++) {
  text = tdNode[i].innerText;
  console.log(text);
}

function headingChange() {
  let headerNode = document.querySelector("#head");
  headerNode.innerText = "Amazing Fruitiesssssssss";
}
