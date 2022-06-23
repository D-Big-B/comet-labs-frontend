import React from "react";
import Image from "next/image";
export default function FeatureCard({ image, title, info }) {
  return (
    <div className="feature__card">
      <div className="feature__card__image">
        <Image src={image} alt="multor" />
      </div>
      <div className="feature__card__title">{title}</div>
      <div className="feature__card__info">{info}</div>
    </div>
  );
}
