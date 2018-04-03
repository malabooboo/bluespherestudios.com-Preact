import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import style from './style.scss';

export default class Hero extends Component {

  render() {
    return(
      <section class={style['section-hero']}>
        <div class="site-width">
          <div class={style['avatar-frame']}>
            <img src="/assets/images/tim-material-avatar-2-2x.png" alt="Tim's avatar" class={style['avatar']} />
          </div>
          <h1 class={style['intro']}>Blue Sphere Studios is the portfolio of front end web developer, <strong>Tim Malabuyo</strong>,
          currently @Google, coding from <span class={style['strikethrough']}>London</span> the sunny Bay Area, California.</h1>
        </div>
      </section>
    );
  }
}
