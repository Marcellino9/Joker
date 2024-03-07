import React from "react";
import {
  Navbar,
  Hero,
  Footer,
  Memory,
  Explore,
  Advertise,
  Pricings,
  Banner,
  Newslatter,
} from "./components";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./data/travigodata";

function Comune() {
  return (
    <>
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
    </>
  );
}

export default Comune;
