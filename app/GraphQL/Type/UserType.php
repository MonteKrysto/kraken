<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType
{
	protected $attributes = [
		'name' => 'UserType',
		'description' => 'A user'
	];

	public function fields()
	{
		return [
			'id' => [
				'type' => Type::nonNull(Type::int()),
				'description' => 'The id of the user'
			],
			'name' => [
				'type' => Type::nonNull(Type::string()),
				'description' => 'The name of the user'
			],
			'email' => [
				'type' => Type::nonNull(Type::string()),
				'description' => 'The email of the user'
			],
		];
	}
}