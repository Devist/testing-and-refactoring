import React from "react";

import Root from "./Root";
import vintage_clock from "../__fixtures__/products/vintage_clock.json";
import image1 from "../img/vintage_clock_1.png";
import image2 from "../img/vintage_clock_2.png";
import image3 from "../img/vintage_clock_3.png";

// export const NoImage = () => <Root {...vintage_clock} />

// export const OneImage = () => <Root {...vintage_clock} images={[image1]} />

export const NoImage = () => <Root {...vintage_clock} images={[]} />;

export const Primary = () => <Root {...vintage_clock} images={[image1, image2, image3]} />;
Primary.storyName = "Root";

export default {
  title: "Case2[solution]",
  component: Primary,
};
