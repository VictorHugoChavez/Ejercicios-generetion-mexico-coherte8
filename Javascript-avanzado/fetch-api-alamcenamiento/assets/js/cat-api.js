let $btnGato = document.querySelector('#btnGato');


$btnGato.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);

            let imagenGatitto = document.createElement('img')
            imagenGatitto.src = data[0].url;

            document.body.appendChild(imagenGatitto)
        })

    // console.log('Miau');
});

$btnGato.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);

            let imagenGatitto = document.createElement('img')
            imagenGatitto.src = data.message;
            document.body.appendChild(imagenGatitto)
        })

    // console.log('Miau');
});