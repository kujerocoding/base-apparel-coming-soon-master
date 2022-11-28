const formEmail = document.querySelector('.form--email');
const inputEmail = document.querySelector('.input--email');
const messageEmpty = document.querySelector('.message__email--empty');
const messageError = document.querySelector('.message__email--error');
const messageIconError = document.querySelector('.icon__error');

formEmail.addEventListener('submit', e => {
    if (!inputEmail.value) {
        e.preventDefault();
        inputEmail.classList.add('input--email--error');
        messageEmpty.textContent = "Please input an email";
        messageIconError.style.visibility = "visible";
    }
    else {
        messageEmpty.textContent="";
    }
})

inputEmail.addEventListener('input', () => {
    if (inputEmail.value) {
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value);
            if (regexMatch) {
                messageError.textContent="";
            } 
            else {
                messageError.textContent="Please provide valid email";
                messageEmpty.textContent="";
                inputEmail.classList.add('input--email--error');
                messageIconError.style.visibility = "visible";
            }
    }
    else 
        {
            messageError.textContent="";
            messageEmpty.textContent = "Please input an email";
        }
    }
)