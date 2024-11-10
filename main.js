import { db } from './firestore.js'; // Assuming db is correctly imported from firestore.js
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

document.getElementById("submitAllButton").addEventListener("click", async function(event) {
    event.preventDefault();  // Prevents the form from submitting the default way

    // Collect the form values
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const location1 = document.getElementById("location1").value;
    const location2 = document.getElementById("location2").value;
    const location3 = document.getElementById("location3").value;
    const freq1 = document.getElementById("freq1").value;
    const freq2 = document.getElementById("freq2").value;
    const freq3 = document.getElementById("freq3").value;
    const pnumber = document.getElementById("pnumber").value;
    const email = document.getElementById("email").value;
    const minarea = document.getElementById("minarea").value;
    const maxarea = document.getElementById("maxarea").value;
    const rent = document.getElementById("rent").checked;
    const buy = document.getElementById("buy").checked;
    const minpricerent = document.getElementById("minpricerent").value;
    const maxpricerent = document.getElementById("maxpricerent").value;
    const minpricebuy = document.getElementById("minpricebuy").value;
    const maxpricebuy = document.getElementById("maxpricebuy").value;

    // Save to Firestore
    try {
        // Use modular functions to add the document
        await addDoc(collection(db, "people"), {
            name: name,
            surname: surname,
            location1: location1,
            location2: location2,
            location3: location3,
            freq1: freq1,
            freq2: freq2,
            freq3: freq3,
            pnumber: pnumber,
            email: email,
            minarea: minarea,
            maxarea: maxarea,
            rent: rent,
            buy: buy,
            minpricerent: minpricerent,
            maxpricerent: maxpricerent,
            minpricebuy: minpricebuy,
            maxpricebuy: maxpricebuy,
        });

        // Clear the form
        document.getElementById("namesurname").reset();
        document.getElementById("adresa").reset();
        document.getElementById("contactForm").reset();
        document.getElementById("priceRangeRent").reset();
        document.getElementById("priceRangeBuy").reset();

        document.getElementById("rent").checked = false;
        document.getElementById("buy").checked = false;

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
