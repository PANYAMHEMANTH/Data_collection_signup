$(document).ready(function() {
    $('#loginLink').click(function(e) {
        e.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        const storedData = localStorage.getItem('signupData');
        const signupData = storedData ? JSON.parse(storedData) : [];

        const user = signupData.find(user => user.email === username && user.password === password);

        if (user) {
            // Redirect to student.html on successful login
            window.location.href = 'student.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
