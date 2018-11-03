<?php

namespace App\GraphQL\Query;

use App\FileUpload;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\SelectFields;
use Rebing\GraphQL\Support\Query;

class AllFilesQuery extends Query
{
    protected $attributes = [
        'name' => 'AllFilesQuery',
        'description' => 'Get all uploaded file names'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('FileUploadType'));
    }

    public function args()
    {
        return [
			'id' => [
				'name' => 'id',
				'type' => Type::int()
			]
        ];
    }

    public function resolve($root, $args, SelectFields $fields, ResolveInfo $info)
    {
        $select = $fields->getSelect();
        $with = $fields->getRelations();

		if (isset($args['id'])) {
			return FileUpload::find($args['id']);
		} else {
			return FileUpload::all();
		}
    }


}