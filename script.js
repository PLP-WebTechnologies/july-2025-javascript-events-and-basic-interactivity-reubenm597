//Event Handling
let btn = document.getElementById('secondButton');
let output = document.getElementById('output');

btn.addEventListener('click', function(){

output.textContent = 'Remote work has become a permanent feature of the modern economy. It offers employees flexibility and access to global opportunities while allowing companies to tap into wider talent pools and reduce overhead costs. While it presents challenges like potential isolation, its benefits include increased productivity and improved work life balance. The future of work is flexible, with remote arrangements evolving through technology and a focus on results oriented performance.';
});














//DOM
const button = document.getElementById('firstButton')

button.onclick = function() {
    alert('Button Clicked');
};






//Form Validation
function validateSignUp() {
    // Get input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Validate username (at least 3 characters)
    if (username.length < 3) {
        alert('Username must be at least 3 characters long');
        return false;
    }
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // If all validations pass
    return true;
}
