//API_KEY: AIzaSyBQZzX0qPJ8ZWTpcP19P0ry9gbREFXjTMg
export function getLocations(city) {
    const locations = {
        "Malmö": [
            { name: "Möllan", lat: 55.59392547607422, lng: 13.00897216796875 },
            { name: "Centralstationen", lat: 55.60882406629966, lng: 13.000008492493917 },
            { name: "Hyllie", lat: 55.563364903252214, lng: 12.975690319901211 }
        ],
        "Göteborg": [
            { name: "Liseberg", lat: 57.695885, lng: 11.990064 },
            { name: "Nordstan", lat: 57.708870, lng: 11.974560 },
            { name: "Slottsskogen", lat: 57.686889, lng: 11.948099 }
        ],
        "Stockholm": [
            { name: "Gamla Stan", lat: 59.325117, lng: 18.071093 },
            { name: "Kungsträdgården", lat: 59.331018, lng: 18.071091 },
            { name: "Södermalm", lat: 59.314775, lng: 18.072716 }
        ]
    };

    return locations[city] || [];
}

// Function to pick a random location and update the map
function randomLocation(city, mapId) {
    const locations = getLocations(city);
    if (locations.length === 0) return; // Avoid errors if no locations exist

    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    const mapElement = document.getElementById(mapId);
    if (mapElement) {
        mapElement.setAttribute("center", `${randomLocation.lat},${randomLocation.lng}`);
        mapElement.innerHTML = `
            <gmp-advanced-marker position="${randomLocation.lat},${randomLocation.lng}" title="${randomLocation.name}"></gmp-advanced-marker>
        `;
    }
}

// Run for Malmö map when the page loads
document.addEventListener("DOMContentLoaded", function () {
    randomLocation("Malmö", "malmo-map");
    randomLocation("Göteborg", "goteborg-map");
    randomLocation("Stockholm", "stockholm-map");
});




/*const locationsMalmo = [
    { name: "Möllan", lat: 55.59392547607422, lng: 13.00897216796875},
    { name: "Centralstationen",lat: 55.60882406629966, lng: 13.000008492493917 },
    { name: "Hyllie", lat: 55.563364903252214, lng: 12.975690319901211}
]

randomLocation(getLocations("Malmö"));



export function getLocations(city){
    const locationsMalmo = [
        { name: "Möllan", lat: 55.59392547607422, lng: 13.00897216796875},
        { name: "Centralstationen",lat: 55.60882406629966, lng: 13.000008492493917 },
        { name: "Hyllie", lat: 55.563364903252214, lng: 12.975690319901211}
    ]

    if (city== "Malmö"){
        return locationsMalmo
    }

}


function randomLocation(locations){
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const mapElement = document.getElementById("random-map");
    if (mapElement) {
        mapElement.setAttribute("center", `${randomLocation.lat},${randomLocation.lng}`);
        mapElement.innerHTML = `
            <gmp-advanced-marker position="${randomLocation.lat},${randomLocation.lng}" title="${randomLocation.name}"></gmp-advanced-marker>
        `;
}
}

/*function updateMap(mapId) {
    // Define an array of locations with their coordinates
    const locations = [
        { name: "Malmö", lat: 55.59392547607422, lng: 13.00897216796875 },
        { name: "Göteborg", lat: 57.708870, lng: 11.974560 },
        { name: "Stockholm", lat: 59.329323, lng: 18.068581 }
    ];

    // Select a random location
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];

    // Find the map element
    const mapElement = document.getElementById(mapId);
    if (mapElement) {
        // Update map center
        mapElement.setAttribute("center", `${randomLocation.lat},${randomLocation.lng}`);
        // Update marker
        mapElement.innerHTML = `
            <gmp-advanced-marker position="${randomLocation.lat},${randomLocation.lng}" title="${randomLocation.name}"></gmp-advanced-marker>
        `;
    }

    // Update the location name display
    const locationText = document.getElementById("location-text");
    if (locationText) {
        locationText.textContent = `Visar plats: ${randomLocation.name}`;
    }
}

// Run function on page load for Malmö's map
document.addEventListener("DOMContentLoaded", function () {
    updateMap("malmo-map");
});*/

