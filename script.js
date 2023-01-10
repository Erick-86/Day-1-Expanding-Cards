const imgContainer = document.querySelectorAll('.card')
imgContainer.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveClass()
        card.classList.add('active')
    })
})

function removeActiveClass() {
    imgContainer.forEach((card) => {
        card.classList.remove('active')  
    })
}