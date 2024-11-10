// Initialize three maps with different IDs
        // Initialize three maps with different IDs
        const map1 = L.map('map1').setView([45.758, 21.23], 13);
        const map2 = L.map('map2').setView([45.758, 21.23], 13);
        const map3 = L.map('map3').setView([45.758, 21.23], 13);

        // Add OpenStreetMap tiles to each map
        const tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        L.tileLayer(tileLayer, { maxZoom: 19 }).addTo(map1);
        L.tileLayer(tileLayer, { maxZoom: 19 }).addTo(map2);
        L.tileLayer(tileLayer, { maxZoom: 19 }).addTo(map3);

        // Function to update input fields with latitude and longitude on map click
        function addClickListener(map, inputId) {
            map.on('click', function(e) {
                const { lat, lng } = e.latlng;
                document.getElementById(inputId).value = `Latitude: ${lat}, Longitude: ${lng}`;
            });
        }

        // Add click listeners to each map 
        addClickListener(map1, 'location1');
        addClickListener(map2, 'location2');
        addClickListener(map3, 'location3');

        // Add an event listener to the submit button to print coordinates of all maps in the console
        
        document.getElementById('submitAllButton').addEventListener('click', function(event) {  
            event.preventDefault(); // Prevent form submission

            // Get the values of the location inputs for each map
            const location1Value = document.getElementById('location1').value;
            const location2Value = document.getElementById('location2').value;
            const location3Value = document.getElementById('location3').value;

            // Log the coordinates for each map to the console
            console.log("Submitted Coordinates:");
            console.log("Map1:", location1Value);
            console.log("Map2:", location2Value);
            console.log("Map3:", location3Value);
        });


        
