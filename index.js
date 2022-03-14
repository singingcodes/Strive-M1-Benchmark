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
//console.log(`"${x} <> ${y}"`);
let myDetails = {
  name: "Sarah",
  surname: "Dennis",
  email: "sarahayanwale@gmail.com",
};
delete myDetails.email;
//console.log(myDetails);
let fruits = [
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
// Another way
// function maxMinFunc(numbers) {
//   let max = numbers[0];
//   let min = numbers[0];
//   for (let number of numbers) {
//     max = number > max ? number : max;
//     min = number < min ? number : min;
//   }
//   return max, min;
// }
// console.log(maxMinFunc(randomNumberArray));
let arrayOfArrays = [];
for (let i = 0; i < 10; i++) {
  let currentArray = [];
  for (let j = 0; j < 10; j++) {
    currentArray.push(Math.floor(Math.random() * 10));
  }
  arrayOfArrays.push(currentArray);
}
//console.log(arrayOfArrays);

let largestNumber = function (arr1, arr2) {
  // return arr1.length > arr2.length ? arr1 : arr2
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
};
//console.log(largestNumber([1, 3, 5, 6, 7, 8, 8], [0, 1, 2, 4]));
function higherSum(array1, array2) {
  let firstSum = 0;
  for (let number of array1) {
    firstSum += number;
  }
  let secondSum = 0;
  for (let number of array2) {
    secondSum += number;
  }
  return firstSum > secondSum ? firstSum : secondSum;
}
//console.log(higherSum([234, 455], [1, 2, 3]));
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
  headerNode.innerText = "Amazing Fruits";
}

function addRowToTable() {
  let tableBodyNode = document.querySelector("tbody");
  let newRowNode = document.createElement("tr");
  for (let i = 0; i < 5; i++) {
    let td = document.createElement("td");
    td.innerText = i + 1;
    newRowNode.appendChild(td);
  }
  tableBodyNode.appendChild(newRowNode);
}
addRowToTable();

function addTest() {
  let trNode = document.querySelectorAll("tr");
  trNode.forEach((tr) => {
    tr.classList.add("test");
  });
}
addTest();
function addRedBackground() {
  let linkNode = document.querySelectorAll("a");
  linkNode.forEach((a) => {
    // a.style.backgroundColor = "red"
    a.classList.add("changeBg");
  });
}
addRedBackground();

window.onload = function pageLoaded() {
  console.log("Page Loaded");
};
// pageLoaded();
function addItemToList() {
  let ListNode = document.querySelector("ol");
  let newItem = document.createElement("li");
  newItem.innerText = "Sweet";
  ListNode.appendChild(newItem);
}
addItemToList();

function emptyList() {
  let ListNode = document.querySelector("ul");
  ListNode.innerHTML = "";
}
emptyList();

// EXTRA EXERCISES

// 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
function alertUrl() {
  let links = document.querySelector("a");
  for (let i = 0; i < links.length; i++) {
    links[i].onmouseenter = function (e) {
      alert(e.target.href);
    };
  }
}
alertUrl();
// 42) Create a button that will hide every image on the page when clicked
function hideButton() {
  let imgNode = document.querySelectorAll("img");
  imgNode.forEach((img) => {
    img.classList.add("hidden");
  });
}

// 43) Create a button that will hide or show the table on the page when clicked
function toggleTable() {
  let tableNode = document.querySelector("table");
  tableNode.classList.toggle("hidden");
}
// 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
function sumNumbers() {
  const tds = document.querySelectorAll("td");
  let sum = 0;
  tds.forEach((td) => {
    let toNumber = parseInt(td.innerText);
    let isNotNumeric = isNaN(toNumber);
    if (!isNotNumeric) {
      sum += toNumber;
    }
  });
  console.log(sum);
}
sumNumbers();
// 45) Delete the last letter from the heading each time the user clicks on it

const deleteLastChar = function () {
  const h1 = document.querySelector("h1");
  h1.onclick = function (e) {
    h1.innerText = h1.innerText.substring(0, h1.innerText.length - 1);
  };
};
deleteLastChar();
// 46) Change the background color of a <td> if the user clicks on it
function changeTdBg() {
  let tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    td.onclick = function (e) {
      e.target.classList.toggle("changeBg");
    };
  });
}
changeTdBg();
// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
function deleteTable() {
  let randomTd = document.querySelectorAll("td");
  const random = Math.floor(Math.random() * randomTd.length);
  randomTd[random].remove();
}
// 48) Add automatically a pink border to a cell when the mouse hovers it
function addPinkBorder() {
  let cells = document.querySelectorAll("td");
  cells.forEach((td) => {
    td.onmouseenter = function (e) {
      e.target.classList.add("border-pink");
    };
    td.onmouseleave = function (e) {
      e.target.classList.remove("border-pink");
    };
  });
}
addPinkBorder();
// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
function createTable() {
  let newTable = document.createElement("table");
  for (let i = 0; i < 4; i++) {
    let tableRow = document.createElement("tr");
    for (let m = 0; m < 3; m++) {
      let tableColumn = document.createElement("td");
      tableColumn.innerText = "cell";
      tableRow.appendChild(tableColumn);
    }
    newTable.appendChild(tableRow);
  }
  document.body.appendChild(newTable);
}
// 50) Write a function to remove the last table from the page
function removeTable() {
  document.querySelector("table:last-of-type").remove();
}
