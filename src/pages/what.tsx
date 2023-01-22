import Head from 'next/head'
import type { NextPage } from "next";
import { Inter } from '@next/font/google'
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ['latin'] })

const What: NextPage = () => {
  return (
    <>
      <Head>
        <title>James Danielson - What?</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
            <strong className={styles.headerlabel}>So what does James do?&nbsp;</strong>
            <Image
              width="0"
              height="0"
              sizes="10vw"
              className={styles.avatar} 
              src="/james.jpeg"
              alt="James Danielson"
            />
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
		        Welcome to James Danielson portfolio website.
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
            href="https://www.linkedin.com/in/james-danielson-33aba264/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Want to reach out? - Send me a message on LinkedIn.
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

        <div className={styles.textsection}>
          <p className={styles.text}>
            I&apos;ve worked on a bunch of different kinds of projects, and developed many tools for everything from fintech to cyber security and devops. Also, I like to make games and used to run a website for game modding.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            If you just want to look through the code.<br />
            You can explore my various public projects on my personal&nbsp;
            <a
              href="https://github.com/geekylink"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              </a>.<br />
              You can also explore my old projects related to game modding and homebrew
            development on the&nbsp;
            <a
              href="https://github.com/Gekinzuku"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Gekinzuku GitHub
              </a>.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="/games/merge">M.E.R.G.E.</Link></strong><br /><br />
            Simple cooperative unity game similar to asteroids, players must work together to defeat larger enemies by combining ships together.<br /><br />

            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/gameplay1.png" 
              alt="M.E.R.G.E. Gameplay Screenshot" 
            />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="/games/santaschallenge">Santa&apos;s Challenge</Link></strong><br /><br />
            A homebrew Nintendo DS game, a Chip&apos;s Challenge clone for Nintendo DS<br /><br />

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
            />&nbsp;
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="/games/pong-2600">Pong 2600</Link></strong><br /><br />
            A homebrew clone of pong for the Atari 2600 ROM written in 6502 ASM.<br /><br />

            <Image width="0" height="0" className={styles.screenshot} 
              src="https://raw.githubusercontent.com/Gekinzuku/pong-2600/main/screenshot.png" 
              alt="Pong 2600 Screenshot"
            />&nbsp;
          </p>
        </div>
      </main>
    </>
  )
}

export default What;
