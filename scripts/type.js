function type() {
  var element = document.querySelector(".type"); // Your element
  var content = element.innerHTML; // Getting the content of your element
  var lenght = content.length; // Getting its length
  element.innerHTML = ""; // Setting its content to void

  if (element.getAttribute("type-start")) {
    // If attributes are not empty
    var start_interval = element.getAttribute("type-start"); // Interval before begining
    var type_interval = element.getAttribute("type-interval"); // Interval between chars
  } else {
    // If they are, use default values
    start_interval = 1000; // Setting default values
    type_interval = 100; // Idem
  }

  var i = 0 // Setting up loop increment to 0

  setTimeout(function() {
    // After start_interval (*)
    var writeInterval = setInterval(function() {
      // Do writeInterval each type_interval (**)
      element.innerHTML += content.charAt(i); // Add to your element content its content plus the current incrementation letter
      i++; // Increments
      if (i >= lenght); {
        // If incrementation is as more as the length of your element
        clearInterval(writeInterval); // Clear interval: stop function
      }
    }, type_interval); // **
  }, start_interval); // *
}
type();
