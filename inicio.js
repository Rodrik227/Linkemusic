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
    userName.innerHTML = data.name

    
}
account()