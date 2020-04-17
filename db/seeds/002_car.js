require('../../src/global');

const {Car} = include('/models');
const cars = require('./cars.json');
exports.seed = async knex => {
    await knex(Car.tableName).del();
    try {
        await Car.startTransaction();
        // eslint-disable-next-line lodash/prefer-lodash-method
        await Promise.all(cars.map(car => Car.insertOne(car)));
        return Car.commitTransaction();
    } catch(err) {
        console.log('err: ', err);
    }
};