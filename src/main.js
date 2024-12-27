
//console.log("API URL = http://dfgdfgfd.com/retrert?api_key=" + API_KEY);
//Crear una instancia de axios con la config como la base de url y apikey
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

//Crear una funcion asincrona para obtener las peliculas en tendencia
async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day'); //obtener por axios llamar api asincrono + API KEY
    const movies = data.results;
    trendingMoviesPreviewList.innerHTML = "";
    //Iterar para cargar con cada pelicula las tarjetas del index
    movies.forEach(movie  => {
        
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
        trendingMoviesPreviewList.appendChild(movieContainer); // meter el container a la seccion

    });

}

async function getCategoriesPreview() {
    
    const { data } = await api('genre/movie/list'); //obtener por axios llamar api asincrono + API KEY
    const categories = data.genres;

    //Limpiar
    categoriesPreviewList.innerHTML = "";
    //Iterar para cargar con cada pelicula las tarjetas del index
    categories.forEach(category  => {
        
        const categoryContainer = document.createElement('div'); //crear un div
        categoryContainer.classList.add('category-container');  // agregar la clase del css que se le diseño'

        
        const categoryTitle = document.createElement('h3'); //crear un h3 
        categoryTitle.classList.add('category-title');  // agregar la clase del css que se le diseño
        categoryTitle.setAttribute('id', 'id' + category.id); //agregar atributo id (tipo + valor) 
        
        const categoryTitleText = document.createTextNode(category.name);

        //conectar los elementos creados al elemento del index
        categoryTitle.appendChild(categoryTitleText);  // meter el texto al h3
        categoryContainer.appendChild(categoryTitle); // meter la h3 al div
        categoriesPreviewList.appendChild(categoryContainer); // meter el container a la seccion

    });

}

