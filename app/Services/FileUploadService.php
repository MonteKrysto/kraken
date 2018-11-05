<?php namespace App\Services;

use App\FileUploads;
use Illuminate\Support\Facades\Log;

class FileUploadService
{
	public function process($files)
	{
		$savedFiles = [];
		foreach ($files as $file) {
			$filename = $file->store(storage_path() . '/uploads');
			$savedFiles[] = FileUploads::create([
				'path' => $filename,
				'original_file_name' => $file->getClientOriginalName(),
				'file_type' => $file->getClientOriginalExtension(),
				'size' => $file->getClientSize()
			]);
		}
		Log::info('saved = ' .json_encode($savedFiles));
		return $savedFiles;
	}
}