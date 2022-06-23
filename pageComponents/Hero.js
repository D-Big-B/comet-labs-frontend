import React from "react";
import Image from "next/image";
import multorLogo from "./../assets/images/multor-logo.svg";
import multorHero from "./../assets/images/multor-hero.jpg";

export default function Hero() {
  return (
    <section>
      <div className="hero__wrapper">
        <div className="hero">
          <Image src={multorLogo} alt="multor" />

          <h1>Describe the value of booking an appointment</h1>

          <p>
            No need to get clever. Tell people exactly what offering, then use
            this space to communicate your key value proposition.
          </p>
        </div>
        <div className="hero__bg">
          <Image src={multorHero} alt="multor" layout="fill" />
        </div>
      </div>
    </section>
  );
}
