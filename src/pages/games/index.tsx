import Head from 'next/head'
import type { NextPage } from "next";
import { Inter } from '@next/font/google'
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ['latin'] })

const What: NextPage = () => {
  return (
    <>
      <Head>
        <title>James Danielson - Games</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
            <strong className={styles.headerlabel}>James Games</strong>
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
		        A collection of games I&apos;ve worked on.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="/games/merge">M.E.R.G.E.</Link></strong><br /><br />
            Simple cooperative unity game similar to asteroids, players must work together to defeat larger enemies by combining ships together.<br /><br />

            <Link href="/games/merge">
              <Image width="0" height="0" className={styles.thumbnail} 
                src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/gameplay1.png" 
                alt="M.E.R.G.E. Gameplay Screenshot" 
              />
            </Link><br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="/games/santaschallenge">Santa&apos;s Challenge</Link></strong><br /><br />
            A homebrew Nintendo DS game, a Chip&apos;s Challenge clone for Nintendo DS<br /><br />

            <Link href="/games/santaschallenge">
              <Image width="254" height="382" 
                src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/title-screen.png" 
                alt="Santa's Challenge - Title Screen"
              />&nbsp;
              <Image width="254" height="382" 
                src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/level1.png" 
                alt="Santa's Challenge - Level One" 
              />&nbsp;
              <Image width="254" height="382" 
                src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/level3.png" 
                alt="Santa's Challenge - Level Two" 
              />
            </Link><br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="/games/pong-2600">Pong 2600</Link></strong><br /><br />
            A homebrew clone of pong for the Atari 2600 ROM written in 6502 ASM.<br /><br />

            <Link href="/games/pong-2600">
              <Image width="0" height="0" className={styles.thumbnail} 
                src="https://raw.githubusercontent.com/Gekinzuku/pong-2600/main/screenshot.png" 
                alt="Pong 2600 Screenshot"
              />
            </Link><br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="/games/loz-links-target-wars">LoZ - Link&apos;s Target Wars</Link></strong><br /><br />
            A simple fan game where you play as Link and try to shoot as many targets as you can in a limited amount of time.<br /><br />

            <Link href="/games/loz-links-target-wars">
              <Image width="0" height="0" className={styles.thumbnail} 
                src="https://raw.githubusercontent.com/geekylink/loz-links-target-wars/main/screenshots/Gameplay1.png"
                alt="Gameplay" />
            </Link><br />
          </p>
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
            href="/who"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Who are you? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Who is James Danielson?
            </p>
          </Link>
          <Link
            href="/Resume.pdf"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Résumé <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out my Résumé here.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}

export default What;
