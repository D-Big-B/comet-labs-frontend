import React from "react";
import Image from "next/image";
export default function BenefitCard({ imgUrl, heading, text }) {
  return (
    <div className="benefit__card">
      <div className="benefit__card__image">
        <Image src={imgUrl} alt="multor" />
      </div>
      <div className="benefit__card__data">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
