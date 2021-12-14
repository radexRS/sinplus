indexes: [
    {
        unique: true,
        fields: ['user_id', 'count', 'name']
    }
]

indexes: [{ unique: true, fields: ['someUnique'] }]

curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/size_charts/measurements?site_id=$SITE_ID 