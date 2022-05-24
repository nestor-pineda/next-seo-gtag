import Head from "next/head";
import Link from "next/link";
import * as gtag from "../lib/gtag";

export default function Home() {
  /*  const myclickHandler = () => {
    gtag.event({
      action: "this_is_a_click",
      category: "home_clicks",
      label: "one link clicked",
      value: "testing",
    });
  }; */

  const search = () => {
    ga.event({
      action: "search",
      params: {
        search_term: query,
      },
    });
  };

  return (
    <div>
      <Link href="/about" onClick={() => search()}>
        <a>Test one</a>
      </Link>
    </div>
  );
}
