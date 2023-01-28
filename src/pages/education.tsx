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
        <title>James Danielson - Education</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
            <strong className={styles.headerlabel}>James Education</strong>
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
		        An overview of my experience in education.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            You can also check out my job experience&nbsp;
            <Link href="/jobs">
              here
            </Link>.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong className={styles.title}>Pre-University</strong><br /><br />
		        I had a rather unusual experience growing up. My mother had a 
            masters in education and decided to homeschool me after about half
            of first grade in public school.<br /><br />

            For high school, to improve my chances of getting into a good
            university, my mother enrolled me into&nbsp;
            <a href="https://www.oakmeadow.com/high-school/" target="_blank"
            rel="noopener noreferrer" >
              Oak Meadow High School
            </a> a distance learning high school for remote learning.
            <br /><br />

            During this time, I ended up running a small website and IRC 
            network for a homebrew game development and game modding community
            that was primarily focused on old Nintendo game systems.
            Check out my <Link href="/websites" target="_blank" rel="noopener noreferrer">websites</Link> page for more
            information.<br /><br />

            My parents encouraged me to spend my time learning programming
            but they also enrolled me in Boy Scouts where I stayed until I was
            eighteen years old and had earned both a spot in the&nbsp;
            <a href="https://oa-bsa.org/" target="_blank" rel="noopener noreferrer">Order of the Arrow</a> and achieved 
            the rank of <a href="https://en.wikipedia.org/wiki/Eagle_Scout">
            Eagle Scout</a>. You can read more about my experience in Boy 
            Scouts & Eagle project <Link href="/eagle" >here</Link>.<br /><br />
            
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong className={styles.title}>University</strong><br /><br />
		        <a target="_blank"
            rel="noopener noreferrer" href="https://www.engin.umich.edu/">University of Michigan, College of Engineering, Ann Arbor, MI</a><br /><br />
            <strong>Graduation</strong>: December 2015<br /><br />
            Bachelor’s of Engineering, Computer Science Major, Music Minor. - G.P.A. - 3.502<br /><br />
            <strong>Courses:</strong><br /><br />

              * Operating Systems<br />
              * Networks<br />
              * Security<br />
              * Compilers<br />
              * Cryptography<br />
              * Databases<br />
              * Game Design<br />
              * Linear Algebra<br />

            <br /><br />
            <a target="_blank"
            rel="noopener noreferrer" href="https://en.sjtu.edu.cn/">JiaoTong University (上海交通大学)</a>
            <br /><br />
            Study Abroad, Shanghai, China - May 2015 - August 2015<br /><br />
            <strong>Courses:</strong><br /><br />

              * Chinese Language<br />
              * Chinese Culture<br />

          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong className={styles.title}>Teaching Experience</strong>
            <br /><br />

		        <strong>University of Michigan</strong> - Ann Arbor, MI<br /><br />
            Tutor & IA (Instructional Aid) - September 2012 - December 2012
            <br /><br />
            I helped write and teach the labs for EECS 101, a new class at the
            University of Michigan which was designed to encourage interest in
            Computer Science for students with zero prior experience.
            <br /><br />
            Taught students basic smartphone app design using the MIT App 
            Inventor to introduce programming logic to beginners.
            <br /><br />
            Held regular weekly office hours for students to get help with 
            homework and other issues.<br /><br /><br />

            <strong>Honor North-America Education</strong> - Shanghai, China
            <br /><br />
            Part time teacher at an international high school in 
            Shanghai, China.<br /><br />
            Developed curricula and taught Western Music History & Introductory
            Computer Programming with Python<br /><br /><br />

            <strong>Boy Scouts</strong><br /><br />
            While in Boy Scouts, I served as a <a href="https://www.scouting.org/training/youth/den-chief-training/" target="_blank" rel="noopener noreferrer">Den Chief</a> and helped lead
            and teach a group of cub scouts in my community and encourage them to transition to full Boy Scouts after Webelos.<br />
          </p>
        </div>
 
        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong className={styles.title}>Computer Skills</strong><br /><br />
            I&apos;ve used a lot of programming languages on a bunch of different projects.<br /><br />
            <strong>Programming Languages</strong> (Roughly most experience -&gt; least):<br />
            * Python<br />
            * C/C++<br />
            * Javascript / Typescript<br />
            * C#<br />
            * Rust<br />
            * Bash<br />
            * PowerShell<br />
            * Java<br />
            * PHP<br />
            * Assembly (6502)<br /><br />

          I also have signficant experience with running Linux, *BSD, and 
          Windows systems, as well building software & packaging it for all of
          them as well.<br /><br />

          <strong>Distros I&apos;ve Used</strong> (Roughly most experience -&gt; least):<br />
          * Ubuntu<br />
          * Arch Linux<br />
          * Alpine<br />
          * Red Hat<br />
          * Fedora<br />
          * CentOS<br />
          * Amazon Linux<br />
          * FreeBSD<br />
          * OpenBSD<br /><br />

          <strong>Other Software Experience</strong><br />
          * Git<br />
          * SQL/MySQL<br />
          * Sqlite<br />
          * Visual Studio<br />
          * GDB<br />
          * WinDbg<br />
          </p>
        </div>
        <div className={styles.textsection}>
          <p className={styles.text}>
          <strong className={styles.title}>Other</strong><br /><br />
          - Excellent swimmer, literally been swimming since I was six months old<br /><br />
          
          - Practiced piano for around ten years<br /><br />
          - Wood carving<br /><br />
          - Basic construction with lumber & plumbing<br /><br />
          - Attended various entrepreneurship seminars and business classes.<br /><br />

          <strong>Language:</strong><br /><br />
          - Studied Chinese & Chinese Culture in Shanghai, China<br /><br />
          - Studied Spanish in South America in a small town in Ecuador<br /><br />
          - DuoLingo user since 2016, languages I&apos;ve studied on it:<br />
          * Spanish (+)<br />
          * Chinese (+)<br />
          * Russian<br />
          * Arabic<br />
          * Portuguese (-)<br />
          * Japanese (-)<br />
          * German (-)<br />
          * Korean (-)<br />
          <br />

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
