
//---------------------- Questão 1 -------------------------
/*function checaIdade(idade){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(idade >= 18){
                resolve();
            } else {
                reject();
            }
        }, 2000);
    }); 
}

checaIdade(17)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });

 */

 //--------------------------Questão 2----------------------------

var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

function buscaUser(){
    var userInput = inputElement.nodeValue;
    var user = 'https://api.github.com/users/' + userInput + '/repos';

    axios.get(user)
        .then(function(response){
            
        })
        .catch(function(error){

        });
    
};

function listaRepositorio(){
    for(repo of repos){
        var liElement = document.createElement('li');
        var repo = document.createTextNode(user.) 
}