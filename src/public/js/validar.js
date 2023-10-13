const usuario = document.getElementById("registro-usuario");
const email = document.getElementById("registro-email");
const pasword = document.getElementById("registro-contraseña");
const form = document.getElementById("registrar");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(usuario.value.length < 6){
        warnings += `El nombre no es valido <br>` 
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pasword.value<8){
        warnings += `La contraseña no es valida`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})
