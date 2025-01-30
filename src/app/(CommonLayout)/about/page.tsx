import AboutUsBanner from "@/components/pages/about-us/AboutUsBanner";
import CompanyOverview from "@/components/pages/about-us/CompanyOverview";
import OurValue from "@/components/pages/about-us/OurValue";
import Subsidiaries from "@/components/pages/about-us/Subsidiaries";

const AboutPage = () => {
  return (
    <main>
      <AboutUsBanner />
      <CompanyOverview />
      <OurValue />
      <Subsidiaries />
    </main>
  );
};

export default AboutPage;
