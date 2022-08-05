const form = document.getElementsByTagName('form')[0];

const email = document.getElementById("mail");
const emailError = document.querySelector('#mail + span.error');

const country = document.getElementById('country');

const zipCode = document.getElementById('zip-code');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password + span.error')





email.addEventListener("input", (event)=>{
    if (email.validity.valid){
        emailError.textContent = '';
        emailError.className = 'error';
    }
    else{
        showError();
    }
})

country.addEventListener('input', (event)=>{
    if(country.validity.valid){
        countryError.textContent = ''
        countryError.className= 'error'
    }else{
        showCountryError();
    }
})

zipCode.addEventListener('input',(event)=>{
    if(zipCode.validity.valid){
        zipCode.textContent = ''
        zipCodeError.className = 'error'
    }else{
        console.log(zipCode)
    }
})

password.addEventListener("input", (event)=>{
    if(password.validity.valid){
        passwordError.textContent = ''
        passwordError.className='error'
    }else{
        showPasswordError();
    }
})

confirmPassword.addEventListener('input', (event)=>{
    if(confirmPassword == password){
        confirmPasswordError.textContent = ''
        confirmPasswordError.className = 'error'
    }else{
        showPasswordError();
    }
})

const showError = ()=>{
    if (email.validity.valueMissing){
        emailError.textContent = 'You need to enter an e-mail address.';
    }
    else if(email.validity.typeMisMatch){
        emailError.textContent = 'Entered value needs to be an e-mail address.';

    }
    else if(email.validity.tooShort){
        emailError.textContent = `Email should be at least ${email.minLength}
        characters; you entered ${ email.value.length }.`;
    }
    emailError.className = 'error active'
}



const showPasswordError = ()=>{
    if (password.validity.valueMissing){
        passwordError.textContent = 'You need to enter a password.';
    }
    else if(password.validity.typeMisMatch){
        passwordError.textContent = 'Entered value needs to be a password.';

    }
    else if(password.validity.tooShort){
        passwordError.textContent = `Email should be at least ${password.minLength}
        characters; you entered ${ email.value.length }.`;
    }
    passwordError.className = 'error active'
}

form.addEventListener('submit', (event)=>{
    if (!email.validity.valid){
        showError();
        event.preventDefault();
    }
    else if (!password.validity.valid){
        showPasswordError();
        event.preventDefault();
    }
    else if (!confirmPassword.validity.valid){
        showPasswordError();
        event.preventDefault();
    }
})





