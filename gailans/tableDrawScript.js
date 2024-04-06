const generateColumnButton = document.getElementById("column-button");
const columnText = document.getElementById("column");
const generateRowButton = document.getElementById("row-button");
const rowText = document.getElementById("row");
const generateButton = document.getElementById("generate-button");
const overlay = document.getElementById("overlay");
const moveDisplay = document.getElementById("moves-display");
let table;
let maxCol;
let maxRow;

if (window.location.href.includes("women")) {
    table = womenTable;
    maxCol = 10;
    maxRow = 15;
} else {
    table = menTable;
    maxCol = 33;
    maxRow = 23;
}

function displayMove() {
  const col = parseInt(columnText.innerHTML); // Parse as integer
  const row = parseInt(rowText.innerHTML); // Parse as integer
  const moves = table[row][col - 1]; // Get moves from table with corrected column and row interpretation
  const imageUrl = menImages[row][col - 1]; // Get image URL from menImages with corrected column and row interpretation
  moveDisplay.innerHTML = moves; // Display moves
  overlay.style.display = "block"; // Display overlay
  moveDisplay.style.display = "block"; // Display move display

  // Create image element and set its src attribute to display the image
  const imgElement = document.createElement("img");
  imgElement.src = "result/" + imageUrl; // Assuming images are located in "results" folder
  moveDisplay.appendChild(imgElement); // Append image element to move display

  // Create button element with icon to rotate the image
  const rotateButton = document.createElement("button");
  rotateButton.innerHTML = "<img src='rotate.png' width='35' height='35' alt='Rotate Icon'>";
  moveDisplay.appendChild(rotateButton); // Append button element to move display

  // Apply CSS to center the image and the rotate button
// Apply CSS to center the image and the rotate button
imgElement.style.display = "block";
imgElement.style.margin = "auto";
imgElement.style.marginTop = "0px"; // Adjust as needed for spacing
imgElement.style.maxWidth = "50vw"; // Set maximum width to 80% of viewport width
imgElement.style.maxHeight = "50vh"; // Set maximum height to 80% of viewport height

rotateButton.style.display = "block";
rotateButton.style.margin = "auto";
rotateButton.style.marginTop = "10px"; // Adjust as needed for spacing
rotateButton.style.border = "none"; // Remove button border
rotateButton.style.background = "transparent"; // Set background to transparent
rotateButton.style.width = "20%"; // Set width to 20% of parent element's width
rotateButton.style.height = "auto"; // Set height to auto to maintain aspect 

  rotateButton.style.display = "block";
  rotateButton.style.margin = "auto";
  rotateButton.style.marginTop = "10px"; // Adjust as needed for spacing
  rotateButton.style.border = "none"; // Remove button border
  rotateButton.style.background = "transparent";

  rotateButton.addEventListener("mouseenter", () => {
    rotateButton.style.opacity = "0.5"; // Reduce opacity on hover
});

rotateButton.addEventListener("mouseleave", () => {
    rotateButton.style.opacity = "1"; // Restore opacity on mouse leave
});

    // Adjust overlay position
    overlay.style.top = "50%";
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%, -50%)";

    // Adjust move display position
    moveDisplay.style.top = "50%";
    moveDisplay.style.left = "50%";
    moveDisplay.style.transform = "translate(-50%, -50%)";

  // Add event listener to rotate the image when the button is clicked
  rotateButton.addEventListener("click", () => {
      // Get the current rotation angle or default to 0 if none is set
      let currentRotation = parseInt(imgElement.dataset.rotation) || 0;
      // Rotate the image by 180 degrees
      imgElement.style.transform = `rotate(${currentRotation + 180}deg)`;
      // Update the rotation data attribute
      imgElement.dataset.rotation = currentRotation + 180;
  });
}

function hideOverlay() {
    overlay.style.display = "none";
    moveDisplay.style.display = "none";
    columnText.style.display = "none";
    rowText.style.display = "none";
    columnText.innerHTML = "";
    rowText.innerHTML = "";
  }
  
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

function setNumber(element, max) {
    let drawNumber = generateRandomNumber(max);
    element.innerHTML = drawNumber;
    element.style.display = "block";
  }

generateColumnButton.addEventListener("click", () => {setNumber(columnText, maxCol)})
generateRowButton.addEventListener("click", () => {setNumber(rowText, maxRow)})
generateButton.addEventListener("click", () => { if (columnText.innerHTML != "" && rowText.innerHTML != "") {displayMove()}});
overlay.addEventListener("click", hideOverlay);

// NoÅ†emt bezmaksas saita baneri
// Create a MutationObserver to observe changes to the DOM
var observer = new MutationObserver(function(mutations) {
    // Loop through all mutations
    mutations.forEach(function(mutation) {
        // Loop through all added nodes
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            // Check if the added node is an 'a' element
            if (mutation.addedNodes[i].nodeName === 'A') {
                // Remove the 'a' element
                mutation.addedNodes[i].remove();
            }
        }
    });
});
// Configure the observer to observe changes to child nodes
var config = { childList: true, subtree: true };
// Start observing changes to the document body
observer.observe(document.body, config);