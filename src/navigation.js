
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
}
function searchPage() {
    console.log('Search!!');
}
function movieDetailsPage() {
    console.log('Movie!!');
}
function categoriesPage() {
    console.log('Categories!!');
}
function homePage() {
    console.log('Home !!');
    getTrendingMoviesPreview(); //Llamar a la funcion
    getCategoriesPreview(); //Llamar a la funcion
}