import React from 'react';

const AppHeader = () => {
	const links = {
		'/': 'List'
	};

	return (
		<header class="app-header">
			<div class="container">
				<nav class="app-header-nav">
					<a href="/" class="app-header-nav-logo app-header-link">
						Notes
					</a>

					<ul class="app-header-nav-links">
						{Object.entries(links).map(([href, label], i) => (
							<li key={i} class="app-header-nav-link">
								<a href={href} class="app-header-link">{label}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default AppHeader;