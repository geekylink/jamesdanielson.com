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
        <title>James Danielson - Websites</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
            <strong className={styles.headerlabel}>James Websites</strong>
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
		        A collection of websites I&apos;ve worked on.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="https://gekinzuku.com" target="_blank" rel="noopener noreferrer">Gekinzuku</Link></strong><br /><br />
            Old homebrew game and game modding community. Largely focused on modding the Nintendo 64 Legend of Zelda games. Active from 2008 - 2011.<br /><br />
            Used to feature a forum, small IRC network (Three Linux servers: Michigan, California, and London with a simple round-robin load balancer)<br /><br />
            <strong>Note:</strong> Has been dead for about ten years.
            <br /><br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="https://toothtreks.com" target="blank" rel="noopener noreferrer">Tooth Treks</Link></strong><br /><br />
            A website of mine for helping people from the USA &amp; Canada find
            affordable dental care abroad in Latin America and enjoy a dream
            getaway too. Many major dental operations are unaffordable back
            home, but using my substantial experience abroad, I can help find
            the service you need at a much more reasonable price.
            <br /><br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="https://jamesdanielson.dev" target="blank" rel="noopener noreferrer">James Danielson Development</Link></strong><br /><br />
            Another site of mine, mostly used for development tests. Homepage serves as a freelance hire hub for development work.
            <br /><br />
          </p>
        </div>


        {<div className={styles.textsection}>
          <p className={styles.text}>
            <strong><Link href="https://expatcitizen.com" target="blank" rel="noopener noreferrer">Expat Citizen</Link></strong><br /><br />
            An infrequently updated blog about oppurtunities abroad I have
            learned about. From my significant time abroad and meeting with
            many different people, I have learned a number of interesting
            tips and tricks. Blog is largely focused on residency abroad and
            some investment options to help diversify into the international 
            space.
            <br /><br />
          </p>
  </div>}


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
