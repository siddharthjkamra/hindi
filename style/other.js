// Function to load text from a file and set font size
function loadFile(selectedFile) {
  var textContainer = document.getElementById('textContainer');

  // Check if the selectedFile doesn't end with ".txt" and add it if needed
  if (selectedFile && !selectedFile.endsWith(".txt")) {
    selectedFile += ".txt";
  }

  if (selectedFile) {
    // Use AJAX to load the text from the selected file
    var xhr = new XMLHttpRequest();
    xhr.open('GET', selectedFile, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Set the font size and display the loaded text
        textContainer.style.fontSize = '16px'; // You can change the font size here
        textContainer.innerHTML = '<pre class="wrapped-text">' + xhr.responseText + '</pre>';
      }
    };
    xhr.send();
  } else {
    // If no file is selected, clear the content
    textContainer.style.fontSize = '16px'; // Reset font size
    textContainer.textContent = '';
  }
}

// Check if the page was loaded with a file parameter in the URL
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var fileNameParam = urlParams.get('file');

// If a file parameter was provided, load the file
if (fileNameParam) {
  loadFile(fileNameParam);
}

// Event listener for the dropdown menu
document.getElementById('choose').addEventListener('change', function() {
  var selectedFile = this.value;
  loadFile(selectedFile);
});