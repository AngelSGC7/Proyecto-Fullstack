const asyncHandler = require('express-async-handler');
const Movie = require('../models/Movie');


const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

const getMovieById = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});

const addMovie = asyncHandler(async (req, res) => {
    const { title, overview, release_date, poster_path, vote_average } = req.body;
    const movie = new Movie({
        title,
        overview,
        release_date,
        poster_path,
        vote_average,
    });
    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
});

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
};