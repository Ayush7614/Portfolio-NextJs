import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>Ayush Kumar | About</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                About 🙋‍♂️
              </h1>
            </div>
            <div className="flex md:flex-row flex-col py-10 justify-around items-start">
              <div className="w-full border-2 p-4 shadow-md rounded-md border-50">
                <Image
                  src="/Dp 3.jpeg"
                  height="320"
                  width="320"
                  alt="about-dp"
                />
                <h2>
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                    Ayush Kumar
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    Software Engineer
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    India
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    ayushknj3@gmail.com
                  </span>
                </h2>
              </div>
              <div className="md:pl-16 md:pt-0 pl-0 pt-8 pr-4 md:pr-16">
                <h2 className="text-3xl font-bold pb-4 text-gray-900 dark:text-gray-200">
                  {" "}
                  Hi 👋 I&apos;m Ayush Kumar
                </h2>
                <p className="text-lg pb-4">
                Hi, I'm Ayush Kumar, a self-taught passionate Full Stack Developer developer from India, currently working at Keploy as a Frontend engineer.
                I have also worked together with many startups and previously building tech stuff with many startups. I am working on many technologies like react, vue, django, flask. 
                I am a community guy and I love to work with people, love to work with communities, love to help people in communities and teaching tech stuff to people

                </p>
                <p className="text-lg pb-4">
                I am a 3rd year engineering student pursuing my bachelors in electronics and communication engineering domain 
                at ABES ENGINEERING COLLEGE GHAZIABAD . I am a full stack developer and open source enthusiast. 

                </p>
                <p className="text-lg pb-4">
                  Presently, I am aligned to Web Technologies and Tooling and
                  play with Frontend everyday. Also, I possess decent experience
                  with backend and android.
                  </p>
                <p className="text-lg pb-4">
                  If not programming, you can find me singing, reading
                  philosophy and cosmology, writing poetry or making funny
                  programming memes on my Instagram meme page.
                </p>
                <p className="text-lg pb-4">
                  Feel free to check out my{" "}
                  <Link href="/resume">
                    <a className="underline"> Resume</a>
                  </Link>
                  ,{" "}
                  <Link href="/projects">
                    <a className="underline">Projects</a>
                  </Link>{" "}
                  and{" "}
                  <Link href="/talks">
                    <a className="underline">Talks</a>
                  </Link>
                  .
                </p>
                <p className="text-lg pb-4">
                  Want to dicuss tech, ideas or opportunities? You can always
                  reach out to me on:
                </p>
                <ul className="text-xl pb-4">
                  <li className="my-2">
                    Mail:{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      ayushknj3@gmail.com
                    </a>
                  </li>
                  <li className="my-2">
                    Github:{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      @Ayush7614
                    </a>
                  </li>
                  <li className="my-2">
                    Twitter:{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      @AyushKu38757918
                    </a>
                  </li>

                  <li className="my-2">
                    Linkedin:{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      in/ayush-kumar-984443191/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
