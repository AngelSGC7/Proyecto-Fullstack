import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/movies');
                setMovies(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const handleLike = async (id) => {
        try {
            const response = await axios.patch(`http://localhost:4000/api/movies/${id}/like`);
            const updatedMovie = response.data;
            const updatedMovies = movies.map(movie => {
                if (movie._id === updatedMovie._id) {
                    return updatedMovie;
                }
                return movie;
            });
            setMovies(updatedMovies);
        } catch (error) {
            console.error('Error al dar like a la película:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/movies/${id}`);
            const updatedMovies = movies.filter(movie => movie._id !== id);
            setMovies(updatedMovies);
        } catch (error) {
            console.error('Error al eliminar la película:', error);
        }
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container mt-4">
            <h2>Catalogo de Peliculas</h2>
            <MovieList movies={movies} handleLike={handleLike} handleDelete={handleDelete} />
        </div>
    );
};

export default HomePage;