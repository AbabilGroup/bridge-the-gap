import AboutUsBanner from "@/components/pages/about-us/AboutUsBanner";
import CompanyOverview from "@/components/pages/about-us/CompanyOverview";
import OurPartners from "@/components/pages/about-us/OurPartners";
import OurValue from "@/components/pages/about-us/OurValue";
import Subsidiaries from "@/components/pages/about-us/Subsidiaries";
import Timeline from "@/components/pages/about-us/Timeline";

const AboutPage = () => {
  return (
    <main>
      <AboutUsBanner />
      <CompanyOverview />
      <Timeline />
      <OurValue />
      <Subsidiaries />
      <OurPartners />
    </main>
  );
};

export default AboutPage;
