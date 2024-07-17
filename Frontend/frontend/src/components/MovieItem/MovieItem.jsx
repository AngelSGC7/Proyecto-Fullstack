import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.css';

const MovieItem = ({ movie, handleLike, handleDelete }) => {
    return (
        <div className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
            <button onClick={() => handleLike(movie._id)}>Like</button>
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
        </div>
    );
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default MovieItem;