import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import Hero from './section-hero';
import Contact from './section-contact';
import Home from '../routes/home';
import About from '../routes/about';
// import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" class="wrapper">
				<Header />
				<Hero path="/section-hero" />
				<Contact path="/section-contact" />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Hero path="/section-hero" />
					<About path="/about" />
					{/* <Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" /> */}
				</Router>
				<Footer />
			</div>
		);
	}
}
