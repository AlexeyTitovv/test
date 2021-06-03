"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

// const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//  ratingLastfilm = prompt('На сколько оцените его?', ''),
//  lastFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
//  ratingLastfilm1 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[lastFilm] = ratingLastfilm;
// personalMovieDB.movies[lastFilm1] = ratingLastfilm1;

// console.log(personalMovieDB);



// for(let i = 0; i < numberOfFilms; i++) {
//     const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//         ratingLastfilm = prompt('На сколько оцените его?', '');
//     if (lastFilm.length == 0 || 
//         ratingLastfilm.length == 0 || 
//         lastFilm.length > 5021 || 
//         ratingLastfilm.length > 50) {
//         i--;
//         continue;
//     }
//     personalMovieDB.movies[lastFilm] = ratingLastfilm;
// }

for(let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        ratingLastfilm = prompt('На сколько оцените его?', '');
        console.log(lastFilm);
    if (lastFilm == null ||
        ratingLastfilm == null ||
        lastFilm.length == 0 || 
        ratingLastfilm.length == 0 || 
        lastFilm.length > 50) {
        i--;
        continue;
    }
    personalMovieDB.movies[lastFilm] = ratingLastfilm;
}

if (personalMovieDB.count < 10) {
     alert('Просмотренно довольно мало фильмов');
}else if (personalMovieDB.count < 30) {
    alert('Вы классический зритель');
}else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
}else {
    alert('Ошибка');
}
console.log(personalMovieDB);