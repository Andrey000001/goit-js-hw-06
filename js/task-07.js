// const fontSizeControl = document.querySelector('#font-size-control')
// const text = document.querySelector('#text')

// fontSizeControl.addEventListener('input',(e) => {
//     if(e.currentTarget.value >= 16) {
//         text.textContent.style.fontSize = e.currentTarget.value
//     }
// })
const rangeInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

rangeInput.addEventListener('input',(e) => {
    // onText.style.fontSize = e.currentTarget.value + 'px'
    onText.style.fontSize = `${e.currentTarget.value}px`
})

