// Function to validate the login form
function validateLoginForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if username or password fields are empty
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return false; // Prevent form submission
    }

    // Additional validation rules can be added here

    return true; // Allow form submission
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            if (!validateLoginForm()) {
                event.preventDefault(); // Stop form from submitting if validation fails
            } else {
                // Display a message when the form is successfully submitted
                event.preventDefault(); // Prevent actual form submission for demo purposes
                alert('Form submitted successfully!');
                // Reload the page after the alert is acknowledged
                window.location.reload();
            }
        });
    }
});
