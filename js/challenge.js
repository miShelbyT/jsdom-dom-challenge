// As a user, I should see the timer increment every second once the page has loaded.

// create function on h1#counter upon initialization
// setInterval 1000 increment by 1
const counter = document.querySelector("h1#counter")
const likes = document.querySelector("ul.likes")
const buttons = document.querySelectorAll("button")
let paused = false

function incrementElement(element) {
  element.textContent = parseInt(element.textContent) + 1
}

function decrementCounter() {
  counter.textContent = parseInt(counter.textContent) - 1
}

function initialize() {
  const startCounter = setInterval(() => incrementElement(counter), 1000)
  return startCounter
}

let interval = initialize()


// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

document.addEventListener("click", function (event) {
  if (event.target.matches("#plus")) {
    incrementElement(counter)
  }
  else if (event.target.matches("#minus")) {
    decrementCounter()
  }
  // As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
  else if (event.target.matches("#heart")) {
    const lastChild = likes.lastElementChild
    if (!lastChild) {
      const li = document.createElement("li")
      li.dataset.id = counter.textContent
      li.innerHTML = `I've liked ${counter.textContent} <span id="times-liked">1</span> time!`
      likes.append(li)
    }
    else if (lastChild.dataset.id === counter.textContent) {
      const timesLiked = lastChild.querySelector("#times-liked")
      incrementElement(timesLiked)
    } else {
      const li = document.createElement("li")
      li.dataset.id = counter.textContent
      li.innerHTML = `I've liked ${counter.textContent} <span id="times-liked">1</span> time!`
      likes.append(li)
    }}
    else if (event.target.matches("#pause")) {
      if (!paused) {
        pause(interval)
        paused = true
      }
      else {
        interval = start()
        paused = false
      }
      // disable plus, minus, heart btns and pause counter
    }
  })

  // As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."

function pause(interval){
  clearInterval(interval)
  buttons.forEach(function(button) {
    if (button.matches("#pause")) {
      button.textContent = "resume"
    }
    else {
      button.disabled = true
    }
  })
}

// When 'resume' is clicked, it should restart the counter and re-enable the buttons. 

function start(){
  // initialize and...
  buttons.forEach(function(button) {
    if (button.matches("#pause")) {
      button.textContent = "pause"
    }
    else {
      button.disabled = false
    }
  })
  const resume = initialize()
  return resume
}

// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

const form = document.querySelector("#comment-form")
const div = document.querySelector("#list")
const ul = document.createElement("ul")
ul.dataset.id = 1
div.append(ul)

form.addEventListener("submit", function(event){
  event.preventDefault()
  const li = document.createElement("li")
  li.textContent = event.target.comment.value
  ul.append(li)

  event.target.reset()
})
