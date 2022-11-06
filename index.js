const negyzetek = document.querySelectorAll('.negyzet')
const mole = document.querySelector('.mole')
const ido = document.querySelector('#ido')
const pontok = document.querySelector('#pontok')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomnegyzet() 
{
    negyzetek.forEach(square => {
        square.classList.remove('mole')
    })

    let randompozicio = negyzetek[Math.floor(Math.random() * 25)]
    randompozicio.classList.add('mole')

    hitPosition = randompozicio.id
}

negyzetek.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if (square.id == hitPosition) {
            result++;
            pontok.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomnegyzet, 750)
}

moveMole()

function visszaszamlalas() {
    currentTime--
    ido.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(visszaszamlalasTimerId)
        clearInterval(timerId)
        alert('JÁTÉK VÉGE! A pontszámod: ' + result)
    }
}

let visszaszamlalasTimerId = setInterval(visszaszamlalas, 1000)
























