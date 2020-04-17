const ModelCreate = include('helpers/modelCreate');
const tableName = 'user';//es el nombre de la tabla en la base de datos
const name = 'User';//es el nombre de nuestro objeto
const selectableProps = [
    'id',
    'first_name',
    'last_name',
    'email',
    'gender',
    'city',
    'deleted'
];

class User extends ModelCreate{
    constructor(props){
        super({
            ...props,
            tableName,
            name,
            selectableProps
        });

    }
}

module.exports = knex => new User({knex});