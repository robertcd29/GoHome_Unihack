document.addEventListener("DOMContentLoaded", () => {
    const transactionTypeSelect = document.getElementById("transactionType");
    const rentPriceSection = document.getElementById("rentPriceSection");
    const salePriceSection = document.getElementById("salePriceSection");

    // Show the appropriate price input based on transaction type
    transactionTypeSelect.addEventListener("change", (event) => {
        const transactionType = event.target.value;
        
        if (transactionType === "rent") {
            rentPriceSection.style.display = "block";
            salePriceSection.style.display = "none";
        } else if (transactionType === "sale") {
            salePriceSection.style.display = "block";
            rentPriceSection.style.display = "none";
        }
    });

    // Form submission handler
    document.getElementById("propertyForm").addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect form data
        const transactionType = transactionTypeSelect.value;
        const rooms = document.getElementById("rooms").value;
        const radius = document.getElementById("radius").value;
        const rentPrice = document.getElementById("rentPrice").value;
        const salePrice = document.getElementById("salePrice").value;

        const propertyData = {
            transactionType,
            rooms,
            radius,
            price: transactionType === "rent" ? rentPrice : salePrice,
        };

        // Output form data for testing purposes
        console.log("Property Data:", propertyData);

        alert("Form submitted successfully!");
        // Further processing (e.g., sending to a database) can be done here
    });
});
