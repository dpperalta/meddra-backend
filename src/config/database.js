const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('meddra', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MedDRA Database connected successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    sequelize,
    connectDB
};