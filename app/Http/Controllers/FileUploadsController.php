<?php

namespace App\Http\Controllers;

use App\FileUploads;
use App\Http\Resources\FileCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FileUploadsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return FileCollection
	 */
    public function index()
    {
		return new FileCollection(FileUploads::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FileUploads  $fileUploads
     * @return \Illuminate\Http\Response
     */
    public function show(FileUploads $fileUploads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FileUploads  $fileUploads
     * @return \Illuminate\Http\Response
     */
    public function edit(FileUploads $fileUploads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FileUploads  $fileUploads
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FileUploads $fileUploads)
    {
        //
    }

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param Request $request
	 * @param  \App\FileUploads $fileUploads
	 * @return void
	 */
    public function destroy(Request $request, FileUploads $fileUploads)
    {
        return FileUploads::destroy($request->id);

    }
}
