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
		        An overview of things James Danielson has worked on.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            I&apos;ve worked on a bunch of different kinds of projects, and developed many tools for everything from fintech to cyber security and devops. Also, I like to make games and used to run a website for game modding.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            If you just want to look through the code, you can explore my 
            various public projects on my personal&nbsp;
            <a
              href="https://github.com/geekylink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              </a>.<br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            Back in highschool, I ran a website dedicated to modding old Nintendo
            games as well as homebrew game development called&nbsp;
            <Link href="https://gekinzuku.com">
              Gekinzuku
            </Link>. The website has been dead for years at this point.<br />

            However, if you&apos;re interested, you can find the old projects on: <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Gekinzuku">Gekinzuku github</Link><br/>
            You can also find some of the old videos on: <Link target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/geekylink">YouTube</Link>
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="/games">James Games</Link></strong><br /><br />
            Some various games I&apos;ve made over the years.<br /><br />

            <Link href="/games/merge">
              <Image width="0" height="0" className={styles.thumbnail}
                src="https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/gameplay1.png" 
                alt="Gameplay Screenshot" />
            </Link>
            <Link href="/games/santaschallenge">
              <Image width="254" height="382" 
                src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/level3.png" 
                alt="Santa's Challenge - Level One"
              />
            </Link>
            <Link href="/games/pong-2600">
              <Image width="0" height="0" className={styles.thumbnail}
                src="https://raw.githubusercontent.com/Gekinzuku/pong-2600/main/screenshot.png" 
                alt="Pong 2600 Screenshot"
              />
            </Link>
            <Link href="/games/loz-links-target-wars">
            <Image width="0" height="0" className={styles.thumbnail} 
              src="https://raw.githubusercontent.com/geekylink/loz-links-target-wars/main/screenshots/Gameplay1.png"
              alt="Gameplay" />
            </Link>
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

      </main>
    </>
  )
}

export default What;
