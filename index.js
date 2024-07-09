// call the DOM elements
document.addEventListener("DOMContentLoaded", function() {
    // declare variables that are going to be used by the DOM
    const myItems = document.getElementById("itemInput");
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearButton");
    const myItemsList = document.getElementById("itemList");

    // this function  is used to insert a new item into the list
    function addItem() {
        // Gets the value from the input field
        const itemText = myItems.value;

        // confirms that the input is not empty
        if (itemText.trim() !== "") {
            // Create a new list 
            const listItem = document.createElement("li");

            // Create a checkbox for the list item
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            // Generate a label for the checkbox
            const label = document.createElement("label");
            label.classList.add("radio-label");
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(itemText));

           // Append the label to the list item
            listItem.appendChild(label);

            // Insert the new list item into the list
            myItemsList.appendChild(listItem);

            // Reset the input field
            myItems.value = "";

            // Add an event listener to the checkbox to mark item as purchased
            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    label.classList.add("purchased");
                } else {
                    label.classList.remove("purchased");
                }
            });
        }
    }

    // Add a click event listener to the add button
    addButton.addEventListener("click", addItem);

    // Add a keypress event listener to the input field to add item on Enter key press
    myItems.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    // Add a click event listener to the clear button
    clearButton.addEventListener("click", function() {
        // Clear all items from the list
        myItemsList.innerHTML = "";
    });
});
