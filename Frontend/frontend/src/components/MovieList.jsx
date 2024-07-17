import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem/MovieItem';

const MovieList = ({ movies, handleLike, handleDelete }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieItem 
                    key={movie._id} 
                    movie={movie} 
                    handleLike={handleLike} 
                    handleDelete={handleDelete} 
                />
            ))}
        </div>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default MovieList;