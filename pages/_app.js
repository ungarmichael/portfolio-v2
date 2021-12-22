//style files
import "../styles/foyer.scss";
import "../styles/error.scss";
import "../styles/contact.scss";
import "../styles/projects.scss";
import "../styles/Blog.scss";
import "../styles/content.scss";
import "../styles/login.scss";
import "../styles/global.scss";
import "../styles/variables.scss";
import "../styles/font.scss";
import "../styles/comingsoon.scss";

import "./../components/about/about.scss";
import "./../components/bar/bar.scss";
import "./../components/btn/btn.scss";
import "./../components/nav/nav.scss";
import "./../components/Container/container.scss";
import "./../components/about/about.scss";
import "./../components/project/project.scss";
import "./../components/bottombar/bottombar.jsx";

//provider
import { BlurProvider } from "../context/BlurContext.js";
import { SearchProvider } from "../context/SearchContext.js";

import Head from "next/head";
import UgBar from "./../components/bar/bar.jsx";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="ungarlogo" href="/assets/Ungar_Website_Icon.ico" />
      </Head>
      <SearchProvider>
        <BlurProvider>
          <UgBar />
          <Component {...pageProps} />
        </BlurProvider>
      </SearchProvider>
      <style jsx>
        {`
          * {
            font-family: "ZCOOL QingKe HuangYou", cursive;
          }
        `}
      </style>
    </>
  );
}
