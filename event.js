fetch('./assets/artists.json')
    .then((response) => response.json())
    .then((json) => { artists = json });

fetch('./assets/events.json')
    .then((response) => response.json())
    .then((json) => { events = json });

async function fetchData() {
    try {
        const artistsResponse = await fetch('./assets/artists.json');
        artists = await artistsResponse.json(); // Remova a redeclaração 'const' aqui
        console.log('artist')
        const eventResponse = await fetch('./assets/events.json');
        events = await eventResponse.json(); // Remova a redeclaração 'const' aqui
        console.log(events)
        fillInfos(artists, events);
        console.log('fetch')
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

function fillInfos(artists, events) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const eventDesejado = params.id;
    const event = events.find(event => event.user === parseInt(eventDesejado));;
    console.log(event);
    const user = artists[event.user]

    document.querySelector('.nome').innerHTML = user.user;
    document.querySelector('.estrelas').innerHTML = `Avaliação: ${user.stars}`;
    if (user.members > 1) {
        document.getElementById('member').innerHTML = `${user.members} membros`;
    } else {
        document.getElementById('member').innerHTML = `${user.members} membro`;
    }
    document.querySelector('title').innerHTML = event.title
    document.getElementById('eventName').innerHTML = event.title
    document.getElementById('style').innerHTML = user.style;
    document.getElementById('date').innerHTML = event.date;
    document.getElementById('time').innerHTML = event.time;
    document.getElementById('city').innerHTML = event.city
    document.getElementById('bio').innerHTML = event.info;
    document.getElementById('userImg').style.backgroundImage = `url('${user.img}')`;
    document.getElementById('foto').style.backgroundImage = `url('${event.img}')`;
}
function account() {
    const data = JSON.parse(localStorage.getItem(localStorage.getItem('user')))
    const userName = document.getElementById('user')
    const type = document.getElementById('job')

    userName.innerHTML = data.user

    if(data.type == 'msc') {
        type.innerHTML = 'Músico'
    }else if(data.type == 'prtr') {
        type.innerHTML == 'Produtor'
    }else {
        type.innerHTML == 'proprietário'
    }
}
account()
fetchData()
