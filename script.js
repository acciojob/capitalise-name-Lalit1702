//your JS code here. If required.
const inputField = document.getElementById("fname");

// Add an event listener for the blur event
inputField.addEventListener("blur", function() {
    // Convert the content to uppercase
    inputField.value = inputField.value.toUpperCase();
});