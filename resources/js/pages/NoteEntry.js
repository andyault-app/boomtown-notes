import React, { useState, useEffect } from 'react';

const NoteEntry = ({ match, history }) => {
	const [loading, setLoading] = useState(true);
	const [note, setNote] = useState(undefined);
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState(undefined);

	const isNew = match.params.id === 'new';

	useEffect(() => {
		if (isNew) {
			setLoading(false);
			return;
		}

		//todo - editing
	}, [match.params.id]);

	const onSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		//build form data
		const body = {
			'title': formData.get('title'),
			'content': formData.get('content')
		};

		//submit
		const endpoint = '/api/notes';

		// if (!isNew)
		// 	endpoint += '/' + 

		setDisabled(true);

		axios.post(endpoint, body)
			.then(response => {
				history.push('/notes/' + response.data);
			})
			.catch(console.error);
	};

	return (
		<div className="container container-small page">
			{error ? (
				<div className="card w-100">{error}</div>
			) : loading ? (
				<div className="text-center">Loading...</div>
			) : (
				<form onSubmit={onSubmit} method="post" autoComplete="off">
					<div className="card">
						<h1>{isNew ? 'New Note' : 'Edit Note'}</h1>

						<div className="form-group">
							<label>
								<div className="form-label">Title</div>
								
								<input
									type="text"
									id="title"
									name="title"
									placeholder="Groceries"
									className="form-input"
									autoComplete="off"
									disabled={disabled}
									required
								/>
							</label>
						</div>

						<div className="form-group">
							<label>
								<div className="form-label">Content</div>

								<textarea
									id="content"
									name="content"
									placeholder="* Milk&#10;* Eggs&#10;..."
									className="form-input textarea"
									autoComplete="off"
									disabled={disabled}
								></textarea>
							</label>
						</div>

						<button type="submit" className="button button-submit" disabled={disabled}>
							Submit
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default NoteEntry;