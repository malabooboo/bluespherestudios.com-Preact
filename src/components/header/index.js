import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import style from './style.scss';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      currentScrollPosition: 0,
      scrollDirection: ''
    }
  }

  // currentScrollPosition = 0;
  // scrollDirection = '';

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll(this.state));
    window.addEventListener('scroll', () => {
      const initialPosition = this.state.currentScrollPosition;
      const newScrollPosition = document.documentElement.scrollTop;
      
      if (newScrollPosition < initialPosition) {
        this.setState({scrollDirection: ''});
      } else {
      this.setState({scrollDirection: style['header--up']});
      }

      this.setState({currentScrollPosition: newScrollPosition});
    });
  }

  // handleScroll(state) {
  //   const initialPosition = state.currentScrollPosition;
  //   const newScrollPosition = document.documentElement.scrollTop;
    
  //   if (newScrollPosition > initialPosition) {
  //     this.setState({scrollDirection: 'down'});
  //   } else {
  //     this.setState({scrollDirection: 'up'});
  //   }

  //   this.setState({currentScrollPosition: newScrollPosition});
  // }

  render(props, state) {
    return (
      <header class={`${style['header']} ${state.scrollDirection}`}>
        <div class={`site-width ${style['site-width']}`}>
          <div class={style['logo']}>
            <div class={style['logo__img']}>
              <img src="/assets/images/bss-logo.png" alt="Blue Sphere Studios logo" />
            </div>
            <h1>Blue Sphere Studios</h1>
          </div>
          <nav>
            <ul class={style['global-nav']}>
              <li class={style['nav-item']}>
                <span><Link href="#home" class={style['gnav-link']} activeClassName={style['active']}>Home</Link></span>
              </li>
              <li class={style['nav-item']}>
                <span><Link href="#work" class={style['gnav-link']} activeClassName={style['active']}>Work</Link></span>
              </li>
              <li class={style['nav-item']}>
                <span><Link href="#about" class={`${style['gnav-link']} ${style['mobile-hidden']}`} activeClassName={style['active']}>About</Link></span>
              </li>
            </ul>
          </nav>
          {/* <nav>
            <Link activeClassName={style.active} href="/">
              Home
            </Link>
            <Link activeClassName={style.active} href="/photos">
              Photos
            </Link>
            <Link activeClassName={style.active} href="/about">
              About
            </Link>
          </nav> */}
        </div>
      </header>
    );
  }
}
