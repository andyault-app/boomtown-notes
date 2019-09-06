<?php

namespace App\Http\Controllers;

use App\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index() {
    	$ret = Note::all();

    	return $ret->toJson();
    }

    public function show() {
    	$ret = Note::where('id', 1)
    		->get();

		return $ret->toJson();
    }

    public function store(Request $request) {
    	$note = new Note;

    	$note->title = $request->title;
    	$note->content = $request->content;

    	$note->save();

    	return $note->id;
    }

    public function update() {}
}
