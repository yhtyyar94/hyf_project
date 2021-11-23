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

//Player infos fetched from my own api
fetch('https://blackeagleapi.herokuapp.com/api/besiktas-players').then(res => res.json()).then(playerInfos => {
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
}).catch(err => console.log(err))



/*Vodafone Park SECTION*/

//hide all contents except first
const stadiumContentItems = document.getElementsByClassName('stadium-content-item')
for(let i = 1; i < stadiumContentItems.length; i++) {
    stadiumContentItems[i].style.display = 'none'
}

//handling on click function of stadium subtitles
const stadiumSubTitles = document.getElementsByClassName('stadium-listItem')
for(let j = 0; j < stadiumSubTitles.length; j++) {
    stadiumSubTitles[j].addEventListener('click', () => {
        for(let i = 0; i < stadiumContentItems.length; i++) {
            stadiumContentItems[i].style.display = 'none'
        }

        stadiumContentItems[j].style.display = 'flex'
    })
}

/* LOGO */
//goes top of the page when on click to logo
const logo = document.querySelector('.logo')
logo.addEventListener('click', () => window.scroll(0, 0))


/* MODAL */

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let iframe = document.getElementById('iframe')

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  iframe.src = iframe.src
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.src = iframe.src
  }
}