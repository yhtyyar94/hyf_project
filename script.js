/* SLIDER SECTION*/
//image urls
const imgUrls = [
    'https://rooteto.com/wp-content/uploads/2014/10/besiktas-hd-resim.jpg',
    'https://3.bp.blogspot.com/-kseoj4W8hLA/VFOrp0a8mxI/AAAAAAAAVEw/OKYxw6HkrT8/s1600/besiktas-rooteto2.jpg',
    'https://4.bp.blogspot.com/-aLkYa2xT2GY/VFOr0_Of6lI/AAAAAAAAVF8/FBfi-5zmM8Q/s1600/besiktas-rooteto3.jpg',
    'https://3.bp.blogspot.com/-7yn3uAdInQ4/VFOr2UWhTLI/AAAAAAAAVGQ/LQ7L8_an_g8/s1600/besiktas-rooteto5.jpg',
    'https://3.bp.blogspot.com/-al7sHhfv2XY/VFOrkTBsuOI/AAAAAAAAVD4/ud85QBatxas/s1600/besiktas-rooteto14.jpg'
]

//DOM
const sliderImg = document.querySelector('.slider')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let counter = 0

sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`

//handle prev image
const prevImage = () => {
    if(counter == 0) {
        counter = imgUrls.length - 1
        sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`
    } else {
        counter--;
        sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`
    }
   
}
//handle next image
const nextImage = () => {
    if(counter == imgUrls.length - 1) {
        counter = 0
        sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`
    } else {
        counter++;
        sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`
    }
}

//event listeners
prev.addEventListener('click', prevImage)
next.addEventListener('click', nextImage)



/*HISTORY SECTION*/

//hide all contents except first
const contentItems = document.getElementsByClassName('history-content-item')
for(let i = 1; i < contentItems.length; i++) {
    contentItems[i].style.display = 'none'
}

//handling on click function of history subtitles
const historySubTitles = document.getElementsByClassName('history-listItem')
for(let j = 0; j < historySubTitles.length; j++) {
    historySubTitles[j].addEventListener('click', () => {
        for(let i = 0; i < contentItems.length; i++) {
            contentItems[i].style.display = 'none'
        }

        contentItems[j].style.display = 'flex'
    })
}


/* PLAYERS SECTION this section was created using only DOM*/

const playerInfos = [
    {
        name: 'Mert Günok', number: '34', position: 'Goalkeeper', imgUrl: 'https://images.bjk.com.tr/images/players/mert-gunok_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Ersin Destanoglu', number:'30', position: 'Goalkeeper', imgUrl: 'https://images.bjk.com.tr/images/players/ersin-destanoglu-2-2_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Emre Bilgin', number: '61', position: 'Goalkeeper', imgUrl: 'https://images.bjk.com.tr/images/players/emre-bilgin-2_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Ridvan Yilmaz', number: '3', position: 'Defender', imgUrl: 'https://images.bjk.com.tr/images/players/ridvan-yilmaz-2-2_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Serdar Saatci', number: '46', position: 'Defender', imgUrl: 'https://images.bjk.com.tr/images/players/serdar-saatci-2_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Domagoj Vida', number: '24', position: 'Defender', imgUrl: 'https://images.bjk.com.tr/images/players/domagoj-vida_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/hr.png'
    },
    {
        name: 'Welinton Souza Silva', number: '23', position: 'Defender', imgUrl: 'https://images.bjk.com.tr/images/players/welinton-souza-silva_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/br.png'
    },
    {
        name: 'Francisco Montero', number: '4', position: 'Defender', imgUrl: 'https://images.bjk.com.tr/images/players/francisco-montero_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/es.png'
    },
    {
        name: 'Valentin Rosier', number: '2', position: 'Defender', imgUrl: 'https://images.bjk.com.tr/images/players/valentin-rosier_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/fr.png'
    },
]

const playersContainer = document.getElementById('players')
playersContainer.style.display = 'flex'
playersContainer.style.justifyContent = 'center'
playersContainer.style.flexWrap = 'wrap'

for(let i = 0; i <playerInfos.length; i++) {
    let newDiv = document.createElement('div')
    let img = document.createElement('img')
    img.src = playerInfos[i].imgUrl
    let p = document.createElement('p')
    let name = document.createTextNode(playerInfos[i].name)
    p.appendChild(name)
    newDiv.appendChild(img)
    newDiv.appendChild(p)
    playersContainer.appendChild(newDiv)
}
