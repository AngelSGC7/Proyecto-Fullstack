const mongoose = require('mongoose');
const Movie = require('./src/models/Movie');
const connectDB = require('./src/config/database');

require('dotenv').config();

const seedDatabase = async () => {
    try {
        await connectDB();

        const moviesToAdd = [
            {
                title: 'Joker',
                overview: 'En GUASÓN, Arthur Fleck (Joaquin Phoenix) vive con su madre enferma (Frances Conroy) y trabaja como payaso de fiesta a principios de la década de 1980 en Ciudad Gótica. Lucha con una enfermedad mental que lo hace estallar en una risa siniestra en momentos extraños.',
                release_date: '2023-01-01',
                poster_path: '/backend/images/joker.jpg',
                vote_average: 0,
            },
            {
                title: 'Minions',
                overview: ' A lo largo del tiempo, los Minions han ido sirviendo a los más despreciables villanos. Después de que muchos de ellos fueran muriendo accidentalmente, desde un Tiranosaurio Rex hasta Napoleón, los Minions se encuentran ahora sin un amo al que servir, y caen en una terrible depresión.',
                release_date: '2023-02-01',
                poster_path: '/backend/images/minions.jpg',
                vote_average: 0,
            },
            {
                title: 'Us',
                overview: 'Adelaide (Lupita Nyongo) y Gabe Wilson (Winston Duke) son una pareja que decide llevar a sus hijos a su casa en la playa, esperando pasar unas vacaciones y desconectar junto a unos amigos. Pero al llegar la noche, algo terrorífico les ocurre. Delante de la casa, aparecen cuatro personas.',
                release_date: '2023-03-01',
                poster_path: '/backend/images/Us.jpg',
                vote_average: 0,
            },
        ];

        await Movie.insertMany(moviesToAdd);

        console.log('Database seeded successfully');

        mongoose.connection.close();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

seedDatabase();