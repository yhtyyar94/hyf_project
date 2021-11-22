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

const prevImage = () => {
    if(counter == 0) {
        counter = imgUrls.length - 1
        sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`
    } else {
        counter--;
        sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`
    }
   
}

const nextImage = () => {
    if(counter == imgUrls.length - 1) {
        counter = 0
        sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`
    } else {
        counter++;
        sliderImg.style.backgroundImage = `url(${imgUrls[counter]})`
    }
}

prev.addEventListener('click', prevImage)
next.addEventListener('click', nextImage)
