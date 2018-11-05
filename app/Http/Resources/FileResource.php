<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class FileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
		return [
			'id' => $this->id,
			'file' => $this->original_file_name,
			'type' => $this->file_type,
			'size' => $this->size,
			'created' => Carbon::parse($this->created_at)->format('m/d/Y'),
		];
    }
}
