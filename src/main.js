
//console.log("API URL = http://dfgdfgfd.com/retrert?api_key=" + API_KEY);

//Crear una funcion asincrona
async function getTrendingMoviesPreview() {
    
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY); //fetch asincrono + API KEY
    const data = await res.json(); // Peticion asincrona que recibe data del fetch page y results
    const movies = data.results;

    //console.log('data= ', data, 'Results = ' , movies);
    //Iterar para cargar con cada pelicula las tarjetas del index
    movies.forEach(movie  => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList'); //apuntar al contenedor con el id y la clase
        
        const movieContainer = document.createElement('div'); //crear un div y 
        movieContainer.classList.add('movie-container');  // agregar la clase del css movie-container'

        const movieImg = document.createElement('img'); //crear un img 
        movieImg.classList.add('movie-img');  // agregar la clase del css 
        movieImg.setAttribute('alt',movie.title); //agregar atributo (tipo + valor) alt
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300' + movie.poster_path,); //agregar atributo (tipo + valor) alt
        
        //conectar los elementos creados al elemento del index
        movieContainer.appendChild(movieImg); // meter la img al div
        trendingPreviewMoviesContainer.appendChild(movieContainer); // meter el container a la seccion

    });

}

getTrendingMoviesPreview(); //Llamar a la funcion