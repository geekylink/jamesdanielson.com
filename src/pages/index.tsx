import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import Image from "next/image";

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>James Danielson - Home</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.header}>
            <strong className={styles.headerlabel}>James Danielson&nbsp;</strong>
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
              What Do You Do? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A list of my websites and various projects.
            </p>
          </Link>

          <Link
            href="#"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Where Are You? <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              I am from Michigan but have been all around, check out the various places I have been here. (Temporarily down)
            </p>
          </Link>

          <Link
            href="/Resume.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Résumé <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out my Résumé here.
            </p>
          </Link>

          <Link
            href="https://github.com/geekylink"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Explore my various software projects on GitHub
            </p>
          </Link>

          <Link
            href="https://github.com/Gekinzuku"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Old GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out my old projects for my old game development &amp; modding website.
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
            href="https://toothtreks.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tooth Treks <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Another website of mine - helping people from the USA &amp; Canada find affordable dental care abroad and enjoy a dream getaway too.
            </p>
          </Link>

          {/*<a
            href="https://toothtreks.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tooth Treks <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Helping people from the USA &amp; Canada find affordable dental care abroad and enjoy a dream getaway too.
            </p>
          </a>

          <a
            href="https://expatcitizen.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Expat Citizen <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A blog about opportunities in investments, residency, and citizenship options around the world
            </p>
          </a>

          <a
            href="https://gekinzuku.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Gekinzuku <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              An old game website, used to be dedicated to Nintendo game modding &amp; and homebrew development.
            </p>
          </a>

          <a
            href="https://jamesdanielson.dev"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Hire Me <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
  </a>*/}
        </div>
      </main>
    </>
  )
}
