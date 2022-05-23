import Head from "next/head";
import Link from "next/link";
import * as gtag from "../lib/gtag";

export default function Home() {
  const myclickHandler = () => {
    gtag.event({
      action: "this_is_a_click",
      category: "home_clicks",
      label: "one link clicked",
      value: "testing",
    });
  };

  return (
    <div>
      <Link href="/about" onClick={() => myclickHandler()}>
        <a>Test one</a>
      </Link>
    </div>
  );
}
