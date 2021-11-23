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
    {
        name: 'Umut Meras', number: '77', position: 'Defender', imgUrl: 'https://images.bjk.com.tr/images/players/umut-meras_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Necip Uysal', number: '20', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/necip-uysal_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Oguzhan Ozyakup', number: '10', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/oguzhan-ozyakup_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Atiba Hutchinson', number: '13', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/atiba-hutchinson_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/ca.png'
    },
    {
        name: 'Gokhan Tore', number: '11', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/gokhan-tore_229x270_000002.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Georges-Kevin Nkoudou', number: '7', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/georges-kevin-nkoudou_229x270_000003.png', nationality:'https://bjk.com.tr/img/country-flags/png100px/fr.png'
    },
    {
        name: 'Ajdin Hasic', number: '19', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/ajdin-hasic_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/ba.png'
    },
    {
        name: 'Huseyin Atakan Uner', number: '27', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/huseyin-atakan-uner_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Josef de Souza', number: '5', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/josef-de-souza_229x270_000003.png', nationality:'https://bjk.com.tr/img/country-flags/png100px/br.png'
    },
    {
        name: 'Rachid Ghezzal', number: '18', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/rachid-ghezzal_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/dz.png'
    },
    {
        name: 'Salih Ucan', number: '8', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/salih-ucan_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Mehmet Topal', number: '14', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/mehmet-topal_229x270_000002.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Alex Teixeira', number: '90', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/alex-teixeira_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/br.png'
    },
    {
        name: 'Can Bozdogan', number: '12', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/can-bozdogan_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Miralem Pjanic', number: '15', position: 'Midfielder', imgUrl: 'https://images.bjk.com.tr/images/players/miralem-pjanic_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/ba.png'
    },
    {
        name: 'Cyle Christopher Larin', number: '17', position: 'Forward', imgUrl: 'https://images.bjk.com.tr/images/players/cyle-christopher-larin_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/ca.png'
    },
    {
        name: 'Guven Yalcin', number: '50', position: 'Forward', imgUrl: 'https://images.bjk.com.tr/images/players/guven-yalcin_229x270.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Kenan Karaman', number: '28', position: 'Forward', imgUrl: 'https://images.bjk.com.tr/images/players/kenan-karaman_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/tr.png'
    },
    {
        name: 'Michy Batshuayi', number: '9', position: 'Forward', imgUrl: 'https://images.bjk.com.tr/images/players/michy-batshuayi_229x270_000001.jpg', nationality:'https://bjk.com.tr/img/country-flags/png100px/be.png'
    }
]

const playersContainer = document.getElementById('players')
playersContainer.style.display = 'flex'
playersContainer.style.justifyContent = 'center'
playersContainer.style.flexWrap = 'wrap'
//section title
let h1 = document.createElement('h1')
let textH1 = document.createTextNode('PLAYERS')
h1.appendChild(textH1)
//style h1
h1.style.marginLeft = '50%' 
h1.style.marginRight = '50%'
playersContainer.appendChild(h1)

for(let i = 0; i <playerInfos.length; i++) {
    //new Div for each player
    let newDiv = document.createElement('div')
    //created img tag for player
    let img = document.createElement('img')
    img.src = playerInfos[i].imgUrl
    
    // created text node and appended p tag for player name
    let p = document.createElement('p')
    let name = document.createTextNode(playerInfos[i].name)
    p.appendChild(name)
   
    //created text node and appended p tag for player number
    let numberP = document.createElement('p')
    let number = document.createTextNode(playerInfos[i].number)
    numberP.appendChild(number)

    //created img tag for national flag
    let imgFlag = document.createElement('img')
    imgFlag.src = playerInfos[i].nationality

    //created text node and appended p tag for player position
    let positionP = document.createElement('p')
    let position = document.createTextNode(playerInfos[i].position)
    positionP.appendChild(position)


    /* STYLES */
    //newDiv
    newDiv.style.margin = '5px'

    //img player
  

    //img flag
    imgFlag.style.float = 'right'
    imgFlag.style.marginTop = '-43px'
    imgFlag.style.width = '20%'
    imgFlag.style.zIndex = '1'

    //number
    numberP.style.backgroundColor = 'black'
    numberP.style.color = 'white'
    numberP.style.width = '20%'
    numberP.style.padding = '5px'
    numberP.style.marginTop = '-3px'
    numberP.style.marginLeft = '5px'
    numberP.style.zIndex = '1'
    numberP.style.textAlign = 'center'

    //position
    positionP.style.marginTop = '-40px'
    positionP.style.marginLeft = '75px'
    positionP.style.fontStyle = 'italic'

    //player name
    p.style.textAlign = 'start'
    p.style.fontWeight = 'bold'



    //appended all components to newDiv
    newDiv.appendChild(img)
    newDiv.appendChild(numberP)
    newDiv.appendChild(imgFlag)
    newDiv.appendChild(positionP)
    newDiv.appendChild(p)
    
    playersContainer.appendChild(newDiv)
}
