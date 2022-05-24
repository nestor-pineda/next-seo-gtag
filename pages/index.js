import Head from "next/head";
import Link from "next/link";
import * as gtag from "../lib/gtag";

export default function Home() {
  const myclickHandler = () => {
    gtag.event({
      action: "submit_form",
      category: "Contact",
      label: "messageeee",
    });
  };

  // const search = () => {
  //   ga.event({
  //     action: "search",
  //     params: {
  //       search_term: query,
  //     },
  //   });
  // };

  return (
    <div>
      <Link href="/about" onClick={() => myclickHandler()}>
        <a>Test one</a>
      </Link>
    </div>
  );
}
