function onSubmit(event) {
    event.preventDefault();
    alert('Congratulations, you have have been successfully hacked!');
}

document.querySelector('#login-form').addEventListener('submit', onSubmit);
