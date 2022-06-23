import React from "react";
import Image from "next/image";
export default function TestinomialCard({
  ratingImg,
  data,
  personImg,
  personName,
  personAddress,
}) {
  return (
    <div className="testinomial__card">
      <div className="testinomial__card__rating">
        <Image src={ratingImg} alt="multor" />
      </div>
      <div className="testinomial__card__data">{data}</div>
      <div className="testinomial__card__person">
        <div className="testinomial__card__person__image">
          <Image src={personImg} alt="multor" />
        </div>
        <div className="testinomial__card__person__info">
          <h1>{personName}</h1>
          <p>{personAddress}</p>
        </div>
      </div>
    </div>
  );
}
