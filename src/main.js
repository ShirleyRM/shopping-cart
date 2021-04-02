fetch('http://www.omdbapi.com/?apikey=6a29d8c5&t=star+wars')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    let allMovies = document.getElementById('movies')
    allMovies.innerHTML = `
            <h2>${data.Title}</h2>
            <img src='${data.Poster}'>
            `;
  })
  .catch(err => console.log(err))

const search = document.querySelector('#btn');
const btn = document.querySelector('#search');

search.onclick = function (event) {
  event.preventDefault();
  const value = search.value;
  fetch('http://www.omdbapi.com/?apikey=6a29d8c5')
    .then((res) => res.json())
    .then((data) => {
      console.log('Data: ', data);
    })
    .catch((err) => {
      console.log('Err: ', err);
    });
  console.log('Value: ', value);
}
