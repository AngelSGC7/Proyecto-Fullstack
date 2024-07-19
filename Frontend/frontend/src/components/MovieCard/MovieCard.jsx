import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, handleLike, handleDelete }) => {
    const truncateOverview = (text, limit) => {
        if (text.length <= limit) {
            return text;
        }
        return text.substring(0, limit) + '...';
    };

    return (
        <div className="card mb-3">
            <img src={movie.poster_path} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{truncateOverview(movie.overview, 100)}</p>
                <button className="btn btn-primary mr-2" onClick={() => handleLike(movie._id)}>Like</button>
                <button className="btn btn-danger" onClick={() => handleDelete(movie._id)}>Delete</button>
            </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    }).isRequired,
    handleLike: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default MovieCard;