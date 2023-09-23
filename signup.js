// Signup Page
const form = document.getElementById("signupForm");
const error = document.getElementById("errorMessage");

function generateAccessToken() {
    let characters = '0123456789abcde';
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

// Redirect to profile page if a logged-in user tries to navigate to the signup page
const userJSON = localStorage.getItem('user');
if (userJSON && window.location.href.includes('signup.html')) {
    window.location.href = 'profile.html';
}else{
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    if (password === confirmPassword) {
        const accessToken = generateAccessToken();
        const user = { username, email, password, accessToken };
        localStorage.setItem('user', JSON.stringify(user));
        error.textContent = 'Signup successful. Redirecting...';
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 2000);
    } else {
        error.textContent = 'Please provide correct password.';
    }
});

}



