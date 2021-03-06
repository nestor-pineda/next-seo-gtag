import Head from "next/head";
import { useState } from "react";
import * as gtag from "../../lib/gtag";

const Contact = () => {
  const [query, setQuery] = useState("");

  const search = () => {
    gtag.event({
      action: "search",
      category: "search category",
      label: "this is a alert lable",
      value: "another aler",
      // params: {
      //   search_term: query,
      // },
    });
  };

  const myAlert = () => {
    gtag.event({
      action: "myAlerttt",
      category: "alert category",
      label: "this is a alert lable",
      value: "another aler",
    });
    alert(`This is an alert for GA`);
  };

  return (
    <>
      <Head>
        <title>Contact - This ic a contact</title>
        <meta name="description" content="Meta description for the Contact page" />
      </Head>

      <h1>This is ths Contact page</h1>

      <div>
        <div>
          <input type="text" onChange={(event) => setQuery(event.target.value)}></input>
        </div>
        <div>
          <button onClick={() => search()}>Search</button>
          <button onClick={() => myAlert()}>alert here</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
