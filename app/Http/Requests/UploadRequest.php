<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
    	Log::info($this->input());
		$rules = [];
		$files = count($this->get('files'));
		Log::info("how many? ".$files);
		foreach(range(0, $files) as $index) {
			$rules['files.' . $index] = 'image|mimes:jpeg,bmp,png,pdf,doc,docx,xls,rtf,txt,text,csv,log,wav,mpeg,mpg,mp4,mp4v,mpg4,mov,wav,pptx,ppt|max:2000';
		}

		return $rules;
    }
}
