// Check if the Geolocation API is available in the browser
if ("geolocation" in navigator) {
  // Request location permission
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // If the user grants permission, this function will be called with the position data
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Now you can use the latitude and longitude for your application
      console.log("Latitude: " + latitude);
      console.log("Longitude: " + longitude);
    },
    function (error) {
      // If the user denies permission or an error occurs, this function will be called
      console.error("Error getting location: " + error.message);
    }
  );
} else {
  console.log("Geolocation is not available in this browser.");
}
