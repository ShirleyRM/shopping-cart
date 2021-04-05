fetch('http://www.omdbapi.com/?s=name&apikey=6a29d8c5')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    let allMovies = document.getElementById('card')
    allMovies.innerHTML = data.Search.map((data)=> {
      return `<p>${data.Title}</p>
      <img src='${data.Poster}'>`
  }).join("") 
  })
  .catch(err => console.log(err))

const search = document.querySelector('#btn');
const btn = document.querySelector('#search');
