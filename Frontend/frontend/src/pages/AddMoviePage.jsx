import React, { useState } from 'react';
import MovieForm from '../components/MovieForm';

const AddMoviePage = () => {
    const [movies, setMovies] = useState([]);

    return (
        <div className="container mt-4">
            <h2>Agregar Película</h2>
            <MovieForm setMovies={setMovies} />
        </div>
    );
};

export default AddMoviePage;