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
        <title>James Danielson - Boy Scouts - Eagle</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
            <strong className={styles.headerlabel}>James Boy Scout Experience</strong>
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
		        An overview of my scouting experience.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            I was in Boy Scouts from the first rank, Bobcat, of Cub Scouts until I was
            eighteen years old and had earned both a spot in the&nbsp;
            <a href="https://oa-bsa.org/" target="_blank" rel="noopener noreferrer">Order of the Arrow</a> and achieved 
            the rank of <a href="https://en.wikipedia.org/wiki/Eagle_Scout">
            Eagle Scout</a>.<br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            While in Boy Scouts, I served as a <a href="https://www.scouting.org/training/youth/den-chief-training/" target="_blank" rel="noopener noreferrer">Den Chief</a> and helped lead
            and teach a group of cub scouts in my community and encourage them to transition to full Boy Scouts after Webelos.<br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>Eagle Project</strong><br /><br />
            Raised money and gathered donated lumber and other supplies to get
            enough materials to lead a group of Boy Scouts to build a set of
            raised beds to grow food for a local wildlife sanctuary in my
            hometown.<br /><br />
            <Image width="1365" height="2048" className={styles.thumbnail} src="/eagle.jpg" alt="Photo of receiving the Eagle badge."/><br />
            Photo of receiving the Eagle badge.
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
