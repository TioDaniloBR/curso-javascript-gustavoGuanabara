/*

var inicio = document.querySelector('#inicioTxt') 
var fim = document.querySelector('#fimTxt')
var passo = document.querySelector('#passoTxt')
var divRes = document.querySelector('#res')
var texto = ''



function contar(){
	divRes.innerHTML = texto
	if(inicio.value && fim.value && Number(passo.value) > 0){
		if(Number(inicio.value) > Number(fim.value)){

			for(var i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)){
			texto += ` ${i}`	
		}	
		
		divRes.innerHTML = texto
		texto = ''

		}else{

			for(var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
				texto += ` ${i}`	
			}	
			divRes.innerHTML = texto
			texto = ''
		}
	}else{
		alert('Necessário preencher os valores, e o passo precisa ser maior que 0')
	}

	
}
*/

function contar(){
	let inicio = document.querySelector('#inicioTxt')
	let fim = document.querySelector('#fimTxt')
	let passo = document.querySelector('#passoTxt')
	let res = document.querySelector('#res')

	let i = Number(inicio.value)
	let f = Number(fim.value)
	let p = Number(passo.value)
	
	if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
		alert('Preencher todos os valores')
	}else{
		if(p == 0){
			alert('0 não é um passo válido, considerando passo 1')
			p = 1;
		}
		res.innerHTML = 'Contando: '
		
		if(i < f){
			for(c = i; c <= f; c += p){
				res.innerHTML += ` \u{1F449} ${c}`
			}
		}else{
			for(c = i; c >= f; c -= p)
				res.innerHTML += ` \u{1F449} ${c}`
		}


		res.innerHTML += '\u{1F415}'
	}
	
}