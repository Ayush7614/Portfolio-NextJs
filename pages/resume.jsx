import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Ayush Kumar | Resume</title>
        <meta name="description" content="Ayush Kumar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Resume 📃
              </h1>
            </div>
            <h2 className="text-4xl pt-4 font-bold text-gray-900 dark:text-gray-200">
              Ayush Kumar
            </h2>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Objective
              </p>
              <p className="text-xl pb-6">
                I aim to deliver applications that are scalable, thoughtfully
                crafted and that make use of best coding practices at work. I am
                dynamic for learning new technologies and implementing them to
                develop as per the requirement. I aspire to create an impact
                from my work and help the developer community along witnessing
                personal growth and exposure.
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Work Experience 👨‍💻
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Full stack developer - FTS(Failure to Success)                  
                  </h2>
                  <h3>July 2021 - Sep 2021</h3>
                  <ul className="my-2">
                    <li>
                      - Developed a Health Tracker web application:
                    </li>
                    <li>
                      - Implemented CI/CD using Github Actions: with all server side and deployment bugs and for seemless and smoothless experience
                    </li>
                    <li>
                      - Uses REACTJS for frontend and Nodejs for Backend.
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Full stack developer - OneGo
                  </h2>
                  <h3>Sep 2021 - Oct 2021</h3>
                  <ul className="my-2">
                    <li>
                      - OneGo is my Collge Startup Developed a website from scratch for startup
                    </li>
                    <li>
                      - Implemented CI/CD using Github Actions: Implemented CI/CD using Github Actions with all server side and
deployment bugs and for seemless and smoothless experience.
                    </li>
                    <li>
                      - Uses HTML, CSS, BOOTSTRAP, GITHUB ACTIONS, FIREBASE.
                      </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Github Campus Expert 
                  </h2>
                  <h3>March 2022 - Present</h3>
                  <ul className="my-2">
                    <li>
                   - Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn skills, share
their experiences, and build projects together. They can be found across the globe leading in-person and
online conferences, meetups, and hackathons, and maintaining open source projects.:
                    </li>
                  </ul>
                  <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Devrel Engineer - Keploy
                  </h2>
                  <h3>April 2022 - Present</h3>
                  <ul className="my-2">
                    <li>
                      - Advising and providing guidance on use of our product APIs and related SDKs and tooling to external
developers. Creating sample applications, add-ons, and scripts for developers. Participating in our
technical forum discussions. Write Clean code for organization in Javascript, Uses Frameworks ReactJS,
                    </li>
                  </ul>
                  <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Cryptocapable                  
                  </h2>
                  <h3>Feb 2022 - Present</h3>
                  <ul className="my-2">
                    <li>
                   - Advising and providing guidance on web3 technologies. Introduce developers and Communities to
Cryptocapable and web3 technologies. Deliever Technical Talks on Web3 Technologies
                    </li>
                  </ul>
                  <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Keploy                  
                  </h2>
                  <h3>May 2022 - Present</h3>
                  <ul className="my-2">
                    <li>
                   - Working on the Docs website of the Keploy. Uses ReactJs and Docasaurus for the website
                    </li>
                  </ul>
                </li>
                </li>
                </li>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Community Experience 🌐
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Open Source Lead at Geeks for Geeks ABESEC GHAZIABAD, India                  
                  </h2>
                  <ul className="my-2">
                    <li>
                      - Open Source Maintainer at Geeks for Geeks ABESEC, Reviewing PR, Issues and managing codebase
                    </li>
                    <li>
                
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                   Open Source Maintainer at Codeflow Organization                  
                  </h2>
                  <ul className="my-2">
                    <li>
                    - Open Source Maintainer at Codeflow Organization , Reviewing PR, Issues and managing codebase
                    </li>
                    <li>
                      - Gave Talks on Open Source and Development
                    </li>

                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Open Source Maintainer at Metavasp Organization
                  </h2>
                  <ul className="my-2">
                    <li>
                      - Proposed initiative of tech-talks, developer meetups,
                      open source contributions, rewards, etc. for the
                       community.
                    </li>
                    <li>
                      - Closely worked with the core team for the community
                      events along with Open Source contributions
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                  Mentor at UPLIFT Project                  
                  </h2>
                  <ul className="my-2">
                    <li>
                      - Mentor at UPLIFT Project India Mentoring 50
Students of all over the world about frontend development upto 3 months Taking daily classes.
                    </li>
                    <li>
                    
                    </li>
                    <li>
                     
                    </li>
                    <li>
                    
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Tech Stack 🛠
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-2">
                  <span className="underline">Languages</span>: JavaScript,
                  TypeScript, C++, Python, HTML5, CSS3{" "}
                </li>
                <li className="my-2">
                  <span className="underline">Frameworks and Libraries</span>:
                  React.js, Next, Node, Express, Tensorflow, OpenCV
                </li>
                <li className="my-2">
                  <span className="underline">Platforms</span>: Git (Github and
                  Gitlab), Heroku, Vercel, Netlify, AWS, Google Firebase
                </li>
                <li className="my-2">
                  <span className="underline">Database</span>: MongoDB, SQL,
                  PostgreSQL
                </li>
                <li className="my-2">
                  <span className="underline">Design Libraries</span>:
                  TailwindCSS, Bootstrap, MaterialUI
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Education
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                     ABES ENGINEERING COLLEGE GHAZIABAD                  
                     </h2>
                  <ul className="my-2">
                    <li>
                      Major: Electronics and Communication Engineerimg (ECE)
                    </li>
                    <li>CGPA: 7.5</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Awards and Achievements 🏆
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                Top 3 Contributers in KWOC(Kharagpur Winter of Code 2020 by IIT Kharagpur Open Source Community)
                </li>
                <li className="my-4">
                Get 5 Position in india region in Script Winter of Code(SWOC20) 2021 a open source program by Script community.
                </li>
                <li className="my-4">
                Got 17 Rank in JWOC WInter of code 2020-21 in India open source program organized by JGEC College
                </li>
                <li className="my-4">
                Got 81 Rank in DWOC 2020-21 Devscript winter of code a open source program organized by Devscript community                
                </li>
                <li className="my-4">
                Got 6 Rank in IEEE DTU CrossWoc 2021 a open source program organized by Delhi Technical University
                </li>
                <li className="my-4">
                Guiding 3000+ Students and 500+ mentors in different different Open Source Programs and so on.
                </li>
                <li className="my-4">
                Best mentor award in Hssoc21 and Psoc21 and devicept21 a open source program in india
                </li>
                <li className="my-4">
                Selected as a scholarship recipient for SUSE Cloud Native Course by Udacity.
                </li>
                <li>
                Selected as a scholarship recipient for AWS Machine Learning Scholarship Program by AWS Udacity.
                </li>
                <li>
                Selected as a scholarship recipient for Education Outreach program by GirlScript
                </li>
                <li>
                My Competative Programming Project gains 400 forks and 200+ Stars On Github, My Frontend Project Gains 100+ forks and 100+ On Github
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
