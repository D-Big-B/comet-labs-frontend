import React from "react";
import rating1 from "./../assets/images/testimonial1-stars.svg";
import rating2 from "./../assets/images/testimonial2-stars.svg";
import person1 from "./../assets/images/testimonial1.jpg";
import person2 from "./../assets/images/testimonial2.jpg";
import TestinomialCard from "../components/TestinomialCard";
import feature1 from "./../assets/images/feature1.jpg";
import feature2 from "./../assets/images/feature2.jpg";
import feature3 from "./../assets/images/feature3.jpg";
import FeatureCard from "../components/FeatureCard";

const testinomial = [
  {
    id: 0,
    personName: "Real Name",
    personAddress: "Location",
    data: "Share a real testimonial that hits some of your benefits (but isn't too sales-y).",
    ratingImg: rating1,
    personImg: person1,
  },
  {
    id: 1,
    personName: "Real Name",
    personAddress: "Location",
    data: "Include someone talking about how easy it was to sign up and participate.",
    ratingImg: rating2,
    personImg: person2,
  },
];

const features = [
  {
    id: 0,
    featureImg: feature1,
    info: "Talk about some of the details of your offer with a focus on the value people get back.",
    title: "FEATURE 1",
  },
  {
    id: 1,
    featureImg: feature2,
    info: "Is there a pain point that your service resolves? Tell visitors about it here.",
    title: "FEATURE 2",
  },
  {
    id: 2,
    featureImg: feature3,
    info: "Alternatively, you could use this section to address some frequently asked questions.",
    title: "FEATURE 3",
  },
];
export default function Features() {
  return (
    <section className="features">
      <p className="features__heading"> DO NOT JUST TAKE OUR WORD FOR IT</p>

      <div className="features__testinomial">
        {testinomial.map((data) => (
          <TestinomialCard
            key={data.id}
            data={data.data}
            personAddress={data.personAddress}
            personImg={data.personImg}
            personName={data.personName}
            ratingImg={data.ratingImg}
          />
        ))}
      </div>
      <div className="features__feature">
        <div className="features__feature__wrapper"></div>
        {features.map((data) => (
          <FeatureCard
            key={data.id}
            image={data.featureImg}
            info={data.info}
            title={data.title}
          />
        ))}
      </div>
    </section>
  );
}
