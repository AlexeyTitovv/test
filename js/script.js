"use strict";


// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// {
//     let result = 50;
// }
// console.log(result);

// let number = 5;
// console.log("string" * 9);
// console.log(dsds);

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// console.log(obj['isMarried']);
// console.log(obj.name);

// let arr = ['plum', 'orange', 'apple', {}, []];

// console.log(arr[1]);

// alert('hello');

// const result = confirm('are you here?');
// console.log(result);

// const answer = +prompt('вам есть 18?', '18');
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Privet, ${user}`);


// console.log('arr' + "- object");
// console.log(4 + '5');

// let incr = 10,
//     decr = 10;

//     // ++incr;
//     // --decr;

// console.log(++incr);
// console.log(decr--);

// console.log(5%2);

// console.log(2*4 != "8");

// const isChecked = false,
//         isClose = true;

// console.log(isChecked && isClose);

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const perconalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const ratingLastfilm = prompt('На сколько оцените его?', '');
const lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
const ratingLastfilm1 = prompt('На сколько оцените его?', '');

perconalMovieDB.movies[lastFilm] = ratingLastfilm;
perconalMovieDB.movies[lastFilm1] = ratingLastfilm1;

console.log(perconalMovieDB);