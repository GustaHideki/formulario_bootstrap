document.getElementById('enviar').addEventListener('click',function(){
 const name = document.getElementById('name').value;
 const surname = document.getElementById('surname').value;
 const InputEmail = document.getElementById('InputEmail').value;
 const InputPassword = document.getElementById('InputPassword').value;
 const city = document.getElementById('city').value;
 const state = document.getElementById('state').value;
 
const resposta = "nome: " +  name + "<br>" + "sobrenome: " +  surname + "<br>" + "email: " + InputEmail  + "<br>" + "senha: " +  InputPassword  + "<br>" + "cidade: " +  city  + "<br>" + "estado: " + state;

 document.getElementById('resposta').innerHTML = resposta;

});

