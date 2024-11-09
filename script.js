// JavaScript to handle form validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
    var emailInput = document.querySelector("input[name='email']").value;
    if (!emailInput) {
        alert("Please enter your email address.");
        event.preventDefault();  // Prevent form submission
    } else {
        alert("Thank you for signing up!");
    }
});
