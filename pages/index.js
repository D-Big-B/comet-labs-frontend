import Head from "next/head";
import Image from "next/image";
import Hero from "../pageComponents/Hero";
import Appointment from "../pageComponents/Appointment";
import About from "../pageComponents/About";
import Features from "../pageComponents/Features";
import Footer from "../pageComponents/Footer";

export default function Home() {
  return (
    <div className="mainContainer">
      <Head>
        <title>MULTOR</title>
        <meta name="description" content="Created by D-Big-B" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Appointment />
        <Features />
        <About />
      </main>

      <Footer />
    </div>
  );
}
