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
        <title>James Danielson - Santa&apos;s Challenge</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Santa&apos;s Challenge</h1><br />

        <div className={styles.textsection}>
          <div className={styles.text}>
            A Chip&apos;s Challenge clone for Nintendo DS<br /><br />


          <Link
            href="https://github.com/Gekinzuku/santaschallenge"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub</Link> |&nbsp;
          <a
            href="https://github.com/Gekinzuku/santaschallenge/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download and play the ROM for your emulator or DS.
          </a><br /><br />

          <div className={styles.textleft}>
              <strong>Story:</strong>&nbsp;
              It is December, and Santa is preparing to give his toys to all
              the children of the world. But he got lost on December first
              when his sled crashed in the North Pole woodlands. Now he needs
              to find his way back in twenty-four days or else Christmas will
              be ruined for all the boys and girls of the world! To return,
              Santa must find and return as many presents as he can to his 
              sled, by giving them to his elf friend, and then passing the 
              level exit. But Santa must beware for lots of sneaky traps out 
              in the woods, or else Christmas might never come! Let us hope 
              Santa can return to the North Pole in time for Christmas...
              <br /><br />

            </div><div>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1YKwjQgeGw4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe><br /><br />
            <div className={styles.textleft}>

              <strong>Description:</strong>&nbsp;
              The three of us that made this game
              have always loved puzzle adventure games, but it seems that
              lately they are just getting easier. With random NPCs always 
              telling you what to do, and annoying endless lines of text to 
              scroll through which basically tell you how to solve the puzzles, 
              they just aren&apos;t the same. So our goal with Santa&apos;s Challenge was
              to create an older style puzzle game without all the modern
              conviences, only on the DS. We tied this theme in more by trying 
              to keep the graphics from being overly fancy and by using music 
              with an older feel to it.
              <br /><br />

              </div><div><Image width="254" height="382" 
              src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/title-screen.png" 
              alt="Santa's Challenge - Title Screen"
            />&nbsp;&nbsp;
            <Image width="254" height="382" 
              src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/level1.png" 
              alt="Santa's Challenge - Level One"
            />&nbsp;&nbsp;
            <Image width="254" height="382" 
              src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/level3.png" 
              alt="Santa's Challenge - Level Three"
            />
            <br /><br />
            </div><div className={styles.textleft}>

              <strong>Controls:</strong>&nbsp;
              The game is designed so it can easily be played by a right or 
              left handed person. You can move Santa by pushing the directions
              on the directional pad or by using the &apos;A&apos;, &apos;B&apos;, &apos;Y&apos;, and &apos;X&apos;
              buttons. Also, you can tap a tile and Santa will move to that 
              square. Santa always moves in the straightest path to the tile 
              and he will not dodge obstacles for you. If you wish to stop him 
              from moving on the path you set you can either set a new path by 
              tapping a different tile or pushing one of the buttons, or you 
              can tap Santa to make him completely stop moving. A special note
              is that if the path you set is the same number of squares up or 
              down as it is left or right from Santa, his first move will 
              always be vertical.
              <br /><br />

              <strong>Additional controls:</strong>&nbsp;
              Sometimes you may find yourself stuck or just wanting to restart
              the level, in this case pressing select will restart the level.
              By pressing start you can access the pause menu, from here you 
              can go to the title screen, save your progress, or return to the
              game. You can change the song by pressing &apos;L&apos; or &apos;R&apos; and if you
              press both at the same time the music will stop completely. To
              get the music back, press &apos;L&apos; or &apos;R&apos; again.
              <br /><br />

              </div><div>
              <Image width="254" height="382" 
                src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/credits.png" 
                alt="Santa's Challenge - Credits"
              />&nbsp;&nbsp;
              <Image width="254" height="382" 
                src="https://raw.githubusercontent.com/geekylink/santaschallenge/main/screenshots/about.png" 
                alt="Santa's Challenge - About"
              />
              <br /><br />
            </div><div className={styles.textleft}>

              <strong>How to Play:</strong>&nbsp;
              For the most part we want you to 
              have to figure out the game the way it was back in the day. But
              we&apos;ll tell you a few important points ;) The top screen 
              represents your stats. The first row of numbers is how many moves
              you have to beat the level with, if you run out of moves you will
              have to start the level all over. The two empty spaces are used
              for holding ice skates and fire boots which allow you to walk on
              ice and fire respectively. The number next to the present
              represents how many presents you must find to beat the level, the
              number after the warp is the level number you are on. The number
              after each key tells you how many of that key you have. To beat a
              level you must reach the warp within the amount of moves
              provided. However, normally an elf will block your path. To pass
              the elf you must have collected the designated amount of
              presents. Finally, if you land on the same square with one of the
              grinch&apos;s brothers they will steal your ice skates and fire boots.
              <br /><br />

              <strong>A special note:</strong>&nbsp;
              Please keep in mind this is a
              puzzle game. Certain levels are designed to look impossible but 
              every level has been tested. There is a way to beat every level
              if you look hard enough. Also, note that the first several levels
              are easy, it doesn&apos;t start getting tricky till around level ten.
              <br /><br />
            </div>
          </div>
        </div>
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
            href="/games"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Other Games<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out the other games I&apos;ve worked on.
            </p>
          </Link>
          <Link
            href="https://github.com/Gekinzuku/santaschallenge"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Git <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out the code for Santa&apos;s Challenge here.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}

export default What;
