import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/about">
        <a>Test one</a>
      </Link>
      <Link href="/contact">
        <a>Test two</a>
      </Link>
    </div>
  );
}
