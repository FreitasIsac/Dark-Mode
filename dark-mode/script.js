const btn = document.querySelector("#btn")

function darkMode(){
   var body = document.querySelector("body")

   bodyclassList.toggle("dark-mode")

if(btn.innerText == "Ativar"){
    btn.innerText = "Desativar"
    return;
}

btn.innerText = "Ativar"
    
}



btn.addEventListener("click", darkMode)