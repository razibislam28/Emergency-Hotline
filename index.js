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
