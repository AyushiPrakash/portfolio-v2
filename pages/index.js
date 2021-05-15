import Head from 'next/head'
import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
} from "../components/homepage";
import { Layout, Header } from "../components/shared";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ayuu's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}
