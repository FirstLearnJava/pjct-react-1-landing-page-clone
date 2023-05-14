import { Fragment } from 'react';
import styles from './App.module.scss';

// https://lunchmoney.app/

export default function App() {
  return (
    <Fragment>
      <div className={styles.landing}>
        <div className={styles.headerAndFirstSection}>
          <header className={styles.header}>
            <div/>
            <div className={styles.headerLinks}>
              <ul>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Why Lunch Money?</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a className={styles.loginButton}>Login</a>
                </li>
              </ul>
            </div>
          </header>
          <section
            className={`${styles.landingContainer} ${styles.shorterTop} ${styles.container}`}
          >
            <div className={styles.logoContainer}>
              <img
                src="https://lunchmoney.app/assets/images/mascot.png"
                alt="jumping coin logo"
                className={styles.coinLogo}
              />
              <div className={styles.coinShadow} />
            </div>

            <div className={styles.rightContent}>
              <a href="https://www.netlify.com/blog/2020/10/06/announcing-the-jammies-awards-winners/">
                <img
                  src="https://lunchmoney.app/assets/images/jamstackconf.svg"
                  alt="Jamstack logo"
                  className={styles.jamstackLogo}
                />
              </a>
              <span className={styles.jamstackDescription}>
                Web App of the Year
              </span>
              <h1>Delightfully simple personal finance & budgeting</h1>
              <h2>Made for you, the modern-day spender.</h2>
              <form className={styles.askEmail}>
                <input
                  className={styles.inputEmailaddress}
                  placeholder="Your email address"
                />
                <button className={styles.submitEmailButton}>
                  <span>Prepare for the future</span>
                </button>
              </form>
              <p>
                Try it free for 14 days! No credit card required. Cancel
                anytime.
              </p>
            </div>
          </section>
        </div>
      </div>
      <main></main>
      <footer></footer>
    </Fragment>
  );
}
