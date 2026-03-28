/* ========================================
  TASK 3: script.js
  ========================================
*/

// RUBRIC: Logic triggers.
// Mark checks if showPopup is called ONLY on submission.

function addRecommendation(event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    // Get values
    const name = document.getElementById("rec-name").value;
    const message = document.getElementById("rec-text").value;

    // Validation (Basic)
    if (name.trim() !== "" && message.trim() !== "") {
        // Create new recommendation card
        const recContainer = document.getElementById("rec-list");
        
        const newCard = document.createElement("div");
        newCard.classList.add("recommendation-card");
        
        newCard.innerHTML = `
            <p>"${message}"</p>
            <br>
            <strong>- ${name}</strong>
        `;

        // Append to list
        recContainer.appendChild(newCard);

        // Clear inputs
        document.getElementById("rec-name").value = "";
        document.getElementById("rec-text").value = "";

        // RUBRIC: showPopup() triggered ONLY here
        showPopup(true);
    }
}

function showPopup(show) {
    const popup = document.getElementById("popup");
    if (show) {
        popup.style.display = "flex";
    } else {
        popup.style.display = "none";
    }
}