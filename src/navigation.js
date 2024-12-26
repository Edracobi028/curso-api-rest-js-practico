//Escuchar cuando click al boton busqueda y cambiar el hash search
searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=';
});
//Llamar boton ver mas
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

// Escuchar al dar click para Mandar a home
arrowBtn.addEventListener('click', () => {location.hash = '#home';})
window.addEventListener('DOMContentLoaded', navigator, false); //Escuchar evento al cargar la app + llamar la funcion + false
window.addEventListener('hashchange', navigator   , false); //Escuchar evento hashchange + llamar la funcion + false


//Para leer el hash cuando cargue la app y al cambiar el hash
function navigator() {
    console.log({location});
    
    //leer si empieza con trends
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if (location.hash.startsWith('#search=')){
        searchPage();
    }else if (location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }
    location.hash
}

function trendsPage() {
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long'); //Ocultar
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.remove('inactive'); //Aparecer
    arrowBtn.classList.remove('header-arrow--white'); //Aparecer
    headerTitle.classList.add('inactive'); //Ocultar
    headerCategoryTitle.classList.remove('inactive'); //Aparecer
    searchForm.classList.add('inactive'); //Ocultar

    trendingPreviewSection.classList.add('inactive'); //Aparecer
    categoriesPreviewSection.classList.add('inactive'); //Aparecer
    genericSection.classList.remove('inactive'); //Ocultar    
    movieDetailSection.classList.add('inactive'); //Ocultar
}
function searchPage() {
    console.log('Search!!');

    headerSection.classList.remove('header-container--long'); //Ocultar
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.remove('inactive'); //Aparecer
    arrowBtn.classList.remove('header-arrow--white'); //Aparecer
    headerTitle.classList.add('inactive'); //Ocultar
    headerCategoryTitle.classList.remove('inactive'); //Aparecer
    searchForm.classList.remove('inactive'); //Aparecer

    trendingPreviewSection.classList.add('inactive'); //Aparecer
    categoriesPreviewSection.classList.add('inactive'); //Aparecer
    genericSection.classList.remove('inactive'); //Ocultar    
    movieDetailSection.classList.add('inactive'); //Ocultar
}
function movieDetailsPage() {
    console.log('Movie!!');

    headerSection.classList.add('header-container--long'); //remover la clase 
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.remove('inactive'); //Aparecer
    arrowBtn.classList.add('header-arrow--white'); //Ocultar
    headerTitle.classList.add('inactive'); //Aparecer
    headerCategoryTitle.classList.add('inactive'); //Ocultar
    searchForm.classList.add('inactive'); //Ocultar

    trendingPreviewSection.classList.add('inactive'); //Ocultar
    categoriesPreviewSection.classList.add('inactive'); //Ocultar
    genericSection.classList.add('inactive'); //Ocultar    
    movieDetailSection.classList.remove('inactive'); //Aparecer 

}
function categoriesPage() {
    console.log('Categories!!');

    headerSection.classList.remove('header-container--long'); //aparecer
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.remove('inactive'); //Aparecer
    arrowBtn.classList.remove('header-arrow--white'); //Aparecer
    headerTitle.classList.add('inactive'); //Aparecer
    headerCategoryTitle.classList.remove('inactive'); //Aparecer
    searchForm.classList.add('inactive'); //Aparecer

    trendingPreviewSection.classList.add('inactive'); //Aparecer
    categoriesPreviewSection.classList.add('inactive'); //Aparecer
    genericSection.classList.remove('inactive'); //Ocultar    
    movieDetailSection.classList.add('inactive'); //Ocultar 
       
}
function homePage() {
    //Cuando entremos a home
    console.log('Home !!');

    headerSection.classList.remove('header-container--long'); //remover la clase 
    headerSection.style.background = ''; //Limpiar la propiedad background una imagen de poster de pelicula
    arrowBtn.classList.add('inactive'); //Ocultar flecha
    arrowBtn.classList.remove('header-arrow--white'); //Ocultar
    headerTitle.classList.remove('inactive'); //Aparecer
    headerCategoryTitle.classList.remove('inactive'); //Aparecer
    searchForm.classList.remove('inactive'); //Aparecer

    trendingPreviewSection.classList.remove('inactive'); //Aparecer
    categoriesPreviewSection.classList.remove('inactive'); //Aparecer
    genericSection.classList.add('inactive'); //Ocultar 
    movieDetailSection.classList.add('inactive'); //Ocultar

    //Ocultar
    getTrendingMoviesPreview(); //Llamar a la funcion
    getCategoriesPreview(); //Llamar a la funcion
}