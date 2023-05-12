import styles from './App.module.scss';

// https://lunchmoney.app/

export default function App() {
  return (
    <>
      <div className={styles.shorterTop}>
        <header className={styles.header}>
          <div className={styles.logoContainer}></div>
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
      </div>
      <main></main>
      <footer></footer>
    </>
  );
}
