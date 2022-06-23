import React from "react";
import Image from "next/image";
import aboutImage from "./../assets/images/about.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about__image">
        <Image src={aboutImage} alt="multor" />
      </div>
      <div className="about__info">
        <h1>ABOUT</h1>
        <h2>Some more information about your business</h2>
        <p>
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </p>
      </div>
    </section>
  );
}
