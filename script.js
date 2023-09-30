let senha = document.getElementById('senha');
let senhaC = document.getElementById('senhaC');
localStorage.setItem("login", 'false')
localStorage.setItem('user',"none")

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas não considem");
    senhaC.reportValidity();
  } else {
    senhaC.setCustomValidity("");
    checkEmail()
  }
}
function user1() {
  let adm = {
      name: "Admin",
      user: "Admin",
      pass: "musicadm",
      type: "msc",
      account: 3
    }
    localStorage.setItem("adm@linkemusic.com", JSON.stringify(adm))
  }

  
function checkEmail() {
  const email = document.getElementById('email')

  if( email.value == localStorage.key(email.value)) {
    email.setCustomValidity('Email já registrado')
    email.reportValidity()
  }else {
    checkForm()
  }
}
function checkForm() {
  const form = document.getElementById('formC')

  form.addEventListener('submit', e => e.preventDefault())

  if (form.checkValidity() == true) {
    let person = {
      name: document.getElementById('name').value,
      user: document.getElementById('user').value,
      pass: document.getElementById('senha').value,
      type: document.querySelector('input[name=Cadastro]:checked').dataset.radio,
      account: 1
    }
    localStorage.setItem(document.getElementById('email').value, JSON.stringify(person))
    window.location.href = "login.html"
  }
}

function checkAccount() {
  
  document.getElementById('formL').addEventListener('submit', e => e.preventDefault())
  const emailInput = document.getElementById('emailL');
  const senhaInput = document.getElementById('senhaL');

  // Verifique se o email está no localStorage
  const storedAccount = localStorage.getItem(emailInput.value);

  if (storedAccount !== null) {
    const data = JSON.parse(storedAccount);

    // Compare as senhas
    if (data.pass === senhaInput.value) {
      localStorage.setItem("login", 'true');
      localStorage.setItem("user",emailInput.value )
      console.log('Login bem-sucedido');
      window.location.href = "home.html"
    } else {
      senhaInput.setCustomValidity('Senha incorreta');
      senhaInput.reportValidity();
    }
  } else {
    emailInput.setCustomValidity('Conta não encontrada');
    emailInput.reportValidity();
  }
}
user1()

