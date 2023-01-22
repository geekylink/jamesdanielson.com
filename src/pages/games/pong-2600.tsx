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
            href="https://github.com/Gekinzuku/pong-2600"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Git <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out the code for Pong 2600 here.
            </p>
          </Link>
          {/* TODO: no build?<Link
            href="https://github.com/geekylink/M.E.R.G.E./releases/tag/v1.0.0"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Download to Play<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Download and run gold.exe to play
            </p>
          </Link>*/}
        </div>

        <div className={styles.textsection}>

          <div className={styles.text}>
            <strong>Pong 2600</strong><br /><br />

            An old homebrew pong clone for the Atari 2600 written in 6502 ASM back in 2010.<br /><br />

            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/Gekinzuku/pong-2600/main/screenshot.png"
              alt="Pong for the 2600" />
            </div>
        </div>
      </main>
    </>
  )
}

export default What;
