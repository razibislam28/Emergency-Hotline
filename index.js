let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Get HTML elements by their IDs
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

// Function to update the heart count
function updateHearts() {
  heartCount++;
  heartCountEl.textContent = heartCount;
}

// Add click event to all like buttons
const likeButtons = document.querySelectorAll(".likeBtn");
likeButtons.forEach((button) => {
  button.addEventListener("click", updateHearts);
});
// ----------------------------
// ----------------------------
// COPY BUTTON
// ----------------------------
// ----------------------------
function copyNumber() {
  // Get the card body of this button
  const cardBody = this.closest(".card-body");

  // Get the  name  and the displayed number
  const serviceName = cardBody.querySelector("h2").textContent;
  const number = cardBody.querySelector("p.text-3xl").textContent;

  // Copy number to clipboard
  navigator.clipboard.writeText(number);

  // Alert with service name and number
  alert(`${serviceName} - ${number} copied!`);

  // Update copy count
  copyCount++;
  copyCountEl.textContent = copyCount;
}

// Attach to all copy buttons
document.querySelectorAll(".copyBtn").forEach((btn) => {
  btn.addEventListener("click", copyNumber);
});

// ----------------------------
// ----------------------------
// CALL BUTTON
// ----------------------------
// ----------------------------
function makeCall() {
  // Get the card body of this button
  const cardBody = this.closest(".card-body");

  // Get the name and displayed number
  const serviceName = cardBody.querySelector("h2").textContent;
  const number = cardBody.querySelector("p.text-3xl").textContent;

  // Check if enough coins
  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }

  coinCount -= 20;
  coinCountEl.textContent = coinCount;

  // Show alert with service name and the displayed numbr
  alert(`Calling ${serviceName} (${number})`);

  // Add to call history
  const time = new Date().toLocaleTimeString();
  const li = document.createElement("li");
  li.textContent = `${serviceName} - ${number} at ${time}`;
  historyList.appendChild(li);
}

// Attach to all call buttons
document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", makeCall);
});
