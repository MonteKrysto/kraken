<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\UploadType;
use Rebing\GraphQL\Support\SelectFields;

class FileUploadMutation extends Mutation
{
    protected $attributes = [
        'name' => 'FileUploadMutation',
        'description' => 'A mutation'
    ];

    public function type()
    {
        return GraphQL::type('FileUploadType');
    }

    public function args()
    {
        return [
			'file' => [
				'name' => 'uploadFile',
				'type' => new UploadType($this->attributes['name']),
			]
        ];
    }

    public function resolve($root, $args, SelectFields $fields, ResolveInfo $info)
    {
        $select = $fields->getSelect();
        $with = $fields->getRelations();
		$file = $args['file'];

		Log::info('file = '.json_encode($file));
        return [];
    }
}