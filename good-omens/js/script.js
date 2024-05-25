let sobre = document.querySelector("#aboutMe");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

let nomeOk = false;
let emailOk = false;
let messageOk = false;

function validarNome() {
    let txtNome = document.querySelector("#txtNome");
  
    if (nome.value.length < 3) {
      txtNome.innerHTML = "Nome muito curto";
      txtNome.style.color = "red";
      nomeOk = false;
    } else {
      txtNome.innerHTML = "";
      nomeOk = true;
    }
  }
  
  function validarEmail() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let txtEmail = document.querySelector("#txtEmail");
  
    if (email.value.match(regex)) {
      txtEmail.innerHTML = "";
      emailOk = true;
    } else {
      txtEmail.innerHTML = "E-mail inválido";
      txtEmail.style.color = "red";
      emailOk = false;
    }
  }
  
  function validarMessage() {
    let txtMensagem = document.querySelector("#txtMensagem");
  
    if (message.value.length >= 50) {
      txtMensagem.innerHTML = "Mensagem muito grande!";
      txtMensagem.style.color = "red";
      messageOk = false;
    } else {
      txtMensagem.innerHTML = "";
      messageOk = true;
    }
  }
  
  function enviarForm() {
    if (nomeOk === true && emailOk === true && messageOk === true) {
      alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  }
  
  async function getApiGithub() {

    try {
      const dadosPerfil = await fetch("https://api.github.com/users/natashamorais");
      const perfil = await dadosPerfil.json();
  
      let conteudo = `
          <img src="${perfil.avatar_url}
          alt="Foto do Perfil do Github - ${perfil.name}">
  
          <article class="aboutMe_text"> 
          <h1>Quem sou eu?</h1>
          <p>
          Sou a Natasha, uma pessoa não binária desenvolvedora de software. Tutore de duas gatas(Malevola e Leia) e uma cachorra(Michonne), jogadore de tarô, aprendiz de costureira e bruxa.
          </p>
  
          <div  class="aboutMe_github "> 
              <a class="btn" target="_blank" href="${perfil.html_url}">Github</a>
    
          </div>
  
          </article>
      `;
  
      sobre.innerHTML += conteudo;
  
    } catch (error) {
      console.log(error);
    }
  
  }
  
  getApiGithub();