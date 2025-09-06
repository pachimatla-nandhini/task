// Task 1: Change button color when clicked
function changeColor() {
  const button = document.getElementById("colorButton");
  button.style.backgroundColor = "green";
  button.style.color = "white";
}

// Task 2: Time-based greeting alert
function showGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);
}

// Task 3: Add two numbers and display result
function calculateSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("result");

  if (!isNaN(num1) && !isNaN(num2)) {
    resultElement.textContent = "Sum: " + (num1 + num2);
  } else {
    resultElement.textContent = "Please enter valid numbers.";
  }
}