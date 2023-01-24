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
        <h1>Pong 2600</h1><br />

        <div className={styles.textsection}>

          <div className={styles.text}>

          <Link
            href="https://github.com/Gekinzuku/pong-2600"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub</Link><br /><br />

            An old homebrew pong clone for the Atari 2600 written in 6502 ASM back in 2010.<br /><br />

            This was my first project with 6502 ASM.<br /><br />

            <strong>Gameplay:</strong><br /><br />

            At the start of the game you press the &quot;Select&quot; button a few times. This will set the size of your paddle. Once you are happy, press &quot;Reset.&quot; This will start the game. Every time you score a point your paddle gets smaller. You win when your paddle no longer exists. The last few points can be pretty tricky. Of course after that you can press &quot;Reset&quot; again to play again.<br /><br />

            Also, no sound... that&apos;s just kinda the way it is.<br /><br />

            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/t-PAIlWh2R4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe><br /><br />

            <a href="https://raw.githubusercontent.com/Gekinzuku/pong-2600/main/screenshot.png">
              <Image width="0" height="0" className={styles.thumbnail} 
                src="https://raw.githubusercontent.com/Gekinzuku/pong-2600/main/screenshot.png"
                alt="Pong for the 2600" />
            </a>
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
            href="https://github.com/Gekinzuku/pong-2600"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Git <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out the code for Pong 2600 here.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}

export default What;
