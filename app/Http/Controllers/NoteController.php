<?php

namespace App\Http\Controllers;

use App\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
	//list all notes
	public function index() {
		$ret = Note::all();

		return $ret->toJson();
	}

	//grab a note by id
	public function show($id) {
		$ret = Note::find($id);

		return $ret->toJson();
	}

	//save a new note
	public function store(Request $request) {
		$note = new Note;

		$note->title = $request->title;
		$note->content = $request->content;

		$note->save();

		return $note->id;
	}

	//update an existing note
	public function update($id, Request $request) {
		$note = Note::find($id);

		//todo: error if note not found

		$note->title = $request->title;
		$note->content = $request->content;

		$note->save();

		return $note->id;
	}
}
