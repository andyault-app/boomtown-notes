import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
	const [loading, setLoading] = useState(true);
	const [notes, setNotes] = useState(undefined);
	const [error, setError] = useState(undefined);

	useEffect(() => {
		axios.get('/api/notes')
			.then(response => {
				setNotes(response.data);
				setLoading(false);
			})
			.catch(setError);
	}, []);

	return (
		<div className="container page">
			{error ? (
				<div className="card w-100">{error}</div>
			) : loading ? (
				<div className="text-center">Loading...</div>
			) : (
				<div className="notes">
					{notes.map((note, i) => (
						<Link to={'/notes/' + note.id} key={i} className="card w-25 note">
							<h2 className="note-title">{note.title}</h2>
							<p className="note-content">{note.content}</p>
							<h4 className="note-updated">Updated {note.updated_at}</h4>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Index;