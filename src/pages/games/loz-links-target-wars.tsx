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
        <title>James Danielson - LoZ Link&apos;s Target Wars - A Fan Game</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>LoZ Link&apos;s Target Wars</h1><br />
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
            href="https://github.com/geekylink/loz-links-target-wars"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Git <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out the code for the LoZ fan game here.
            </p>
          </Link>
        </div>

        <div className={styles.textsection}>

          <div className={styles.text}>
            <strong>LoZ Link&apos;s Target Wars</strong><br /><br />

            <a href="https://github.com/geekylink/loz-links-target-wars/releases/tag/v1.0.0"target="_blank" rel="noopener noreferrer">
              Download to Play
            </a><br /><br />

            LoZ game where you try to shoot as many targets as possible before
            the time expires. Really old game from ~2008.<br /><br />

            Please note, all art is owned by Nintendo. I only wrote this as a
            fan game and distribute it for free.<br /><br />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/k6D3rDN3Rg0" className={styles.youtubeVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <br /><br />

            <strong>Scoring system:</strong><br /><br />

            You have sixty-seconds per round. Every second that goes by you
            lose a point. Every time you shoot and miss a target you lose
            another second and 10 points. Hitting a target however will give
            you a second back, the score of the target depends on how far away
            and how fast it is moving. So aiming for the farther and faster 
            targets can pay off (assuming you can hit them).<br /><br />

            <br /><br />

            <Image width="0" height="0" className={styles.thumbnail} 
              src="https://raw.githubusercontent.com/geekylink/loz-links-target-wars/main/screenshots/TitleScreen.png"
              alt="Title Screen" />&nbsp;&nbsp;
            <Image width="0" height="0" className={styles.thumbnail} 
              src="https://raw.githubusercontent.com/geekylink/loz-links-target-wars/main/screenshots/Gameplay1.png"
              alt="Gameplay" />
          </div>
        </div>
      </main>
    </>
  )
}

export default What;
