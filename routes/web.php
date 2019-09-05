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

// Route::permanentRedirect('/', '/notes');

// Route::prefix('/notes')->group(function() {
// 	Route::get('', function() {
// 		$notes = App\Note::all();

// 		return view('index')
// 			->with('notes', $notes);
// 	});

// 	Route::get('{id}', function(App\Note $id) {
// 		return 'Note';
// 	});
// });

Route::view('/{path?}', 'index');