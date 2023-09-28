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
        fn.style.display = "flex"
        bd.style.display = "flex"
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
const events  = [
    {
        user: 1,
        title: "Super event",
        style: "rock",
        city: "puta q te pariu",
        img: "https://static.standard.co.uk/2022/10/06/17/newFile-1.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart"
    },
    {
        user: 2,
        title: "Alabama fest",
        style: "Pop/rap",
        city: "Porto alegre",
        img: "https://lh3.googleusercontent.com/nwaSif1Ytlcm79PeDvIU8Qib0MFJVhNZLQukq5k7XF6ABrsbNayYAaNqraXiQGlbhcNZjjX3pE9AYqdIUzD6Y-Wn_g=h200-rw"
    },
    {
        user: 6,
        title: "Bailão top",
        style: "funk",
        city: "Canoas",
        img: "https://images.squarespace-cdn.com/content/v1/5a68f2eed0e6285be82a9fcc/1526807384376-0I1ETBFAM8MZHKOEPG8S/image2.jpeg"
    },
    {
        user: 7,
        title: "electrofest",
        style: "eletronica",
        city: "Novo Hamburgo",
        img: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/cached.imagescaler.hbpl.co-201604271135049.jpg"
    },
]
const artists = [

    {
        user: "Geraldo455",
        stars: "0",
        style: "rock",
        age: "19",
        bio: "Nasci em uma pequena cidade, onde minha paixão pela música começou a florescer.",
        img: "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
        bioL: "Nasci em uma pequena cidade do interior, onde minha paixão pela música começou a florescer. Desde jovem, estava fascinado por instrumentos musicais e passava horas explorando os sons da natureza. Aos 19 anos, estou pronto para embarcar em uma jornada musical emocionante.",
        bigImg: "",
        members: 1,
        data: "02/04/04",
        nomes: "Geraldo da Silva"
    },

    {
        user: "PocketMirror",
        stars: "4.2",
        style: "rock",
        age: "19",
        bio: "Banda de pop-punk, metalcore entre outros 🤘🤘🤘🤘🤘🤘🤘",
        img: "./assets/pocket.jpg",
        bioL: "Somos uma banda apaixonada por música e estamos prontos para fazer vocês balançarem ao som do nosso pop-punk e metalcore. Com apenas 19 anos, estamos apenas começando nossa jornada musical!",
        bigImg: "",
        members: 1,
        data: "10/08/02",
        nomes: "Lucas Andrade"
    },
    {
        user: "AnaPopGirl",
        stars: "2.8",
        style: "pop",
        age: "24",
        bio: "Adoro música pop e sonho em ser uma grande cantora!",
        img: "https://deadline.com/wp-content/uploads/2020/09/Gugu-Mbatha-Raw-e1610021013129.jpg",
        bioL: "Meu amor pela música pop começou quando era criança e desde então, tenho sonhado em me tornar uma grande cantora. Com 24 anos, estou trabalhando duro para realizar esse sonho!",
        bigImg: "",
        members: 1,
        data: "14/05/99",
        nomes: "Ana Silva"
    },
    {
        user: "JorgeJazz",
        stars: "3.7",
        style: "jazz",
        age: "45",
        bio: "Saxofonista apaixonado por jazz e blues.",
        img: "https://www.choosingtherapy.com/wp-content/uploads/2021/11/Dr-Tanveer-Ahmed.jpg",
        bioL: "Minha paixão pelo jazz e blues me levou a uma vida dedicada à música. Como saxofonista, encontro alegria em cada nota que toco. Com 45 anos de idade, continuo explorando os horizontes musicais.",
        bigImg: "",
        members: 1,
        data: "20/12/77",
        nomes: "Jorge Santos"
    },
    {
        user: "SophiaRapQueen",
        stars: "4.8",
        style: "rap",
        age: "29",
        bio: "Cantora de rap com letras poderosas e impactantes.",
        img: "https://salaovirtual.org/wp-content/uploads/2022/04/Cabelo-egirl-Azul.jpg",
        bioL: "Minhas letras de rap são minha voz para questões importantes. Com 29 anos, estou comprometida em criar músicas poderosas e impactantes que ressoem com as pessoas e inspirem mudanças.",
        bigImg: "",
        members: 1,
        data: "05/09/94",
        nomes: "Sophia Oliveira"
    },
    {
        user: "LucasCountryBoy",
        stars: "3.1",
        style: "country",
        age: "36",
        bio: "Fã de música country e amante da vida no campo.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Guy_Pearce_Cannes_2012.jpg/250px-Guy_Pearce_Cannes_2012.jpg",
        bioL: "A música country sempre esteve no meu coração, assim como a vida no campo. Com 36 anos, continuo vivendo minha paixão e compartilhando minha música country com o mundo.",
        bigImg: "",
        members: 1,
        data: "18/06/87",
        nomes: "Lucas Rodrigues"
    },
    {
        user: "IsabelaReggaeVibes",
        stars: "2.5",
        style: "reggae",
        age: "23",
        bio: "Apaixonada pelo reggae e pela cultura rastafári.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35Sk9mMEcBuooCRGNUylcYn-PR6IZhDHzvA&usqp=CAU",
        bioL: "O reggae é minha alma e a cultura rastafári é minha inspiração. Com 23 anos, continuo espalhando amor e positividade através da música reggae.",
        bigImg: "",
        members: 1,
        data: "09/03/00",
        nomes: "Isabela Santos"
    },
    {
        user: "MiguelEDM",
        stars: "4.0",
        style: "EDM",
        age: "31",
        bio: "DJ de música eletrônica que faz as pistas de dança tremerem.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZkFsNmh9sXRBcg004H8SgLCsOffQTtoAdw&usqp=CAU",
        bioL: "Minhas batidas eletrônicas fazem as pistas de dança tremerem. Com 31 anos, continuo a trazer energia e diversão para as festas com minha música EDM.",
        bigImg: "",
        members: 1,
        data: "28/11/91",
        nomes: "Miguel Silva"
    },
    {
        user: "LaraClassical",
        stars: "4.5",
        style: "clássica",
        age: "42",
        bio: "Violinista apaixonada pela música clássica e compositora de renome.",
        img: "https://www.dicasdemulher.com.br/wp-content/uploads/2020/10/soft-girl-054.jpg",
        bioL: "Sou Lara, uma violinista apaixonada pela música clássica e uma compositora de renome. Trago à vida o encanto e a beleza da música erudita com meu violino. Com ele, teço melodias que tocam a alma e transportam meus ouvintes para um mundo de emoção e refinamento. Ao longo de minha carreira, tive o privilégio de cativar plateias ao redor do mundo com minha interpretação magistral e composições inspiradoras. Minha dedicação à música clássica é uma jornada de amor e devoção, e minha arte continua a enriquecer a vida daqueles que têm o privilégio de me ouvir."
    }

]
let key = 0

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
artistsContainer.appendChild(artistDiv);

    })
}


createEvent()