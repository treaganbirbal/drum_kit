document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('keydown', (event) => {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    })
})