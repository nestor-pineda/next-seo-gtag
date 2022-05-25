import Head from "next/head";
import Link from "next/link";
import * as gtag from "../lib/gtag";

export default function Home() {
  /*  const myclickHandler = () => {
    gtag.event({
      action: "submit_form",
      category: "Contact",
      label: "messageeee",
    });
  }; */

  // const search = () => {
  //   ga.event({
  //     action: "search",
  //     params: {
  //       search_term: query,
  //     },
  //   });
  // };

  /* GTAG traking functions */
  const nextClickedHandler = () => {
    gtag.event({
      action: "nextClicked",
      category: "slider",
      lable: "next post",
    });
  };

  return (
    <>
      <Head>
        <title>Home - This is the home</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div>
        <Link href="/about" onClick={() => nextClickedHandler()}>
          <a>about</a>
        </Link>
      </div>
      <div>
        <Link href="/contact" onClick={() => nextClickedHandler()}>
          <a>contact</a>
        </Link>
      </div>
    </>
  );
}
