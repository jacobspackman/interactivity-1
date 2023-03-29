console.log(`Hello World`)

let inputField = document.querySelector(`input`)
let movieList = document.querySelector(`ul`)

let addMovie = (event) => {
    event.preventDefault()
    let movie = document.createElement(`li`)
    let movieTitle = document.createElement(`span`)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    movieList.appendChild(movie)
    inputField.value = ``
}

let form = document.querySelector(`form`)

form.addEventListener(`submit`, addMovie)