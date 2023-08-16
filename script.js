const Slider = document.querySelector("#Slider_images") // 0
const SliderSecond = document.querySelector("#Slider_images_1") // 1
const SliderNext = document.querySelector("#Slider_images_next")
const SliderPrev = document.querySelector("#Slider_images_prev")
const ImageGrid = document.querySelector("#Image-grid-container") 
const DropDownBt = document.querySelector("#Image-grid-container") 
const SearchBt = document.querySelector("#Searchbar_show") 
const Searchbar = document.querySelector("#Searchbar")
const mobileBar = document.querySelector("#MobileBar")

const Images = [
    "https://media.istockphoto.com/id/1256058280/pl/zdj%C4%99cie/minimalny-taras-na-poddaszu-3d-render.jpg?s=612x612&w=0&k=20&c=9zG7eHSg-XWGYFergz3f18WKeo9JwmPo7h6WqlcSQug=",
    "https://media.istockphoto.com/id/1308087213/pl/zdj%C4%99cie/podw%C3%B3rku-angielski-ogr%C3%B3d-domek-kolorowe-kwitnienia-ro%C5%9Blin-i-zielony-trawnik-trawiasty.jpg?s=612x612&w=0&k=20&c=d_xamDqE5K2lUCiF6fSAH3aa_cDoEqmPPshiUFrvTgw=",
    "https://media.istockphoto.com/id/1008414192/pl/zdj%C4%99cie/ogr%C3%B3d.jpg?s=612x612&w=0&k=20&c=mfWmwRTnITJ_RA3TvXFEeAN_lu-y4wUtu4rahrdlXh8=",
    "https://media.istockphoto.com/id/1192014583/pl/zdj%C4%99cie/%C5%9Bwie%C5%BCo-%C5%9Bci%C4%99ta-trawa.jpg?s=612x612&w=0&k=20&c=J-CDNoFxipjV5CHL7YGJsAsJsUopuynVKDMenDyiSn0=",
    "https://media.istockphoto.com/id/1323663582/pl/zdj%C4%99cie/ogrodnictwo-dla-dzieci-i-matki-w-ogrodzie-warzywnym-na-podw%C3%B3rku.jpg?s=612x612&w=0&k=20&c=EdlL7O-8eoKpFBotONaFVkdO4JvfmgiW3hBdFF0t5-g=",
    "https://media.istockphoto.com/id/154046398/pl/zdj%C4%99cie/ogr%C3%B3d-i-kwiaty.jpg?s=612x612&w=0&k=20&c=rGcONL6uMSPytWUFHuowBo84xINBx9COt3XJn7TnH4A=",
    "https://media.istockphoto.com/id/1368434564/pl/zdj%C4%99cie/skoszony-trawnik-w-ogrodzie.jpg?s=612x612&w=0&k=20&c=6oAQ02f4ueBWDQvrxuVqkQMukUAte7WJx2v116sID9s=",
    "https://media.istockphoto.com/id/1007240024/pl/zdj%C4%99cie/zarezerwuj-na-czarno-bia%C5%82ym-pufie-na-%C5%9Brodku-jasnego-tarasu-z-rattanow%C4%85-sof%C4%85-naro%C5%BCn%C4%85.jpg?s=612x612&w=0&k=20&c=OlOvUY-9lFHktH3N0nXkQdY1tSzxg_CgXmMBLR1ALrI=",
    "https://media.istockphoto.com/id/1140583913/pl/zdj%C4%99cie/pusty-prz%C3%B3d-lub-podw%C3%B3rko-z-miejscem-na-kopiowanie.jpg?s=612x612&w=0&k=20&c=G0kyzLOtJWSGsUdOt6JWN6weKOf9ijrTS9Rbjmnm6hc=",
    "https://media.istockphoto.com/id/957245348/pl/zdj%C4%99cie/drewniany-taras-otoczony-zieleni%C4%85.jpg?s=612x612&w=0&k=20&c=w-5g6_HTM6VPHFH1KHJbHtoUTBFqxmy-gW48jF6MLy4=",
    "https://media.istockphoto.com/id/952357308/pl/zdj%C4%99cie/kompost.jpg?s=612x612&w=0&k=20&c=gDsaghekxibkOA-Z_MVnJow9WTbvPbwsl7qXoSI39G4=",
    "https://media.istockphoto.com/id/118428127/pl/zdj%C4%99cie/meadow.jpg?s=612x612&w=0&k=20&c=qB6-vwpWy1ww0j5i752jv88P9W2aXKSKu7X_9BqoK2Y=",
    "https://media.istockphoto.com/id/1074265062/pl/zdj%C4%99cie/schludny-i-schludny-ogr%C3%B3d-z-granitow%C4%85-%C5%9Bcian%C4%85-i-solidnymi-schodami-blokowymi.jpg?s=612x612&w=0&k=20&c=cYwfIv23I_RERTmjoyNvo8cFs0b8EEW9aT9boS4QU8Y=",
    "https://media.istockphoto.com/id/1297093841/pl/zdj%C4%99cie/ro%C5%9Bliny-pomidorowe-z-dojrza%C5%82ymi-pomidorami-rosn%C4%85cymi-na-zewn%C4%85trz-w-anglii.jpg?s=612x612&w=0&k=20&c=1wW082FbRjiv05XN4nHR3WGJKABiCRU4OezUy6Qm5lI=",
    "https://media.istockphoto.com/id/478011074/pl/zdj%C4%99cie/ma%C5%82y-ogr%C3%B3d.jpg?s=612x612&w=0&k=20&c=MZPUjQIQsQ2ZY6RHKjawIMYO_eBTt7ul9__U_8-9s8g=",
    "https://media.istockphoto.com/id/1149062898/pl/zdj%C4%99cie/trawnika-w-domu-dzieci-w-rozmyciu-w-s%C5%82oneczny-letni-dzie%C5%84.jpg?s=612x612&w=0&k=20&c=UhRgZk43Afbe0LmktYy7EpWizgxzuQBBb2p8gMjSGxU=",
    "https://media.istockphoto.com/id/505400570/pl/zdj%C4%99cie/eleganckie-meble-nowoczesny-design-w-patio.jpg?s=612x612&w=0&k=20&c=RpORUNGwis5-JRO3OZGXN6psLYgIDhRcdZP76mjMmj4=",
    "https://media.istockphoto.com/id/498015683/pl/zdj%C4%99cie/dom-z-zewn%C4%85trz-z-krajobraz.jpg?s=612x612&w=0&k=20&c=3mom2TTmzEL1PxliTi6BknPw28DTqQK5UeQpj3E5z8c=",
    "https://media.istockphoto.com/id/1209136725/pl/zdj%C4%99cie/marmurowe-p%C5%82ytki-plac-zabaw-w-nocnym-podw%C3%B3rku-rezydencji-z-kwietnikami-i-trawnik-z-lamp%C4%85.jpg?s=612x612&w=0&k=20&c=552zhp1DyU-Gvn8WwbA69TH9m_LCxaSbWi4QBANKly0=",
    "https://media.istockphoto.com/id/627585412/pl/zdj%C4%99cie/pi%C4%99kna-panorama-zielonego-parku-miejskiego-o-%C5%9Bwicie.jpg?s=612x612&w=0&k=20&c=w3KzHJkVUxA3W21eFdCZkHVl0uJglPoRNEznTMzI-u0=",
]

