import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import { MdiGithub } from "../assets/Socials";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Ayush Kumar | Projects</title>
        <meta name="description" content="Ayush Kumar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Projects 💻
              </h1>
              <p className="text-xl pb-4">
                I build and break stuff to experiment with technologies I am
                passionate about. My Projects consist of full-stack
                applications, libraries/npm-packages, open-source and things
                that gave me dopamine hits during their development.
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Ongoing 🚶‍♂️
              </p>
              <ul className="pl-6 text-xl pb-4 list-disc">
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                  Women-Help                  
                  </h2>
                  <p className="mb-2">
                    <b>Women-Help</b> A website that helps women track their menstrual cycle, 
                    Pamper booth that offers some unique feature to cater mood swings, Gynecologist help for medical assistance, 
                    Menstrual Blog for creating awareness about menstrual health and hygiene, 
                    a Women intimate hygiene shop providing quality products and a discussion forum with video calling feature. 
                    This website provides all the necessary help and assistance that a woman needs in this phase of their monthly cycle.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: HTML, CSS, JavaScript, Node.JS, Express.JS, Python
                    Heroku, Linode for API and Database, Auth0 - For authentication and authorization
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                  Speakers-Adda
                  </h2>
                  <p className="mb-2">
                    <b>Speak Adda</b> Speak Adda is a Platforms connecting Speakers to Community Leads while building their Portfolio.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: UI Prototyping with Tools like Adobe XD,
                    Front-End Development with ReactJS
                    Developing Backend APIs with Flask and MongoDB
                    Working on a NoSQL Database Management System
                  </p>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Built ⌨🔧
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                  Paanch-Editor
                  </h2>
                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/Ayush7614/Paanch-Editor">Paanch-Editor</a>
                    </span>{" "}
                    Paanch Editor is a image editor tool that is made of Javascript. 
                    It is a responsive web application where you easily edit and download the image. 
                    It contains 5 types of effect. 
                  </p>
                  <p className="mb-2">
                    Also, MockBee is still actively developed and more and more
                    new APIs are being added to the project for helping more and
                    more frontend devs in the community!🚀
                  </p>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                  Foody-Moody
                  </h2>
                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/Ayush7614/Foody-Moody">
                      Foody Moody                      
                      </a>
                    </span>{" "}
                    : Foody Moody is an restaurant web application developed in reactjs. Its a frontend application with the
                      features like Menu list and rating the dishes
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: 
                    React, Node, Express 
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                  Zipify                  
                  </h2>
                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/MetaVASP/Zipify">
                      Zipify                      
                      </a>
                    </span>{" "}
                    is a Online File Compressor in which anyone can compress and make zip files.
                    </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: NodeJs, Template Engine : EJs, ExpressJs, JSZip, Multer.
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                  docs                  
                  </h2>
                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/keploy/docs">
                        docs
                      </a>
                    </span>{" "}
                    Documentation website for Keploy
                    </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: NodeJS,
                  Yarn package manager, Docusaurus, React, GitHub Actions
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                  Khana-Khazana
                  </h2>
                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/Ayush7614/Khana-Khazana">
                      Khana-Khazana
                      </a>
                    </span>{" "}
                    Recipes App that fetch awesome dishes                    
                    </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: NodeJS,
                  Npm package manager, React, GitHub Actions
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                  Metro-Pest-Control
                  </h2>
                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/Ayush7614/Metro-Pest-Control">
                      Metro-Pest-Control
                      </a>
                    </span>{" "}
                    is the website for the leading pest control services of Ghaziabad
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: HTML,
                    Googel Map API, CSS, Javascript
                  </p>
                  </p>
                  </li>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Open Source Contributed 💖
              </p>
              <ul className="text-xl pb-4">
                <li className="my-4">
                  <h2 className="font-medium text-2xl mb-2">
                    Open-Horizon | Keploy | NimbleEdge
                  </h2>
                  <h2 className="font-medium text-2xl mb-2">
                    Chaoss | Fossology | Circuitverse
                  </h2>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Maintaining 🤓
              </p>
              <ul className="pl-6 text-xl pb-4 list-disc">
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    Rotten_Scripts
                  </h2>
                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/HarshCasper/Rotten-Scripts">
                        Rotten_Scripts
                      </a>
                    </span>{" "}
                    contains amazing and awesome scripts written in Python,
                    JavaScript, Bash, Powershell, and more. Major work revolves
                    around creating new issues, helping contributors with
                    existing features/bugs, reviewing PRs and overall
                    maintaining the repository.
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    JavaScriptONLY
                  </h2>

                  <p className="mb-2">
                    <span className="hover:underline font-medium">
                      <a href="https://github.com/codesONLY/JavaScriptONLY">
                        JavaScriptONLY
                      </a>
                    </span>{" "}
                    is a well-curated content for refering/learning JavaScript.
                    Have added JavaScript Notes, Code Snippets, Resources,
                    Books, Interview Questions and a lot more. Generally I share
                    and document my learnings here, together with the community.
                  </p>
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
