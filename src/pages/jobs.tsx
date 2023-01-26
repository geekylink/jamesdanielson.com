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
        <title>James Danielson - Jobs</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
            <strong className={styles.headerlabel}>James Jobs</strong>
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
		        An overview of the many different jobs I&apos;ve had.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            You can also check out my educational experience&nbsp;
            <Link href="/education">
              here
            </Link>.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>Six Nines IT</strong> -&nbsp;
            Michigan (Remote)<br />
            Software Engineer<br />
            November 2021 -&gt; Present<br /><br />

            Small software consultancy, working with a variety of major
            corporations primarily to stand up and manage cloud based 
            workstations to improve work-from-home experience and standardize
            the workstation experience.
            <br /><br />

            Provided a leading role with a client, lead weekly client syncs.
            Gathered information and requests from client, created&nbsp;
            <a href="https://www.atlassian.com/software/jira" 
              target="_blank" rel="noopener noreferrer"
            >
            Jira</a> tickets and distributed tasks to meet client needs.
            <br /><br />

            Also worked to design, deploy, and manage render farms to the cloud
            for processing major artistic projects.
            <br /><br />

            Helped design and deploy various solutions, such as custom AWS 
            Lambdas, to problems that would arise and provided customization
            of modules to meet business needs.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>NIKSUN</strong> -&nbsp;
            Michigan (Remote)<br />
            Software Engineer<br />
            August 2020 -&gt; November 2021<br /><br />

            Designed and developed several prototypes for high availability,
            data integrity/security analysis tools for a varierty of systems:
            *BSD, Linux, Windows with on project requiring cross-platform
            support for all three. Primarily prototyped with Python, but C++
            modules were developed for improved performance.<br /><br />

            Helped interview, hire, and train new team members for further
            product development beyond the inital prototypes.<br /><br />

            Worked with and had root access to many Linux &amp; *BSD servers on
            a daily basis. Troubleshooted odd issues, checked logs, etc.
            <br /><br />

            Implemented a Linux data center feature into an old enterprise
            edition of Windows with Python and scapy.<br /><br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>Pine River Mines LLC</strong> -&nbsp;
            Michigan (Remote)<br />
            Technology Partner & Founder<br />
            November 2017 -&gt; December 2020<br /><br />

            Founded and ran a small family-owned cryptocurrency mining company.
            Primarily focused on mining with ASICs (Bitcoin, Litecoin, etc) 
            and also mined with GPU rigs (Primarily ETH).<br /><br />
            Constructed a miniature data center from an old hunting shack, 
            upgraded electrical and network capability to meet the requirements
            of a small mine.<br /><br />

            Developed a custom multi-threaded using python, PyQT, C and 
            Arduinos for managing the system and monitoring temperature, 
            humidity and status of all mining equipment with remote control.
            Miners and sensors fed data into a centralized on-site Raspberry Pi
            which can then be remotely connected to for management.<br /><br />

            Also implemented functionality to automatically determine the most
            profitable coin for miners to be mining and automatically switch
            ASICs and other equipment to other set of pools to maximize 
            profitability.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>Microsoft</strong> -&nbsp;
            Redmond, WA<br />
            Software Development Engineer<br />
            February 2016 -&gt; October 2017<br /><br />

            Worked in the Operating Systems Group (OSG) Security Active Defense
            team doing research on vulnerabilities and developing systems to
            mitigate them.<br /><br />

            Developed a new tool called ProcessMitigations, written in C++ 
            (Windows API), for managing security settings on Windows 10 
            Enterprise through Powershell. Allows individual mitigations to be
            toggled on a system-wide or application based level. Also allows
            user to export or import as a security policy to be used on other
            machines as well. Check out the tool on the Powershell
            Gallery&nbsp;
            <a 
              href="https://www.powershellgallery.com/packages/ProcessMitigations/1.0.7"
              target="_blank" rel="noopener noreferrer"
            >
              here
            </a>.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>Microsoft</strong> -&nbsp;
            Redmond, WA<br />
            Software Development Engineer Intern<br />
            May 2014 -&gt; August 2014<br /><br />

            Developed a static variable tracking tool in C++ for security
            code reviews on the Windows code base.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>Microsoft</strong> -&nbsp;
            Redmond, WA<br />
            Software Development Engineer Intern<br />
            May 2013 -&gt; August 2013<br /><br />

            Worked on application frameworks for Windows Phone implementing 
            features in C++ to expose functionality in Visual Studio for other
            developers to use.<br /><br />
            Also developed test application to expose and test added 
            functionality.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>University of Michigan</strong> -&nbsp;
            Ann Arbor, MI<br />
            Research Assistant<br />
            September 2013 -&gt; April 2014<br /><br />

            Helped with various tasks and research with the Network and 
            Security Research Group (NSRG) on Python based software binary
            analysis in an attempt to develop a novel way to protect machines
            from malware.<br /><br />
            Worked with&nbsp;
            <a href="https://hex-rays.com/IDA-pro/" target="_blank" 
            rel="noopener noreferrer">IDA Pro</a> to
            debug malware and worked on analysis and disassembly scripts on
            both Windows and Linux systems.
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>University of Michigan</strong> -&nbsp;
            Ann Arbor, MI<br />
            Tutor/IA (Instructional Aid) for EECS 101<br />
            September 2012 -&gt; December 2012<br /><br />

            I helped write and teach the labs for EECS 101, a new class at the
            University of Michigan which was designed to encourage interest in
            Computer Science for students with zero prior experience.
            <br /><br />
            Taught students basic smartphone app design using the MIT App 
            Inventor to introduce programming logic to beginners.
            <br /><br />
            Held regular weekly office hours for students to get help with 
            homework and other issues.<br /><br /><br />
          </p>
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
            <strong>J.P. Morgan</strong> -&nbsp;
            New York City<br />
            Applicaion Developer Intern<br />
            June 2012 -&gt; August 2012<br /><br />

            Worked in Treasury &amp; Securities Services on a web based
            application written in Java with the Spring Framework for
            entitlement management.<br /><br />
            Redesigned parts of the frontend to be cross-browser compatible 
            (HTML, Javascript).<br /><br />
            Participated in corporate hack-a-thon and wrote a simple prototype
            project with Python using the Django framework.
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

export default What;
