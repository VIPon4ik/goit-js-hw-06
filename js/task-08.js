const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = formElem.elements.email;
    const password = formElem.elements.password;

    if (email.value === '' || password.value === '') {
        alert('Всі поля мають бути заповнені');
        return;
    }

    const user = { email: email.value, password: password.value };
    console.log(user);

    formElem.reset();
})
