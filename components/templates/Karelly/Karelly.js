/* istanbul ignore file */
import { useEffect, useState } from "react";
import classNames from "classnames";
import Snowfall from "react-snowfall";

import styles from "./Karelly.module.scss";

export default function Karelly() {
  const [showFireText, setShowFireText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFireText(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const fireMainClasses = classNames(styles.textFire, { [styles.fire]: showFireText });
  const fireAuxClasses = classNames(styles.textFire, { [styles.burn]: showFireText });

  return (
    <section className={styles.wrapper}>
      <Snowfall style={{ position: "fixed", width: "100vw", height: "100vh" }} />
      <main className={styles.poem}>
        <header>
          <h1>
            Eyes of <span className={fireMainClasses}>F</span>
            <span className={fireAuxClasses}>i</span>
            <span className={fireMainClasses}>r</span>
            <span className={fireAuxClasses}>e</span>
          </h1>
          <h2>by Alex Wade, Dec. 2022</h2>
        </header>
        <p>
          Eyes of fire, heart of grace
          <br />
          Awoke my frozen soul.
          <br />
          The hour late and glasses deep,
          <br />A friendship ages old.
        </p>

        <p>
          Surely time revealed my truth:
          <br />
          A stranger of this world,
          <br />
          A man not made for hopes and dreams,
          <br />
          Not one who &quot;gets the girl.&quot;
        </p>

        <p>
          But cunning mind and lovely lips
          <br />
          Shined forth like rays of gold
          <br />
          Her graceful countenance intent,
          <br />A wonder to behold.
        </p>

        <p>
          With gentle smile and tender word
          <br />
          She drew me from the cold,
          <br />
          The answer to a thousand prayers,
          <br />
          When thought I&apos;d ne&apos;er be whole.
        </p>

        <p>
          With restless and excited sleep
          <br />
          I feared, if truth be told.
          <br />
          But I, with faith and hope in heart,
          <br />
          Surrendered my control.
        </p>

        <p>
          A new day came with heart in hand
          <br />
          And moments not to lose.
          <br />
          I called her up, I made a plan,
          <br />
          And left with no excuse.
        </p>

        <p>
          Atop those steps of orange brick,
          <br />
          She glowed across at me.
          <br />
          Shy, yet warmth and wit abound,
          <br />
          Her charms would set me free.
        </p>

        <p>
          Smile so radiant and sublime,
          <br />
          An intellect so keen,
          <br />
          A wisdom that in all my years,
          <br />
          I&apos;ve never felt or seen.
        </p>

        <p>
          Never have I known someone
          <br />
          From lives and worlds before;
          <br />
          And never have I felt so sure
          <br />
          Our love is evermore.
        </p>

        <p>
          And so, with shaking voice and hands,
          <br />
          I bow and take a knee.
          <br />
          Will you make me a happy man
          <br />
          And share your life with me?
        </p>

        <p>
          Your lustrous laugh, your light, your love
          <br />
          Eclipses all the rest.
          <br />
          You&apos;ve made my life worth living now.
          <br />
          To you, I&apos;ll give my best.
        </p>

        <p>
          Your eyes of fire and heart of grace
          <br />
          Have touched my ashen soul.
          <br />
          It gives me peace to ponder now
          <br />
          With you, I will grow old.
        </p>
      </main>
    </section>
  );
}
