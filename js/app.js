//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const submit = document.getElementById('enviar');

//event listeners
eventListeners();

function eventListeners(e)
{
    document.addEventListener('DOMContentLoaded', startApp);
    email.addEventListener('blur', validateField);
    asunto.addEventListener('blur', validateField);
    mensaje.addEventListener('blur', validateField);
    submit.addEventListener('click', pressSubmit);
}


//functions

//When DOM is loaded everything will start
function startApp()
{
    submit.disabled = true;


}

//validate
function validateField()
{
    validateLength(this);
    //enable button if fields are filled
    if(email.value !== '' && mensaje.value !== '' && asunto.value !== '')
    {
        submit.disabled = false;
    }

}

//User Pressed send
function pressSubmit(e)
{
    e.preventDefault();
    //access spinner gif hidden in dom
    const spinners = document.getElementById('spinner');
    spinners.style.display = 'block';
    //access sent gif hidden in dom
    const sent = document.createElement('img');
    sent.src = 'img/mail.gif';
    sent.style.display = 'block';
    //show sent icon after spinner
    setTimeout(function(){
        
        spinners.style.display = 'none'
        document.querySelector('#loaders').appendChild(sent);

        setTimeout(function(){
            sent.remove();
            submit.reset()

        },5000)


    }, 3000)
    
}

function validateLength(field)
{
    console.log(field);

    if (field.value.length > 0)
    {
        field.style.borderBottomColor = 'green';
        field.classList.remove('ERROR');
    }
    else
    {
        field.style.borderBottomColor = 'red';
        field.classList.add('ERROR');
    }
}