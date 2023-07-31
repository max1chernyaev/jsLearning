
const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('The last movie you watched.?', ''),
	b = prompt('Rate the movie.', ''),
	c = prompt('The last movie you watched.', ''),
	d = prompt('Rate the movie.', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);