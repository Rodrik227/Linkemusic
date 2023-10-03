function login() {
    console.log('dai é foda')
    const auth = localStorage.getItem('login')
    console.log(auth)
    if(auth == 'false') {
        console.log('porra')
        window.location.href = "index.html"

    }
}


const form = document.getElementById('formCD')
form.addEventListener('submit', e => e.preventDefault())
let data = JSON.parse(localStorage.getItem(localStorage.getItem('user')))
const fn = document.getElementById('finish')
const bd = document.getElementById('blur')
const blur = document.querySelectorAll('.blur')

function account() {
    const userName = document.getElementById('user')
    const type = document.getElementById('job')
    const q1 = document.getElementsByClassName('p1')

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
        if (screen.width < 640 || screen.height < 480) {
            fn.style.display = "block"
            bd.style.display = "flex"
        } else {
            fn.style.display = "flex"
            bd.style.display = "flex"
        }

        blur.forEach(element => {
            element.style.filter = "blur(2px)";
          });
    }
}
account()


function calcularIdade() {
    const dataNascimento = new Date(document.getElementById("nasc").value);
    const dataAtual = new Date();

    const diferenca = dataAtual - dataNascimento;
    const idade = Math.floor(diferenca / (365.25 * 24 * 60 * 60 * 1000));

    const campoNascimento = document.getElementById("nasc");

    if (idade < 16) {
        campoNascimento.setCustomValidity("A idade mínima é 16");
    } else {
        campoNascimento.setCustomValidity("");
        data.cpf = document.getElementById('cpf').value
        data.style = document.getElementById('cars').value
        data.city = document.getElementById('city').value
        data.nasc = dataNascimento
        data.account = 3

        localStorage.setItem(localStorage.getItem('user'), JSON.stringify(data))

        fn.style.display = "none"
        bd.style.display = "none"
        blur.forEach(element => {
            element.style.filter = "blur(0px)";
          });
    }

    document.getElementById("formCD").reportValidity();
}
let artists
let events

fetch('./assets/artists.json')
    .then((response) => response.json())
    .then((json) => {artists = json});


fetch('./assets/events.json')
    .then((response) => response.json())
    .then((json) => events = json);
