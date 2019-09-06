import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
	const links = {
		'/': 'List',
		'/notes/new': 'Add New'
	};

	return (
		<header className="app-header">
			<div className="container">
				<nav className="app-header-nav">
					<a href="/" className="app-header-nav-logo app-header-link">
						Notes
					</a>

					<ul className="app-header-nav-links">
						{Object.entries(links).map(([href, label], i) => (
							<li key={i} className="app-header-nav-link">
								<Link to={href} className="app-header-link">{label}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default AppHeader;