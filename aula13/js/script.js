function carregar(){
	var msg = document.querySelector('#msg')
	var img = document.querySelector('#img')
	var data = new Date()
	var hora = data.getHours()

	msg.innerHTML = `Agora são ${hora} horas`
	 if(hora >= 0 && hora <= 4){
	 	//BOA MADRUGADA
	 	img.src = 'img/madrugada.jpg'
	 	document.body.style.background = 'black'
	 	
	 }else if(hora >4 && hora <= 11){
	 	// BOM DIA
	 	img.src = 'img/amanhecer.jpg'
	 	document.body.style.background = '#e2cd9f'
	 	
	 }else if(hora > 11 && hora <= 17){
	 	//BOA TARDE
	 	img.src = 'img/tarde.jpg'
	 	document.body.style.background = '#b9846f'
	 }else{
	 	//BOA NOITE
	 	img.src = 'img/noite.jpg'
	 	document.body.style.background = '#515154'
	 }

}