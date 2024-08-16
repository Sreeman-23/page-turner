// Select DOM elements
var overlay = document.querySelector(".six");
var popup = document.querySelector(".seven");
var showPopupButton = document.getElementById("five");
var cancelButton = document.getElementById("cancel");
var addButton = document.getElementById("add");
var bookTitleInput = document.getElementById("book-title");
var bookAuthorInput = document.getElementById("book-author");
var bookDescriptionInput = document.getElementById("book-description");
var bookContainer = document.querySelector(".two");

// Show the popup and overlay when the "+" button is clicked
showPopupButton.addEventListener("click", function() {
    overlay.style.display = "block";
    popup.style.display = "block";
});

// Hide the popup and overlay when the "CANCEL" button is clicked
cancelButton.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.style.display = "none";
    popup.style.display = "none";
});

// Add a new book to the list when the "ADD" button is clicked
addButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Create a new book entry
    var bookDiv = document.createElement("div");
    bookDiv.className = "three"; // Using className instead of setAttribute

    bookDiv.innerHTML = `
        <h2>${bookTitleInput.value}</h2>
        <h4>By: ${bookAuthorInput.value}</h4>
        <p>${bookDescriptionInput.value}</p>
        <button class="ten" onclick="deletebook(event)">Delete</button>
    `;

    // Append the new book entry to the container
    bookContainer.appendChild(bookDiv);

    // Clear input fields
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    bookDescriptionInput.value = '';

    // Hide the popup and overlay
    overlay.style.display = "none";
    popup.style.display = "none";
});

// Function to delete a book entry
function deletebook(event) {
    event.target.parentElement.remove();
}
