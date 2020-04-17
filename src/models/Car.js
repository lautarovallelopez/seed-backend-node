const ModelCreate = include('helpers/modelCreate');
const tableName = 'car';//es el nombre de la tabla en la base de datos
const name = 'Car';//es el nombre de nuestro objeto
const selectableProps = [
    'id',
    'brand',
    'model',
    'year',
    'deleted'
];

class Car extends ModelCreate{
    constructor(props){
        super({
            ...props,
            tableName,
            name,
            selectableProps
        });

    }
}

module.exports = knex => new Car({knex});