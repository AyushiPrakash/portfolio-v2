import Head from "next/head";
import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
} from "../components/homepage";
import { Layout, Header, Cursor } from "../components/shared";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title> Ayushi Prakash </title>  
          <link rel="icon" href="/favicon.ico " />
        </Head>  
        <Hero />
        <Layout>
          <About /> <Experience />
          <Projects /> <Contact />
        </Layout>  
      </div>  
      <Cursor />
    </>
  );
}
