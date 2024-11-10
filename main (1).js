import { db } from './firestore.js'; // Assuming db is correctly imported from firestore.js
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

document.getElementById("submitAllButton").addEventListener("click", async function(event) {
    event.preventDefault();  // Prevents the form from submitting the default way

    // Collect the form values
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const address = document.getElementById("address").value;
    const transactionType = document.getElementById("transactionType").value;
    const rooms = document.getElementById("rooms").value;
    const radius = document.getElementById("radius").value;
    const rentPrice = document.getElementById("rentPrice").value;
    const salePrice = document.getElementById("salePrice").value;

    // If there are additional fields related to photos, you can capture them as well
    const photos = document.getElementById("photoInput").files;

    // Save to Firestore
    try {
        // Use modular functions to add the document
        await addDoc(collection(db, "listings"), {
            name: name,
            surname: surname,
            address: address,
            transactionType: transactionType,
            rooms: rooms,
            radius: radius,
            rentPrice: rentPrice,
            salePrice: salePrice,
            photos: photos ? Array.from(photos).map(photo => photo.name) : [],  // Save photo filenames or URLs (depends on your storage strategy)
        });

        // Clear the form
        document.getElementById("namesurname").reset();
        document.getElementById("adresa").reset();
        document.getElementById("propertyForm").reset();
        document.getElementById("photoUploadForm").reset();

        // Show success message
        const successMessage = document.createElement("div");
        successMessage.textContent = "Your form has been successfully submitted!";
        successMessage.style.color = "green";
        successMessage.style.fontSize = "18px";
        successMessage.style.marginTop = "20px";
        document.body.appendChild(successMessage);

        setTimeout(() => {
            successMessage.remove();
        }, 5000);  // Message disappears after 5 seconds

    } catch (error) {
        console.error("Error submitting form: ", error);
    }
});
