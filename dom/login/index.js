const onSubmit = () => {

    const registerForm = document.getElementById('registerForm');

    if(FormData.checkValidity()) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const bio = document.getElementById('bio').value;
    
        console.log(firstName, lastName, email, password, bio);
    } else {
        console.log('Form is invalid');
    }

}