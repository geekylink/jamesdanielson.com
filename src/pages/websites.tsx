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
            <strong><Link href="/games/merge">M.E.R.G.E.</Link></strong><br /><br />
            Simple cooperative unity game similar to asteroids, players must work together to defeat larger enemies by combining ships together.<br /><br />

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
