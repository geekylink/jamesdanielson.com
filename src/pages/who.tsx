import Head from 'next/head'
import type { NextPage } from "next";
import { Inter } from '@next/font/google'
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ['latin'] })

const Who: NextPage = () => {
  return (
    <>
      <Head>
        <title>James Danielson - Who?</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
            <strong className={styles.headerlabel}>So who is James?&nbsp;</strong>
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
            href="/what"
            className={styles.card}
          >
            <h2 className={inter.className}>
              What do you do? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A list of my websites and various projects.
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
            Hey, I&apos;m James Danielson and I am a software developer with over ten
            years of experience. I&apos;ve worked in a wide variety of fields from
            fintech to cyber security, and I like to make games sometimes. <br />
            If you&apos;re looking for a software developer, check out my&nbsp;
            <Link className={styles.link} href="/Resume.pdf">
              Résumé
            </Link> - You can also find me on&nbsp;
            <Link className={styles.link} 
              href="https://www.linkedin.com/in/james-danielson-33aba264/"
            >
              LinkedIn
            </Link>.
          </p>
        </div>
        <div className={styles.textsection}>
          <p className={styles.text}>
            I&apos;ve lived on three continents and visited over twenty countries thus
            far, with a tendancy to always be on the move. As a result, I have a
            full office, that can fit into my backpack. Complete with an extra
            portable monitor, and more than enough computing power to simulate an
            entire network of connected machines; even backup power and internet.
            {/* TODO: Check out my app that shows all the locations I have been with photos */}
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            Back in highschool, I ran a website dedicated to modding old Nintendo
            games as well as homebrew game development called&nbsp;
            <Link className={styles.link} href="https://gekinzuku.com">
              Gekinzuku
            </Link>. The website has been dead for years at this point.<br />

            However, if you&apos;re interested, you can find the old projects on: <Link className={styles.link} href="https://github.com/Gekinzuku">Gekinzuku github</Link><br/>
            You can also find some of the old videos on: <Link className={styles.link} href="https://www.youtube.com/geekylink">YouTube</Link>
          </p>
      </div>
      </main>
    </>
  )
}

export default Who;
