<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

//api
//get /notes: list notes
//post /notes: create note
//get /notes/#: single note
//put /notes/#: edit note

//web
//get /: redirect to /notes
//get /notes: list notes
//get /notes/#: note entry

Route::permanentRedirect('/', '/notes');

Route::prefix('/notes')->group(function() {
	Route::get('/', function() {
		return 'Notes';
	});

	Route::get('/{id}', function(App\Note $id) {
		return 'Note';
	});
});