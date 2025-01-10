const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // This creates the '×' symbol
        li.appendChild(span);
    }

    inputBox.value = ""; // Clear the input box
    saveData(); // Save the updated list to localStorage
}

// Add an event listener to the list container
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggling 'checked' class on LI elements
        saveData(); // Save changes to localStorage
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Removing the parent LI when the '×' button is clicked
        saveData(); // Save changes to localStorage
    }
}, false);

// Save the current list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Display tasks from localStorage when the page is loaded
function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Show tasks on page load
showTask();
