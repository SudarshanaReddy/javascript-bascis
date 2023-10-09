const movies = [
    { title : 'a', year: 2018, rating: 4.5},
    { title : 'b', year: 2019, rating: 4.7},
    { title : 'c', year: 2020, rating: 3},
    { title : 'd', year: 2018, rating: 3},

];

const movieTitles = movies
                    .filter(movie => movie.rating > 4)
                    .sort((a,b) => a.rating - b.rating)
                    .reverse()
                    .map(movie => movie.title);

 console.log(movieTitles);