fetch('./assets/producers.json')
    .then((response) => response.json())
    .then((json) => producers = json);

    async function fetchData() {
        try {
            const artistsResponse = await fetch('./assets/artists.json');
            const artists = await artistsResponse.json();
    
            const eventsResponse = await fetch('./assets/events.json');
            const events = await eventsResponse.json();
            
            const producersResponse = await fetch('./assets/producers.json');
            const producers = await producersResponse.json();
    
            // Agora que os dados foram carregados, você pode chamar a função createEvent
            createEvent(artists, events,producers);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

function createEvent() {
    events.forEach(event => {
        // Cria uma nova div com a classe "event"
const eventDiv = document.createElement("div");
eventDiv.className = "event";

// Cria a estrutura interna da div "event"
const titleDiv = document.createElement("div");
titleDiv.className = "title";

const titleH3 = document.createElement("h3");
titleH3.textContent = event.title;

const titleH4 = document.createElement("h4");
titleH4.textContent = event.style;

titleDiv.appendChild(titleH3);
titleDiv.appendChild(titleH4);

const imgDiv = document.createElement("div");
imgDiv.className = "img";
imgDiv.style.backgroundImage = `url(${event.img})`

const infosDiv = document.createElement("div");
infosDiv.className = "infos";

const userEDiv = document.createElement("div");
userEDiv.className = "userE";

const userImgDiv = document.createElement("div");
userImgDiv.className = "userImg";
userImgDiv.style.backgroundImage = `url('${artists[event.user].img}')`

const userP = document.createElement("p");
userP.textContent = artists[event.user].user;

userEDiv.appendChild(userImgDiv);
userEDiv.appendChild(userP);

const cityP = document.createElement("p");
cityP.className = "city";
cityP.textContent = event.city;

infosDiv.appendChild(userEDiv);
infosDiv.appendChild(cityP);

eventDiv.appendChild(titleDiv);
eventDiv.appendChild(imgDiv);
eventDiv.appendChild(infosDiv);

// Adiciona a div "event" dentro da div "events"
const eventsDiv = document.getElementById("events");
eventsDiv.appendChild(eventDiv);
    })


    artists.forEach(artist => {
        // Cria a div "artist"
const artistDiv = document.createElement("div");
artistDiv.className = "artist";

const link = document.createElement('a')
link.href = `./perfil.html?id=${artist.user}&type=1`
link.className = "perfil"
// Cria a div "userA" dentro da div "artist"
const userADiv = document.createElement("div");
userADiv.className = "userA";
userADiv.style.backgroundImage = `url(${artist.img})`
// Cria a div "infosA" dentro da div "artist"
const infosADiv = document.createElement("div");
infosADiv.className = "infosA";

// Adiciona um título "Username" à div "infosA"
const usernameHeading = document.createElement("h3");
usernameHeading.textContent = artist.user;

// Adiciona um elemento de classificação à div "infosA"
const ratingSpan = document.createElement("span");
ratingSpan.className = "fa fa-star checked";

// Adiciona a classificação (por exemplo, 4/5) à div "infosA"
const ratingText = document.createElement("span");
ratingText.textContent = artist.stars + "/5";
ratingText.id = "rating";

// Adiciona informações de estilo à div "infosA"
const estiloPara = document.createElement("p");
estiloPara.className = "info2";
estiloPara.id = "estilo";
estiloPara.textContent = artist.style

// Adiciona informações de idade à div "infosA"
const idadePara = document.createElement("p");
idadePara.className = "info2";
idadePara.id = "idade";
idadePara.textContent = artist.age + " Anos"

// Adiciona um parágrafo de biografia à div "artist"
const bioPara = document.createElement("p");
bioPara.id = "bio";
bioPara.textContent = artist.bio;

// Adiciona todos os elementos criados à div "infosA"
infosADiv.appendChild(usernameHeading);
infosADiv.appendChild(ratingSpan);
infosADiv.appendChild(ratingText);
infosADiv.appendChild(estiloPara);
infosADiv.appendChild(idadePara);

// Adiciona a div "userA", a div "infosA" e o parágrafo de biografia à div "artist"
artistDiv.appendChild(userADiv);
artistDiv.appendChild(infosADiv);
artistDiv.appendChild(bioPara);

// Adiciona a div "artist" à div com o id "artists" existente no HTML
const artistsContainer = document.getElementById("artists");
artistsContainer.appendChild(link)
link.appendChild(artistDiv);

    })
    
    producers.forEach(producer => {
        // Cria a div "producer"
const producerDiv = document.createElement("div");
producerDiv.className = "producer";

const link = document.createElement('a')
link.href = `./perfil.html?id=${producer.user}&type=2`
link.className = "perfil"
// Cria a div "userA" dentro da div "producer"
const userADiv = document.createElement("div");
userADiv.className = "userA";
userADiv.style.backgroundImage = `url(${producer.img})`
// Cria a div "infosA" dentro da div "producer"
const infosADiv = document.createElement("div");
infosADiv.className = "infosA";

// Adiciona um título "Username" à div "infosA"
const usernameHeading = document.createElement("h3");
usernameHeading.textContent = producer.user;

// Adiciona um eleme    nto de classificação à div "infosA"
const ratingSpan = document.createElement("span");
ratingSpan.className = "fa fa-star checked";

// Adiciona a classificação (por exemplo, 4/5) à div "infosA"
const ratingText = document.createElement("span");
ratingText.textContent = producer.stars + "/5";
ratingText.id = "rating";

// Adiciona informações de estilo à div "infosA"
const estiloPara = document.createElement("p");
estiloPara.className = "info2";
estiloPara.id = "estilo";
estiloPara.textContent = producer.style

// Adiciona informações de idade à div "infosA"
const idadePara = document.createElement("p");
idadePara.className = "info2";
idadePara.id = "idade";
idadePara.textContent = producer.age + " Anos"

// Adiciona um parágrafo de biografia à div "producer"
const bioPara = document.createElement("p");
bioPara.id = "bio";
bioPara.textContent = producer.bio;

// Adiciona todos os elementos criados à div "infosA"
infosADiv.appendChild(usernameHeading);
infosADiv.appendChild(ratingSpan);
infosADiv.appendChild(ratingText);
infosADiv.appendChild(estiloPara);
infosADiv.appendChild(idadePara);

// Adiciona a div "userA", a div "infosA" e o parágrafo de biografia à div "producer"
producerDiv.appendChild(userADiv);
producerDiv.appendChild(infosADiv);
producerDiv.appendChild(bioPara);

// Adiciona a div "producer" à div com o id "producers" existente no HTML
const producersContainer = document.getElementById("producers");
producersContainer.appendChild(link)
link.appendChild(producerDiv);

    })
}

function not() {
    alert("Desculpe, essa função não está disponível na versão demo")
}

login()
fetchData();
