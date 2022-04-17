let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

function cadastrar () {
    if (validNome && validSenha && validConfirmSenha == true) {
        alert('Cadastro realizado com sucesso!')
    } else
        alert('Verifique as informações')
}

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 3){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Usuário *Insira no mínimo 4 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = ''
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 3){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Insira no mínimo 4 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = ''
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Senhas validadas'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})