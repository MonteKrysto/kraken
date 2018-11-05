<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/upload', 'UploadController@store');
Route::get('/files', 'FileUploadsController@index');
Route::delete('/file/{id}', 'FileUploadsController@destroy');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

