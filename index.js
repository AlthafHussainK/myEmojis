let myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")

function appendEmoji() {
  emojiContainer.innerHTML = ""
  for (let i = 0; i < myEmojis.length; i++){
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
  }
}
appendEmoji()

const pushButton = document.getElementById('push-btn')

let emojiInput = document.getElementById('emoji-input')

function addToEnd(){
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    console.log(myEmojis)
  }
  appendEmoji()
}

pushButton.addEventListener('click', addToEnd)

function addToBeginning() {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    console.log(myEmojis)
  }
  appendEmoji()
}


const unshiftButton = document.getElementById("unshift-btn")
unshiftButton.addEventListener('click', addToBeginning)


const shiftBtn = document.getElementById('shift-btn')
shiftBtn.addEventListener('click', function(){
    myEmojis.shift()
    console.log(myEmojis)
    appendEmoji()
})

const popBtn = document.getElementById('pop-btn')
popBtn.addEventListener('click', function(){
  myEmojis.pop()
  appendEmoji()
})