if (Slider) Slider.setAttribute("src", Images[0])
let actualImage = 0

function NexImage() {
    if (actualImage < (Images.length - 1)) actualImage += 1
    else actualImage = 0
    ImageTransition()
}

function PrevImage() {
    if (actualImage === 0) actualImage = Images.length - 1
    else actualImage -= 1
    ImageTransition()
}

let interval = setInterval(NexImage, 10000)
let LastChanged = 0
function ImageTransition() {
    if (LastChanged === 0) {
        SliderSecond.setAttribute("src", Images[actualImage])
        SliderSecond.style.opacity = "1"
        Slider.style.opacity = "0"
        LastChanged = 1
    } else {
        Slider.setAttribute("src", Images[actualImage])
        SliderSecond.style.opacity = "0"
        Slider.style.opacity = "1"
        LastChanged = 0
    }
    clearInterval(interval)
    interval = setInterval(NexImage, 10000)
}

SliderNext.addEventListener("click", NexImage)
SliderPrev.addEventListener("click", PrevImage)

document.querySelector("#Image-grid-container-button")
    .addEventListener("click", function() {
        ImageGrid.style.maxHeight = "unset"
        this.parentElement.remove()
    }
)

SearchBt.addEventListener("click", function() {
    Searchbar.style.width = "100%"
    Searchbar.style.visibility = "unset"
    setTimeout(() => Searchbar.getElementsByTagName("input")[0].focus(), 200)
})

Searchbar.querySelector("input").addEventListener("blur", function() {
    Searchbar.style.width = "0%"
    Searchbar.style.visibility = "hidden"
})

function OpenMobileBar() {
    if (mobileBar.style.display === "none") {
        mobileBar.style.display = "block"
    } else {
        mobileBar.style.display = "none"
    }
}

function OpenMobileBarDropdown() {
    const el = document.querySelector(".mobile_dropdown")
    if (el.style.display === "none") {
        el.style.display = "flex"    
    } else {
        el.style.display = "none"
    }
}

Images.forEach(
    e => {
        ImageGrid.innerHTML += `<a href="${e}"><img src="${e}"/></a>`
    }
)


var macy = Macy({
    container: '#Image-grid-container',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 3
});

var lightbox = new SimpleLightbox('#Image-grid-container a');

