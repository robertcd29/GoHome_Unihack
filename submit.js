// Function to handle "Submit All" button click
document.getElementById("submitAllButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default submission behavior

    // Collect data from the first form (name and surname)
    const nameValue = document.getElementById("name").value;
    const surnameValue = document.getElementById("surname").value;

    // Collect data from the map address form
    const location1Value = document.getElementById("location1").value;
    const freq1Value = document.getElementById("freq1").value;
    const location2Value = document.getElementById("location2").value;
    const freq2Value = document.getElementById("freq2").value;
    const location3Value = document.getElementById("location3").value;
    const freq3Value = document.getElementById("freq3").value;

    // Collect data from the contact info form
   const phoneNumber = document.getElementById("pnumber").value;
   const email = document.getElementById("email").value;

     //Collect data from other inputs (radius, rent/buy options)
    const minArea = document.querySelector("input[name='minarea']").value;
    const maxArea = document.querySelector("input[name='maxarea']").value;
    const rentChecked = document.querySelector("input[name='rent']").checked;
    const buyChecked = document.querySelector("input[name='buy']").checked;

    // Collect data from optional price range forms
   const minPriceRent = document.getElementById("minpricerent").value;
   const maxPriceRent = document.getElementById("maxpricerent").value;
    const minPriceBuy = document.getElementById("minpricebuy").value;
    const maxPriceBuy = document.getElementById("maxpricebuy").value;

    // Combine and log all collected data
    console.log("Collected Data:");
    console.log("Name:", nameValue);
    console.log("Surname:", surnameValue);
    console.log("Location 1:", location1Value, "Frequency 1:", freq1Value);
    console.log("Location 2:", location2Value, "Frequency 2:", freq2Value);
    console.log("Location 3:", location3Value, "Frequency 3:", freq3Value);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Min Area:", minArea, "Max Area:", maxArea);
    console.log("Rent Checked:", rentChecked, "Buy Checked:", buyChecked);
    console.log("Min Price Rent:", minPriceRent, "Max Price Rent:", maxPriceRent);
     console.log("Min Price Buy:", minPriceBuy, "Max Price Buy:", maxPriceBuy);

    // Optional: Send this data to a server using fetch or XMLHttpRequest

    document.getElementById("namesurname").reset();
        document.getElementById("adresa").reset();
        document.getElementById("contact").reset();
        document.getElementById("rentprice").reset();
        document.getElementById("buyprice").reset();
        document.getElementById("radRentBuy").reset();

        // Uncheck the checkboxes
        document.getElementById("rent").checked = false;
        document.getElementById("buy").checked = false;

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
        }, 1000);

});
