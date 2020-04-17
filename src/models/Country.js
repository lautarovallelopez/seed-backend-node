const ModelCreate = include('helpers/modelCreate');
const tableName = 'country';//es el nombre de la tabla en la base de datos
const name = 'Country';//es el nombre de nuestro objeto
const selectableProps = [
    'id',
    'name',
    'iso2',
    'code',
    'deleted'
];

class Country extends ModelCreate{
    constructor(props){
        super({
            ...props,
            tableName,
            name,
            selectableProps
        });

    }
}

module.exports = knex => new Country({knex});