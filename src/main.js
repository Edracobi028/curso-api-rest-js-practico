
//console.log("API URL = http://dfgdfgfd.com/retrert?api_key=" + API_KEY);

//Crear una funcion asincrona para obtener las peliculas en tendencia
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

async function getCategoriesPreview() {
    
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY); //fetch asincrono + API KEY
    const data = await res.json(); // Peticion asincrona que recibe data del fetch page y results
    const categories = data.genres;

    //console.log('data= ', data, 'Results = ' , movies);
    //Iterar para cargar con cada pelicula las tarjetas del index
    categories.forEach(category  => {
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list'); //apuntar al article con el id de section y la clase del article
        
        const categoryContainer = document.createElement('div'); //crear un div
        categoryContainer.classList.add('category-container');  // agregar la clase del css que se le diseño'

        
        const categoryTitle = document.createElement('h3'); //crear un h3 
        categoryTitle.classList.add('category-title');  // agregar la clase del css que se le diseño
        categoryTitle.setAttribute('id', 'id' + category.id); //agregar atributo id (tipo + valor) 
        
        const categoryTitleText = document.createTextNode(category.name);

        //conectar los elementos creados al elemento del index
        categoryTitle.appendChild(categoryTitleText);  // meter el texto al h3
        categoryContainer.appendChild(categoryTitle); // meter la h3 al div
        previewCategoriesContainer.appendChild(categoryContainer); // meter el container a la seccion

    });

}

getTrendingMoviesPreview(); //Llamar a la funcion
getCategoriesPreview(); //Llamar a la funcion