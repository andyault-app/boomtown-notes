import React, { useState, useEffect } from 'react';

const NoteEntry = ({ match, history }) => {
	const [loading, setLoading] = useState(true);
	const [note, setNote] = useState({});
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState(undefined);
	const [formError, setFormError] = useState(undefined);

	const isNew = match.params.id === 'new';

	//on page load
	useEffect(() => {
		setError(undefined);
		setFormError(undefined);
		setDisabled(false);
		setNote({});

		if (isNew) {
			//have to wait one frame so that the page "loads"
			setTimeout(() => {
				setLoading(false);
			}, 0);
		} else {
			//if not new, fetch
			axios.get('/api/notes/' + match.params.id)
				.then(response => {
					setNote(response.data);
					setLoading(false);
				})
				.catch(setError);
		}

		return () => {
			setLoading(true);
		};
	}, [match.params.id]);

	const validate = (formData) => {
		const errs = [];

		if (!formData.get('title'))
			errs.push('Title is required');

		if (!formData.get('content'))
			errs.push('Content is required');

		if (errs.length) {
			setFormError(errs.join('\n'));
			return false;
		}

		return true;
	};

	//on submit
	const onSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		//validation
		if (!validate(formData))
			return false;

		//build form data
		const body = {
			'title': formData.get('title'),
			'content': formData.get('content')
		};

		//submit
		setDisabled(true);

		let endpoint = '/api/notes';

		if (isNew) {
			//if this is new, post
			axios.post(endpoint, body)
				.then(response => {
					history.push('/notes/' + response.data);
				})
				.catch(setError);
		} else {
			//if we're editing, put
			endpoint += '/' + match.params.id;

			axios.put(endpoint, body)
				.then(response => {
					//we could just update what's on the page...
					// setNote(body);
					// setDisabled(false);

					//but instead, go back to the list page
					history.push('/notes');
				})
				.catch(setError);
		}
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
						<h1 className="entry-title">{isNew ? 'New' : 'Edit'} Note</h1>

						{formError && (
							<div className="card form-errors">
								<strong>Errors:</strong>&#10;
								{formError}
							</div>
						)}

						<div className="form-group">
							<label>
								<div className="form-label">Title</div>
								
								<input
									type="text"
									id="title"
									name="title"
									placeholder="Groceries"
									defaultValue={note.title}
									className="form-input"
									autoComplete="off"
									disabled={disabled}
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
									defaultValue={note.content}
									className="form-input textarea"
									autoComplete="off"
									disabled={disabled}
								/>
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