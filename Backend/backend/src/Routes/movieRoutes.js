const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.patch('/:id/like', async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findByIdAndUpdate(movieId, { $inc: { vote_average: 1 } }, { new: true });
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error al actualizar el número de likes:', error);
        res.status(500).json({ error: 'Hubo un error al actualizar el número de likes de la película.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        res.status(500).json({ error: 'Hubo un error al obtener las películas.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, overview, release_date, poster_path, vote_average } = req.body;
        const newMovie = new Movie({
            title,
            overview,
            release_date,
            poster_path,
            vote_average,
        });
        const createdMovie = await newMovie.save();
        res.status(201).json(createdMovie);
    } catch (error) {
        console.error('Error al agregar nueva película:', error);
        res.status(500).json({ error: 'Hubo un error al agregar nueva película.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        if (!deletedMovie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        console.error('Error al eliminar película:', error);
        res.status(500).json({ error: 'Hubo un error al eliminar la película.' });
    }
});

module.exports = router;