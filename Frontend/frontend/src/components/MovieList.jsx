import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard/MovieCard';

const MovieList = ({ movies, handleLike, handleDelete }) => {
    return (
        <div className="row">
            {movies.map(movie => (
                <div className="col-md-4" key={movie._id}>
                    <MovieCard 
                        movie={movie} 
                        handleLike={handleLike} 
                        handleDelete={handleDelete} 
                    />
                </div>
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