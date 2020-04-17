require('../../src/global');

const {User} = include('/models');
const users = require('./users.json');
exports.seed = async knex => {
    await knex(User.tableName).del();
    try {
        await User.startTransaction();
        // eslint-disable-next-line lodash/prefer-lodash-method
        await Promise.all(users.map(user => User.insertOne(user))) ;
        return User.commitTransaction();
    } catch(err) {
        console.log('err: ', err);
    }
};