import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import style from './style.scss';

export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      hasBeenInView: false,
      inViewClass: '',
      inViewOffset: 0,
      sectionScrollPosition: 0
    };
  }

  componentDidMount() {
    this.setState({
      sectionScrollPosition: this.base.offsetTop,
      inViewOffset: window.innerHeight / 3
    });
  }

  render(props, state) {
    if (
      props.scroll > state.sectionScrollPosition - state.inViewOffset &&
      !state.hasBeenInView
    ) {
      this.setState({inViewClass: style['in-view'], hasBeenInView: true});
    }

    return (
      <section class={`${style['section-past-work']} ${state.inViewClass}`}>
        <div
          class={`site-width ${style['site-width']} ${style['work-container']}`}
        >
          <div class={style['secondary-content']}>
            <div class={style['secondary-content__heading']}>
              <h2>Past work</h2>
            </div>
            <div
              class={`${style['secondary-content__work']} ${
                style['secondary-content__work-1']
              }`}
            >
              <div class={style['content-filemaker']}>
                <div class={style['secondary-content__image-container']}>
                  <img
                    class={style['image__image']}
                    src="/assets/images/filemaker-homepage.jpg"
                    alt="FileMaker, Inc"
                  />
                  <div class={style['logo-overlay']}>
                    <svg
                      class={style['logo-overlay__logo']}
                      width="120"
                      height="142"
                      viewBox="0 0 120 142"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use xlinkHref="#apple-logo" />
                    </svg>
                  </div>
                </div>
                <div class={style['content']}>
                  <h3>FileMaker, an Apple subsidiary</h3>
                  <p>
                    From 2006 - 2013, I was part of FileMaker's web team,
                    involved in the front-end development of the corporate
                    website, an integral part of the multiple product launches
                    every year.
                  </p>
                </div>
              </div>
            </div>

            <div class={style['divider']} />

            <div
              class={`${style['secondary-content__work']} ${
                style['secondary-content__work-2']
              }`}
            >
              <div class={style['secondary-content__image-container']}>
                <img
                  class={style['image__image']}
                  src="/assets/images/mcafee-homepage.jpg"
                  alt="McAfee"
                />
                <div class={style['logo-overlay']}>
                  <svg
                    class={style['logo-overlay__logo']}
                    width="120"
                    height="139"
                    viewBox="0 0 120 139"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use xlinkHref="#mcafee-logo" />
                  </svg>
                </div>
              </div>
              <h3>McAfee</h3>
              <p>
                As a member of the Web User Interface team, I helped launch a
                major redesign of the consumer website that featured their first
                CSS-based, "tableless" design in 2005 and another site redesign
                in 2006.
              </p>
            </div>
            <div
              class={`${style['secondary-content__work']} ${
                style['secondary-content__work-3']
              }`}
            >
              <div class={style['secondary-content__image-container']}>
                <img
                  class={style['image__image']}
                  src="/assets/images/cityteam-international.jpg"
                  alt="Cityteam"
                />
                <div class={style['logo-overlay']}>
                  <img
                    class={`${style['logo-overlay__logo']} ${
                      style['cityteam-logo']
                    }`}
                    src="/assets/images/cityteam-logo.png"
                    alt="Cityteam logo"
                  />
                </div>
              </div>
              <h3>Cityteam</h3>
              <p>
                After years as a web developer for Cityteam, I returned to work
                with old colleagues to help redesign their site, bringing the
                site out of a tabled layout into a more modern design.
              </p>
            </div>

            <div class={style['divider']} />

            <p class={style['see-more']}>
              See more of my work history and education on{' '}
              <a href="https://www.linkedin.com/in/timmalabuyo/">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
