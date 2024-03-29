<?php

namespace App\Http\Controllers;

use App\FileUploads;
use App\Http\Resources\FileCollection;
use App\Services\FileUploadService;
use http\Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UploadController extends Controller
{
    public function store(Request $request, FileUploadService $uploader)
	{
		try{
			if($request->hasFile('file'))
			{
				$res = $uploader->process($request->file('file'));
			}
		} catch (Exception $e) {
			return response()->json(['message' => $e->getMessage()], $e->getCode());
		}
		return new FileCollection(collect($res));
	}
}
