<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class CommentType extends GraphQLType
{
    protected $attributes = [
        'name' => 'CommentType',
        'description' => 'describes fields of a comment'
    ];

    public function fields()
    {
        return [
			'id' => [
				'type' => Type::nonNull(Type::int()),
				'description' => 'The ID of the comment'
			],
			'user_id' => [
				'type' => Type::nonNull(Type::int()),
				'description' => 'The user ID this comment belongs to'
			],
			'file_upload_id' => [
				'type' => Type::nonNull(Type::int()),
				'description' => 'The uploaded file this comment belongs to'
			],
			'comment' => [
				'type' => Type::nonNull(Type::string()),
				'description' => 'The comment'
			]

        ];
    }
}