fetch('http://www.omdbapi.com/?s=name&apikey=6a29d8c5')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    let allMovies = document.getElementById('card')
    allMovies.innerHTML = data.Search.map((data)=> {
      return `
      <div class="container">
        <div class="card-img">
        <img src='${data.Poster}'></div>
        <div class="card-content"><h3><span>Title:</span> ${data.Title}</h3>
        <h3><span>Year:</span> ${data.Year}</h3></div>
      </div>
      `
  }).join("") 
  })
  .catch(err => console.log(err))

