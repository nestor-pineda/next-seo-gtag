import scss from "./_styles.module.scss";
import "./_styles.module.scss";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About - About us</title>
        <meta name="description" content="Meta description for the About page" />
      </Head>
      <div className={`${scss.aboutPage} ${scss.aboutPageBorder}`}>
        <h1 className="title">This is the about page</h1>
      </div>
    </>
  );
};

export default About;
