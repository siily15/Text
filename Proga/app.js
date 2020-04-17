const textboxdiv= document.getElementById('text-box')
const typingArea = document.getElementById('typing-area')
const feedbackdiv = document.getElementById('feedback')

const text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et semper enim. Phasellus dictum, felis vel porttitor ornare, odio est tincidunt turpis, vitae vehicula felis dolor a tellus. Nulla facilisi. Morbi malesuada purus eu erat ullamcorper, convallis bibendum enim finibus. Suspendisse egestas tellus justo, sit amet euismod dui consequat sit amet. Fusce consectetur vehicula ante at interdum. Nunc nunc ex, laoreet et auctor quis, blandit in urna. Vestibulum ut tristique nisl, nec ultrices elit.'
textboxdiv.innerText = text
let wordCount = 0
highlight()

let errorCount = 0
feedbackdiv.innerText = errorCount

typingArea.focus()
typingArea.addEventListener('keydown', event => {

if (event.keyCode == 32) {
    console.log(typingArea.value)
    text.split(' ')[wordCount] != typingArea.value.split(' ')[wordCount]}
        errorCount++
        feedbackdiv.innerText = errorCount
    
    wordCount++
    highlight()



})

function highlight() {
    let wordsArray = text.split(' ')
    wordsArray[wordCount] = '<span class=highlight>' + wordsArray[wordCount]  + '</span>'
    textboxdiv.innerHTML = wordsArray.join(' ')

}