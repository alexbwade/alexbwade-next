import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.portrait}>
        <div className={styles.photoBy}>
          Photo by
          <a href="https://www.badtactic.com/" target="_blank" rel="noreferrer">
            Matthew Thogerson
          </a>
        </div>
      </aside>
      <main className={styles.content}>
        <div>
          <h1>
            Hi there, I&apos;m <span>Alex</span>!
          </h1>
          <h2>
            I am a front-end focused <strong>software engineer</strong> based in the Portland area.
          </h2>
          <p>
            My passion is building fast, user-focused web applications that feel intuitive and add value to
            people&apos;s lives.
          </p>
          <p>
            <em>
              (Currently, I am working on the Filter Cloud team at{" "}
              <a
                className={styles.textLightspeed}
                href="https://www.lightspeedsystems.com/"
                target="_blank"
                rel="noreferrer"
              >
                Lightspeed Systems
              </a>
              .)
            </em>
          </p>
        </div>
      </main>
    </div>
  );
}
