const textboxdiv= document.getElementById('text-box')
const typingArea = document.getElementById('typing-area')
const feedbackdiv = document.getElementById('feedback')
const timerBoxDiv = document.getElementById('timer')

const text= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
let wordsArray = text.split(' ')
textboxdiv.innerText = text
let wordCount = 0
highlight()

let errorCount = 0
feedbackdiv.innerText = errorCount

let timer = 0
timerBoxDiv.innerText = timer

setInterval(() => {
    timer++
    minutes = parseInt(timer / 60)
    seconds = (timer % 60).toString().padStart(2, '0')
    timerBoxDiv.innerText = minutes + ':' + seconds

}, 1000);

typingArea.focus()
typingArea.addEventListener('keydown', event => {
console.log(event.keyCode)
    if (event.keyCode == 32) {
        if (text.split(' ')[wordCount] != typingArea.value.split(' ')[wordCount]){
            //console.log('error!')
            wordsArray[wordCount] = '<span class= incorrect>' + wordsArray[wordCount]  + '</span>'
            errorCount++
            feedbackdiv.innerText = errorCount
        } else{
            wordsArray[wordCount] = '<span class= correct>' + wordsArray[wordCount]  + '</span>'
        }
        wordCount++
        highlight()

    }

})

function highlight() {
    let highlightedArray = Array.from(wordsArray)
    highlightedArray[wordCount] = '<span class=highlight>' + highlightedArray[wordCount]  + '</span>'
    textboxdiv.innerHTML = highlightedArray.join(' ')

}
