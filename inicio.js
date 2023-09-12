// function login() {
//     console.log('dai é foda')
//     const auth = localStorage.getItem('login')
//     console.log(auth)
//     if(auth == 'false') {
//         console.log('porra')
//         window.location.href = "index.html"

//     }
// }
// login()
function account() {
    const user = localStorage.getItem(localStorage.getItem('user'))
    const data = JSON.parse(user)
    const userName = document.getElementById('user')
    const type = document.getElementById('job')
    const q1 = document.getElementsByClassName('p1')
    const fn = document.getElementById('finish')
    const blur = document.querySelectorAll(".blur")


    userName.innerHTML = data.user

    if(data.type == 'msc') {
        type.innerHTML = 'Músico'
        q1.innerHTML = "Digite seu CPF:"
    }else if(data.type == 'prtr') {
        type.innerHTML == 'Produtor'
        q1.innerHTML = "Digite seu CPF:"
    }else {
        type.innerHTML == 'proprietário'
        q1.innerHTML = "Digite seu CNPJ:"
    }
    
    if(data.account == 1) {
        fn.style.display = "flex"
        blur.style
    }
}
account()





// const cpfBox =
// const cpf = 

// function validarCPF(cpf) {	
// 	cpf = cpf.replace(/[^\d]+/g,'');	
// 	if(cpf == '') {cpfBox.setCustomValidity('CPF invalido')};	
// 	// Elimina CPFs invalidos conhecidos	
// 	if (cpf.length != 11 || 
// 		cpf == "00000000000" || 
// 		cpf == "11111111111" || 
// 		cpf == "22222222222" || 
// 		cpf == "33333333333" || 
// 		cpf == "44444444444" || 
// 		cpf == "55555555555" || 
// 		cpf == "66666666666" || 
// 		cpf == "77777777777" || 
// 		cpf == "88888888888" || 
// 		cpf == "99999999999")
// 			{cpfBox.setCustomValidity('CPF invalido')};		
// 	// Valida 1o digito	
// 	add = 0;	
// 	for (i=0; i < 9; i ++)		
// 		add += parseInt(cpf.charAt(i)) * (10 - i);	
// 		rev = 11 - (add % 11);	
// 		if (rev == 10 || rev == 11)		
// 			rev = 0;	
// 		if (rev != parseInt(cpf.charAt(9)))		
// 			{cpfBox.setCustomValidity('CPF invalido')};		
// 	// Valida 2o digito	
// 	add = 0;	
// 	for (i = 0; i < 10; i ++)		
// 		add += parseInt(cpf.charAt(i)) * (11 - i);	
// 	rev = 11 - (add % 11);	
// 	if (rev == 10 || rev == 11)	
// 		rev = 0;	
// 	if (rev != parseInt(cpf.charAt(10)))
// 		{cpfBox.setCustomValidity('CPF invalido')};		
// 	return true;   
// }