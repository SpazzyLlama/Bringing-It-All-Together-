// Function to handle the form submission and validation
function validateUser(formData) {
    // Concept 1: String Manipulation/Validation
    // Pulling the name value and trimming whitespace
    let fullName = formData.userName.value.trim();
    
    // Concept 2: Decision Logic (If/Else)
    // Pulling the age value and converting to a number
    let age = parseInt(formData.userAge.value);
    
    // Variable to hold the message we will display
    let message = "";

    // Validation: Check if the name is too short
    if (fullName.length < 2) {
        // Error message if name is invalid
        message = "Please enter a valid full name.";
    } 
    // Logic: Check if the user is old enough for a 'Pro' account
    else if (age >= 18) {
        // Success message for adults
        message = "Welcome, " + fullName + "! Your Adult Membership is active.";
    } 
    else {
        // Success message for minors
        message = "Hi " + fullName + "! Your Junior Membership is active.";
    }

    // Requirement: Using innerHTML to show messages to the user
    document.getElementById("displayArea").innerHTML = "<p>" + message + "</p>";

    // Returning false to keep the data on the screen after submit
    return false;
}