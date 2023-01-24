import Head from 'next/head'
import type { NextPage } from "next";
import { Inter } from '@next/font/google'
import Image from "next/image";
import Link from 'next/link';

import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ['latin'] })

const What: NextPage = () => {
  return (
    <>
      <Head>
        <title>James Danielson - M.E.R.G.E. - Simple cooperative unity game similar to asteroids</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>M.E.R.G.E.</h1><br />

        <div className={styles.textsection}>

          <div className={styles.text}>
            <Link
              href="https://github.com/geekylink/M.E.R.G.E."
              target="_blank"
              rel="noopener noreferrer"
            >GitHub</Link> |&nbsp;

            <a href="https://github.com/geekylink/loz-links-target-wars/releases/tag/v1.0.0"target="_blank" rel="noopener noreferrer">Download to Play</a><br /><br />


            Simple cooperative unity game similar to asteroids, players must work together to defeat larger enemies by combining ships together.<br /><br />
            Players don&apos;t &quot;die&quot; you lose levels, and powerups, only lose by losing all planets.<br /><br />
            You can&apos;t kill the bigger baddies without merging ships with at least one other player for more powerful shots.<br /><br />


            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/info2.png"
              alt="How to Play - Information" />
            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/info.png" 
              alt="Players and Enemies" />
            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/controls.png" 
              alt="How to Play - Controls" />
            <br /><br /><strong>Some gameplay:</strong><br />
            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/gameplay1.png" 
              alt="Gameplay Screenshot" />
            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/gameplay2.png" 
              alt="Gameplay Screenshot" />
            <br /><br /><strong>End of game stats</strong><br />
            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/stats1.png" 
              alt="End Game Stats" />
            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/stats2.png" 
              alt="End Game Stats" />
          </div>
        </div>
        <div className={styles.grid}>
          <Link
            href="/"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Home <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Back to the home page.
            </p>
          </Link>
          <Link
            href="/what"
            className={styles.card}
          >
            <h2 className={inter.className}>
              What Else? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out my various projects here.
            </p>
          </Link>
          <Link
            href="/games"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Other Games<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out the other games I&apos;ve worked on.
            </p>
          </Link>
          <Link
            href="https://github.com/geekylink/M.E.R.G.E."
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Git <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out the code for M.E.R.G.E. here.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}

export default What;
