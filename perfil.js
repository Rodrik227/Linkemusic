fetch('./assets/artists.json')
    .then((response) => response.json())
    .then((json) => {artists = json});

fetch('./assets/producers.json')
    .then((response) => response.json())
    .then((json) => producers = json);

    async function fetchData() {
        try {
            const artistsResponse = await fetch('./assets/artists.json');
            const artists = await artistsResponse.json();

            const producerResponse = await fetch ('./assets/producers.json')
            const producers = await producerResponse.json()
    
            fillInfos(artists, producers);
            console.log('fetch')
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    let data
    function fillInfos() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log('teste');
        
        if (parseInt(params.type) < 4) { // Converte params.type para número e compara
            console.log('<4');
            
            if (parseInt(params.type) === 1) { // Converte params.type para número e compara
                data = artists;
            }else if (parseInt(params.type) === 2){
                data = producers
            }
            
            const userDesejado = params.id;
            const user = data.find(infos => infos.user === userDesejado);
            
            document.querySelector('.nome').innerHTML = user.user;
            document.querySelector('.estrelas').innerHTML = `Avaliação: ${user.stars}`;
            
            if (user.members > 1) {
                document.getElementById('member').innerHTML = `${user.members} membros`;
            } else {
                document.getElementById('member').innerHTML = `${user.members} membro`;
            }
            
            document.getElementById('style').innerHTML = user.style;
            document.getElementById('date').innerHTML = user.data;
            document.getElementById('name').innerHTML = user.nomes;
            document.getElementById('bio').innerHTML = user.bioL;
            document.getElementById('userImg').style.backgroundImage = `url('${user.img}')`;
            document.getElementById('foto').style.backgroundImage = `url('${user.bigImg}')`;
        } else if (parseInt(params.type) === 4) { // Converte params.type para número e compara
            console.log('4');
            
            const data = JSON.parse(localStorage.getItem(localStorage.getItem('user')));
            console.log(data);
            
            document.getElementById('style').innerHTML = data.style;
            document.getElementById('date').innerHTML = data.nasc;
            document.getElementById('name').innerHTML = data.name;
            document.getElementById('bio').innerHTML = 'Acabei de chegar aqui no site';
            document.getElementById('userImg').style.backgroundImage = `url('./assets/user.svg')`;
        }
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
