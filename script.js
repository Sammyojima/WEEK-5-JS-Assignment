// -------------------------------
// Part 1: Variables & Conditionals
// -------------------------------

function askName() {
  let name = prompt("What is your name?");
  
  if (name) {
    document.getElementById("greeting").textContent = `Hello, ${name}! 👋`;
  } else {
    document.getElementById("greeting").textContent = "You didn't enter a name 😅";
  }
}

// -------------------------------
// Part 2: Functions
// -------------------------------

// Function to calculate total of two numbers
function calculateTotal(a, b) {
  return a + b;
}

function showTotal() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let total = calculateTotal(num1, num2);

  document.getElementById("totalResult").textContent = `Total = ${total}`;
}

// Function to format a string
function formatString(str) {
  return str.toUpperCase();
}
console.log(formatString("hello world")); // example output in console

// -------------------------------
// Part 3: Loops
// -------------------------------

// Example 1: Countdown using for loop
function countdown() {
  let result = "";
  for (let i = 9; i >= 1; i--) {
    result += i + " ";
  }
  result += "🚀 Lift off!";
  document.getElementById("countdownResult").textContent = result;
}

// Example 2: Iterating through an array
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// -------------------------------
// Part 4: DOM Manipulation
// -------------------------------

// Example 1: Toggle background color
function toggleColor() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#f9f9f9" : "lightyellow";
}

// Example 2: Add items dynamically
function addItem() {
  let ul = document.getElementById("itemList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(newItem);
}

// Example 3: Event listener demo
document.body.addEventListener("dblclick", () => {
  alert("You double-clicked the page! 🎉");
});
