console.log(`Hello World`)

let inputField = document.querySelector(`input`)
let movieList = document.querySelector(`ul`)
let message = document.querySelector(`#message`)

let addMovie = (event) => {
    event.preventDefault()
    let movie = document.createElement(`li`)
    let movieTitle = document.createElement(`span`)
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener(`click`, crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement(`button`)
    deleteBtn.textContent = `X`
    deleteBtn.addEventListener(`click`, deleteMovie)
    movie.appendChild(deleteBtn)
    movieList.appendChild(movie)
    inputField.value = ``
}

let deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `Movie deleted!`
}

let form = document.querySelector(`form`)

form.addEventListener(`submit`, addMovie)

let crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains(`checked`)){
        message.textContent = `Movie Watched!`
    }else{
        message.textContent = `Movie added back!`
    }
}