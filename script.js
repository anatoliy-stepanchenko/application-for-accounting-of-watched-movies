const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const answer1 = prompt('One of the last watched films?', ''),
          answer2 = prompt('How would you rate it?', '');

    if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
        personalMovieDB.movies[answer1] = answer2;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }  
}

if (numberOfFilms < 10) {
    console.log('You have seen few films');
} else if (10 <= numberOfFilms < 30 ) {
    console.log('You are a classic viewer');
} else if (numberOfFilms >= 30) {
    console.log('you are a movie fan');
} else {
    console.log('Error');
}


console.log(personalMovieDB);