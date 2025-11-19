import frontView1 from "@/Assets/Front View 1.png";
import frontView2 from "@/Assets/Front View 2.png";
import frontView3 from "@/Assets/Front View 3.png";
import frontView4 from "@/Assets/Front View 4.png";
import frontView5 from "@/Assets/Front View 5.png";

import topView1 from "@/Assets/Top View 1.png";
import topView2 from "@/Assets/Top View 2.png";
import topView3 from "@/Assets/Top View 3.png";
import topView4 from "@/Assets/Top View 4.png";
import topView5 from "@/Assets/Top View 5.png";

export const frontFloorImages = {
  "Lower Ground": frontView1,
  "Ground Floor": frontView2,
  "First Floor": frontView3,
  "Second Floor": frontView4,
  "Roof Top": frontView5,
} as const;

export const topFloorImages = {
  "Lower Ground": topView5,
  "Ground Floor": topView4,
  "First Floor": topView3,
  "Second Floor": topView2,
  "Roof Top": topView1,
} as const;

export const allFloorPlanImageSources = [
  ...Object.values(frontFloorImages),
  ...Object.values(topFloorImages),
];


