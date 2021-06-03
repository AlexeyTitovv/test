"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};     

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
            ratingLastfilm = prompt('На сколько оцените его?', '');
            console.log(lastFilm);
        if (lastFilm == null || ratingLastfilm == null || lastFilm == '' || ratingLastfilm == '' || lastFilm.length > 50) {
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm] = ratingLastfilm;
    }
}

rememberMyFilms();

function decectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
   } else if (personalMovieDB.count < 30) {
       alert('Вы классический зритель');
   } else if (personalMovieDB.count > 30) {
       alert('Вы киноман');
   } else {
       alert('Ошибка');
   }
}

decectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const favoriteGenre = prompt(`Ваш любимы жанр под номером ${i}`, '');
        personalMovieDB.genres.push(favoriteGenre);
    }
}

writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}

showMyDB();





// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 30;
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);




// const logger = function() {
//     console.log('Hello');
// };


// logger();

// const cals = (a, b) => { return a + b;};

// console.log(cals(3,4));


// let str = 'rweer';
// const arr = [1, 2, 3];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// // str = str.toUpperCase();
// console.log(str);


// const test = '12.3px';

// console.log(parseFloat(test));