import React from 'react';

import AppHeader from '../components/AppHeader';

const DefaultLayout = ({ children }) => (
	<>
		<AppHeader />

		<main className="main">
			{children}
		</main>
	</>
);

export default DefaultLayout;