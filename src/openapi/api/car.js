module.exports = {
    '/api/car': {
        get: {
            security: [],
            summary: 'Car List',
            parameters: [
                {
                    in: 'query',
                    name: 'year',
                    schema: {
                        type: 'integer',
                        //pattern: `^[A-Z]{2}$`
                    },
                    description: 'Autos por año',
                    
                }
            ],
            responses: {
                200: {
                    description: 'Car List Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        
                                    }
                                }
                            }
                        }
                    }
                },
                default: {
                description: 'Error',
                content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    }
};