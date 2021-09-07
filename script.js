let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
    console.log('You have seen few films');
    } else if (10 <= numberOfFilms && numberOfFilms < 30 ) {
        console.log('You are a classic viewer');
    } else if (numberOfFilms >= 30) {
        console.log('you are a movie fan');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGernes() {
    for (let i = 1; i <= 3; i++) {
        const gerne = prompt(`What is your faivorite ganer by namber ${i}?`);
        personalMovieDB.genres[i-1] = gerne;
    }
}
writeYourGernes();