let btn = document.querySelector('#senha1')
btn.addEventListener('click', () =>  {
    let inputSenha = document.querySelector('#password1')
    console.log(btn)
    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }

})
