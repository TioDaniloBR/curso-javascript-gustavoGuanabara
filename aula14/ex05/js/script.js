
//para usar esse código apagar o select do index.html, deixar somente a div
// var divRes = document.querySelector('#res')
// var lista = document.createElement('ul')
// divRes.appendChild(lista)

// function tabuada(){

// var numero = document.querySelector('#numeroTxt')

// 	if(numero.value == ''){
// 		alert('Insira um número')
// 	}else{
// 		var res = ''
// 		var i=0

// 		while(i <= 10){
// 			res += `<li>${numero.value} x ${i} = ${numero.value * i}`
// 			i++
// 		}
// 		lista.innerHTML = res
// 	}
// }


function tabuada(){
	let numero = document.querySelector('#numeroTxt')
	let tabuada = document.querySelector('#seltab')
	

	if(!numero.value.length){
		alert('Digite um número')
	}else{
		let n = Number(numero.value)
		let c = 1
		tabuada.innerHTML = ''

		while(c <= 10){
			let item = document.createElement('option')
			item.text = `${n} x ${c} = ${n * c}`
			item.value = `tab${c}`
			tabuada.appendChild(item)
			c++

		}
		tabuada.size='10'
//		tabuada.style.visibility = 'visible'

		
	}
}
