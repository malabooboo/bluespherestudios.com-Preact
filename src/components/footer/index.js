import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import style from './style.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="site-width">
          <p>Copyright &copy; 2002 - {new Date().getFullYear()} Blue Sphere Studios</p>
        </div>
      </footer>
    );
  }
}