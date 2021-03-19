const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username');
  const passwordEl = document.querySelector('#password');

  console.log(usernameEl.value, passwordEl.value);
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    document.location.replace('/index');
  } else {
    alert('Failed to sign up');
  }
};

document.querySelector('#signup-form').button.addEventListener('click', signupFormHandler);