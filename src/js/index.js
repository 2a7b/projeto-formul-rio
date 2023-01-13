
const form = document.querySelector('form')
const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (event)=> {
    event.preventDefault()

    checkInputs()
})

function checkInputs(){
    const usernameValue = inputUsername.value.trim();
    const emailValue = inputEmail.value.trim();
    const passwordValue = inputPassword.value.trim();
    const confirmpasswordValue = inputConfirmPassword.value.trim();


    if (usernameValue === ''){
     errorValidation(inputUsername, 'Fill up this camp with your username')

    }else{
      successValidation(inputUsername)
    }

    if(emailValue === ''){
        errorValidation(inputEmail, 'Fill up this camp with your email')
    }else if(emailValue.length < 6 ){
        errorValidation(inputEmail, 'Your email should have more characters. Example: abc@gmail.com')
    }
    else{
        successValidation(inputEmail)
    }
    if(passwordValue === ''){
        errorValidation(inputPassword, 'Fill up with your password ')
    }else if(passwordValue.length < 8){
        errorValidation(inputPassword, 'Your password should have more than eight characters')
    }else{
        successValidation(inputPassword)
    }

    if(confirmpasswordValue === ''){
        errorValidation(inputConfirmPassword, 'Fill up this camp')
    }else if(passwordValue !== confirmpasswordValue){
        errorValidation(inputConfirmPassword, 'Password aren`t the same')
    }else{
        successValidation(inputConfirmPassword)
    }
}

function errorValidation(input, message){
    const formInformations = input.parentElement;
    const small = formInformations.querySelector('small');

    small.innerHTML = message;

    formInformations.classList = 'form-informations error';
}
function successValidation(input){
    const formInformations = input.parentElement;

    formInformations.classList = 'form-informations success';
}




