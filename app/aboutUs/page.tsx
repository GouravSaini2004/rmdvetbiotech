import type { Metadata } from "next";

import MissionVision from "../../components/missionvission";
import AboutHero from "../../components/about";
import CoreValues from "../../components/corevalues";
import ContactEnquiry from "../../components/contact";

export const metadata: Metadata = {
  title: "About Us | RMD Vet Biotech",
  description:
    "Learn about RMD Vet Biotech, our mission, vision, core values, and commitment to animal health and nutrition.",
  alternates: {
    canonical: "/aboutUs",
  },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      {/* <ContactEnquiry /> */}
    </>
  );
}
