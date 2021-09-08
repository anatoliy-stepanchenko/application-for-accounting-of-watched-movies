const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you watched?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        console.log('You have seen few films');
        } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30 ) {
            console.log('You are a classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('you are a movie fan');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGernes: function() {
        for (let i = 1; i < 2; i++) {
            const genres = prompt(`Enter your favorite genres separated by commas.`).toLocaleLowerCase();
            if (genres == '' || genres == null) {
                console.log("Your data isn't correct!");
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favotite ganre ${i+1} - is ${item}`);
        });
    }
};
