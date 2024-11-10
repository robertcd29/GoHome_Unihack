// Function to log the values of the "name" and "surname" inputs when the form is submitted
document.getElementById("namesurname").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the values of the "name" and "surname" inputs
    const nameValue = document.getElementById("name").value;
    const surnameValue = document.getElementById("surname").value;
    
    // Log the values to the console
    console.log("Name:", nameValue);
    console.log("Surname:", surnameValue);
});
