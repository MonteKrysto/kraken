<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FileUpload extends Model
{
	public $fillable = ['user_id', 'path'];
}
