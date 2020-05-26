var lista = document.querySelector('#lista')//Pega a lista do html
var novaDiv = document.createElement('div')//Cria uma nova div que será o resultado
var arr = []//cria o array


function adicionar(){
	var inputNumero = document.querySelector('#txtNumero')//pega o input
	
	if(!Number(inputNumero.value.length) || Number(inputNumero.value) > 100 || Number(inputNumero.value) < 1) {
		alert('Número incorreto ou não preenchido')
	}else{
		novaDiv.innerHTML = ''//zera a div se já tiver algo nela
		lista.size = '10'//ativa a lista
		if(arr.indexOf(Number(inputNumero.value)) != -1){
			alert('Número já existente. Escolha um novo número')
		}else{
			var numero = Number(inputNumero.value)//passa o valor do input para numero
			let item = document.createElement('option')//cria o item q sera inserido no select
			item.text = `Adicionado: ${numero}`//formata o texto q devera aparecer no select
			lista.appendChild(item)//adiciona o item a lista
			arr.push(numero)//adiciona o numero no array

		}

	}
	
}

function finalizar(){
	if(!arr.length){
		alert('adicione algum número primeiro')
	}else{
		//total adicionado, maior valor, menor valor, soma de todos, media
		
		var res = document.querySelector('#res')//pega a div res do html
		
		novaDiv.innerHTML = ''//zera a div q foi criada caso ela ja tenha algo

		var resPronto = `<p>Ao total foram adicionados ${arr.length} números</p>`//cria uma variavel pra criar um html que sera inserido na div
		arr.sort((a,b) => a-b)//organiza o array
		resPronto += `<p>O maior valor encontrado é ${arr[arr.length-1]}</p>`
		resPronto += `<p>O menor valor encontrado é ${arr[0]}</p>`
		let soma = 0
		for (let i = 0; i < arr.length; i++){
			soma += arr[i]
		}
		resPronto += `<p>A soma de todos os elementos é ${soma}</p>`
		resPronto += `<p>A média dos elementos somados é ${(soma/arr.length).toFixed(2)}</p>`
		
		novaDiv.innerHTML = resPronto//pega o html e insere na div q foi criada aqui
		res.appendChild(novaDiv)//adiciona a div no DOM
	}
}