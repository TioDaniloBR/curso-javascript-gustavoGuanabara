function verificar(){
	var data = new Date()
	var ano = data.getFullYear()
	var formularioAno = document.querySelector('#txtano')
	var res = document.querySelector('#res')

	if(formularioAno.value == '' || formularioAno.value > ano){
		alert('Digite um ano de nascimento valido e tente novamente')
	}else{
		var formularioSex = document.querySelectorAll('[name="radsex"]')
		var idade = ano - formularioAno.value
		var genero = ''
		var img = document.createElement('img')
		if(formularioSex[0].checked){
			genero = 'Homem'
			if(idade >= 0 && idade <= 4){
				img.setAttribute('src','img/garoto.jpg')
			}else if(idade > 4 && idade <= 15){
				img.setAttribute('src','img/menino.jpg')
			}else if(idade > 15 && idade <= 30){
				img.setAttribute('src','img/jovem-homem.jpg')
			}else if(idade > 30 && idade <= 60){
				img.setAttribute('src','img/homem.jpg')
			}else{
				img.setAttribute('src','img/idoso.jpg')
			}
		}else if (formularioSex[1].checked) {
			genero = 'Mulher'
			if(idade >= 0 && idade <= 4){
				img.setAttribute('src','img/garota.jpg')
			}else if(idade > 4 && idade <= 15){
				img.setAttribute('src','img/menina.jpg')
			}else if(idade > 15 && idade <= 30){
				img.setAttribute('src','img/jovem-mulher.jpg')
			}else if(idade > 30 && idade <= 60){
				img.setAttribute('src','img/mulher.jpg')
			}else{
				img.setAttribute('src','img/idosa.jpg')
			}
			
		}
	}

	res.innerHTML = `Genero: ${genero} com idade: ${idade}`
	res.appendChild(img)
	res.style.textAlign = 'center'
}
