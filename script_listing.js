function calculate() {
    // Get the numbers from the <p> tags
    var num1 = parseFloat(document.getElementById('num1').innerText);
    var num2 = parseFloat(document.getElementById('num2').innerText);

    // Variable to hold the result
    var result;
    
    // Perform the division calculation
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero!";
    }
    
    // Display the result in the result div
    document.getElementById('result').innerText = "Result: " + result;
}

// Call the calculate function on page load to display the initial result
calculate();

// Optionally, set up a mutation observer to detect when the <p> elements are changed
const observer = new MutationObserver(calculate);

// Configure the observer to watch for changes in the <span> elements
observer.observe(document.getElementById('num1'), { childList: true });
observer.observe(document.getElementById('num2'), { childList: true });