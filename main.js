let animate = document.getElementById('animate')
let letters = animate.textContent.split('')
console.log(letters)
animate.innerHTML=''
letters.forEach((letter)=> {
    animate.innerHTML += `<span class="animate-s">${letter}</span>`
})
const letterSpans = [...document.querySelectorAll('.animate-s')]
letterSpans.forEach((letterSpan, idx) => {
    setTimeout(() => {
        letterSpan.classList.add('active')
    }, idx*130)
})
const heroText = document.getElementById('hero-text')
setTimeout(() => {
    heroText.classList.add('animate-r')
}, 1000)
