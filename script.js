//pego o elemento com id de botão e salvo na variavel botao
var botao = document.querySelector('#botao')

//adiciona um eventlistener no botao com uma função dentro
botao.addEventListener('click',()=>{
	
	//pega os elementos com ida nome e email e salva nas variaveis respectivas
	var nome = document.querySelector('#nome').value
	var email = document.querySelector('#email').value

	console.log(nome,email)

	//cria um JSON com os dados coletados dos inputs
	var contatoJson = {
		"nome": nome,
		"email": email
	}

	console.log(contatoJson)

	//aciona o submit do formulário
	document.querySelector('#formulario').submit()
	
})

var teste = prompt('Digite seu nome:'); //
console.log(teste)