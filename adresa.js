// Initialize the Leaflet map
const map = L.map('map').setView([38.89511, -77.03637], 13); // Default view centered on Washington, DC

// Add a tile layer to the map (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Event listener for form submission
document.getElementById("addressForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const address = document.getElementById("address").value;
    const resultDisplay = document.getElementById("result");

    // Nominatim Geocoding API URL
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    try {
        // Fetch the coordinates from Nominatim API
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.length > 0) {
            const latitude = data[0].lat;
            const longitude = data[0].lon;

            // Display the coordinates
            resultDisplay.textContent = `Coordinates: Latitude: ${latitude}, Longitude: ${longitude}`;

            // Set map view and add a marker at the coordinates
            map.setView([latitude, longitude], 15);
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup(`<b>${address}</b><br>Lat: ${latitude}, Lng: ${longitude}`).openPopup();
        } else {
            resultDisplay.textContent = "No coordinates found for that address.";
        }
    } catch (error) {
        resultDisplay.textContent = "Error fetching coordinates.";
        console.error("Geocoding error:", error);
    }
});
