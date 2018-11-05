<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FileUploads extends Model
{
    protected $fillable = ['path', 'original_file_name', 'file_type', 'size'];

    public function user()
	{
		return $this->belongsTo(User::class);
	}
}
