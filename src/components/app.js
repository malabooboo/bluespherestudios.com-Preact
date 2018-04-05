import {h, Component} from 'preact';
// import {Router} from 'preact-router';

import Header from './header';
import Footer from './footer';
import Hero from './section-hero';
import PastWork from './section-past-work';
import About from './section-about';
import Contact from './section-contact';
import Home from '../routes/home';
// import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
  require('preact/debug');
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollPosition = document.documentElement.scrollTop;
      this.setState({scroll: scrollPosition});
    });
  }

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render(props, state) {
    return (
      <div id="app" class="wrapper">
        <Header scroll={state.scroll} />
        <Hero path="/section-hero" />
        <PastWork path="/section-past-work" scroll={state.scroll} />
        <About path="/section-about" scroll={state.scroll} />
        <Contact path="/section-contact" scroll={state.scroll} />
        {/* <Router onChange={this.handleRoute}>
					<Home path="/" />
					<Hero path="/section-hero" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router> */}
        <Footer />
      </div>
    );
  }
}
