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
		        A brief autobiography of James Danielson.
          </p>
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
            Graduated from the University of Michigan with a degree in
            Computer Science and studied a semester abroad at JiaoTong 
            University in Shanghai, China.<br/><br />

            Also have experience teaching
            both at a university and high school level, along with a strange 
            mix of other educational experience which you can read more 
            about&nbsp;
            <Link className={styles.link} href="/education">here</Link>.
            <br /><br />

            You can also check out my job experience&nbsp;
            <Link className={styles.link} href="/jobs">here</Link>.
            <br /><br />

            Prior to university, I was a member of Boy Scouts and achieved the
            rank of Eagle, you can read about my scouting experience&nbsp;
            <Link className={styles.link}  href="/eagle">here</Link>.
          </p>
        </div>
        <div className={styles.textsection}>
          <p className={styles.text}>
            I&apos;ve lived on three continents and visited over twenty countries thus
            far, with a tendancy to always be on the move. As a result, I have a
            full office, that can fit into my backpack. Complete with an extra
            portable monitor, and more than enough computing power to simulate an
            entire network of connected machines; even backup power and data
            for internet.<br /><br />
            I tend to travel slowly, staying in one location for a long time 
            (sometimes years) and gradually exploring the surrounding area.
            <br /><br />
            Check out my web app which shows the places I have visited: <a href="#"><em>Broken</em></a><br />
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
        </div>
      </main>
    </>
  )
}

export default Who;
