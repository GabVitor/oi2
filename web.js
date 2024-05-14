$(document).ready(function(){
    // Captura o clique no botão de alternância de menu
    $('.menu-toggle').click(function(){
        // Alterna a visibilidade do menu
        $('nav ul').slideToggle();
    });

    // Esconde o menu ao redimensionar a janela para desktop
    $(window).resize(function(){
        if($(window).width() > 767) {
            $('nav ul').removeAttr('web.css');
        }
    });
});
var nome = "AdventureLand";

alert("Bem Vindo ao site "+ nome);

function conferir(){
    const senha = document.querySelector("input[name=senha]");
    const confirmar_senha = document.querySelector("input[name=confirmar_senha]");

    if(confirmar_senha.value === senha.value){
        confirmar_senha.setCustomValidity('');
    }else{
        confirmar_senha.setCustomValidity('As senhas não confere');
    }
}

function senhacorreta(){
    alert("Cadastro Concluido");
    
}


var elemento = document.getElementById("frase");
elemento.style.color = "DarkViolet"
