import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import LinkButton from "./components/Link/index";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs | neeswebservices</title>
        <meta
          name="description"
          content="Blog Application of Neeswebservices"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dacp0r5b7/image/upload/v1661272914/icons/neeslogo_aoaje7.png"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to NWS-Blog </h1>

        <p className={styles.description}>
          <LinkButton url="https://nischal-dahal.com.np" text="Hello there!" />
          MY blog website is under development !! want to help me working in
          project ?
          <p>
            Then check this{" "}
            <LinkButton
              text="repo"
              url="https://github.com/neeswebservices/blog-nws-cms"
            />{" "}
            in my github. You can help me by contributing.
          </p>
        </p>
        <h2>Bye bye !</h2>
        <span>Have your best day ! I am from future. </span>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <a
          href="https://github.com/neeswebservices"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <LinkButton
            url="https://nischal-dahal.com.np/"
            text="neeswebservices"
          />
        </a>
      </footer>
    </div>
  );
}
