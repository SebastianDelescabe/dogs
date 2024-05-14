const url = 'https://dog.ceo/api/breeds/image/random'

async function getRandomDog(){
    const response = await fetch(url)
    const jsonResponse = await response.json()
    return jsonResponse
}

const buttonChange = document.querySelector('#button__change')
const loader = document.querySelector('.loader')
buttonChange.addEventListener('click',changeDog)

async function changeDog(){
    loader.style.display = 'flex'  //Carga loader

    const dogImage = document.querySelector('#image__content')
    const apiImage = await getRandomDog()
    dogImage.src = apiImage.message

    setTimeout(() => {
        loader.style.display = 'none' //Quita Loader
    }, 500);
}


/* PRIMERA CARGA */
changeDog()