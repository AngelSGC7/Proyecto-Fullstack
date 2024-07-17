import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'

const MovieForm = ({ setMovies }) => {
    const [title, setTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [posterPath, setPosterPath] = useState('');
    const [voteAverage, setVoteAverage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newMovie = {
                title,
                overview,
                release_date: releaseDate,
                poster_path: posterPath,
                vote_average: parseFloat(voteAverage),
            };
            await axios.post('http://localhost:4000/api/movies', newMovie);
            setTitle('');
            setOverview('');
            setReleaseDate('');
            setPosterPath('');
            setVoteAverage('');
            const response = await axios.get('http://localhost:4000/api/movies');
            setMovies(response.data);
        } catch (error) {
            console.error('Error al agregar nueva película:', error);
        }
    };

    return (
        <div className="mt-4">
            <h3>Agregar Nueva Película</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <textarea className="form-control" value={overview} onChange={(e) => setOverview(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Fecha de Estreno</label>
                    <input type="date" className="form-control" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>URL del Poster</label>
                    <input type="text" className="form-control" value={posterPath} onChange={(e) => setPosterPath(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Rating</label>
                    <input type="number" step="0.1" className="form-control" value={voteAverage} onChange={(e) => setVoteAverage(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Agregar Película</button>
            </form>
        </div>
    );
};

export default MovieForm;