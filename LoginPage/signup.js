$(document).ready(function() {
  $('#signupLink').click(function(e) {
    e.preventDefault();

    const username = $('.input_text:eq(0)').val();
    const email = $('.input_text:eq(1)').val();
    const password = $('.input_text:eq(2)').val();

    const storedData = localStorage.getItem('signupData');
    const signupData = storedData ? JSON.parse(storedData) : [];

    // Check if the email is already used
    const isEmailUsed = signupData.some(user => user.email === email);
    if (isEmailUsed) {
      alert('Email is already used. Please use a different email.');
      return;
    }

    // If email is not used, add the new user
    const userData = { username, email, password };
    signupData.push(userData);
    localStorage.setItem('signupData', JSON.stringify(signupData));

    window.location.href = 'display_data.html';
  });
});
