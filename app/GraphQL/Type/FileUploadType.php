<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class FileUploadType extends GraphQLType
{
    protected $attributes = [
        'name' => 'FileUploadType',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
			'id' => [
				'type' => Type::nonNull(Type::int()),
				'description' => 'The ID of the uploaded file'
			],
			'user_id' => [
				'type' => Type::nonNull(Type::int()),
				'description' => 'The ID of the user who uploaded this file'
			],
			'path' => [
				'type' => Type::nonNull(Type::string()),
				'description' => 'The path where this file is stored'
			]
        ];
    }
}