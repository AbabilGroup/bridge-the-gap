import AboutUsBanner from "@/components/pages/about-us/AboutUsBanner";
import CompanyOverview from "@/components/pages/about-us/CompanyOverview";
import OurPartners from "@/components/pages/about-us/OurPartners";
import OurValue from "@/components/pages/about-us/OurValue";
import Subsidiaries from "@/components/pages/about-us/Subsidiaries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridge The Gap | About Us",
};

const AboutPage = () => {
  return (
    <main>
      <AboutUsBanner />
      <CompanyOverview />
      {/* <Timeline /> */}
      <OurValue />
      <Subsidiaries />
      <OurPartners />
    </main>
  );
};

export default AboutPage;
