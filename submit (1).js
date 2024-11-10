document.getElementById("submitAllButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default submission behavior

    // Collect data from the name and surname form
    const nameValue = document.getElementById("name").value;
    const surnameValue = document.getElementById("surname").value;

    // Collect data from the address form
    const addressValue = document.getElementById("address").value;

    // Collect data from the property form (transaction type, rooms, radius, prices)
    const transactionType = document.getElementById("transactionType").value;
    const roomsValue = document.getElementById("rooms").value;
    const radiusValue = document.getElementById("radius").value;
    const rentPriceValue = document.getElementById("rentPrice").value;
    const salePriceValue = document.getElementById("salePrice").value;

    // Collect data from the photo upload form
    const photoInput = document.getElementById("photoInput").files;

    // Combine and log all collected data
    console.log("Collected Data:");
    console.log("Name:", nameValue);
    console.log("Surname:", surnameValue);
    console.log("Address:", addressValue);
    console.log("Transaction Type:", transactionType);
    console.log("Rooms:", roomsValue);
    console.log("Radius (sqm):", radiusValue);
    console.log("Rent Price:", rentPriceValue);
    console.log("Sale Price:", salePriceValue);
    console.log("Number of Photos Uploaded:", photoInput.length);  // Number of photos uploaded

    // Optional: Send this data to a server using fetch or XMLHttpRequest

    // Reset all forms after submission
    document.getElementById("namesurname").reset();
    document.getElementById("adresa").reset();

    document.getElementById("photoUploadForm").reset();
    document.getElementById("transactionType").reset();

    // Display a success message
    const successMessage = document.createElement("div");
    successMessage.textContent = "Your form has been successfully submitted!";
    successMessage.style.color = "green";
    successMessage.style.fontSize = "18px";
    successMessage.style.marginTop = "20px";
    document.body.appendChild(successMessage);

    // Optional: Hide the message after a few seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});