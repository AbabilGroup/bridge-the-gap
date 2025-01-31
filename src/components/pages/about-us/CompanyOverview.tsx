import { Button } from "@/components/ui/button";
import Image from "next/image";

const CompanyOverview = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">Company Overview</h2>

          <p>
            Our story started as a manpower company that walked a successful
            10-year path in the Saudi market, helping successful partners and
            individuals. Day after another, our business expanded until we
            became the first choice of the biggest companies in the Kingdom once
            they sought professionals, manpower, and qualified workers.
          </p>

          <p>
            SMASCO is a family where a value as they truly care about each
            other. SMASCO has passionate people who make this company great.
            What we are proud of in our staff is the qualities of the people we
            have in this company. And as long as we are keen on that, we look
            forward to being a great company for many years to come.
          </p>

          <p>
            When you look across the SMASCO group of companies as a whole, you
            will find out they cover so many regions around KSA. We are in every
            industry and every market. If they need a permanent manpower
            solution, we help them find out what they need. If they need their
            project outsourced to be on the ground in a different region, we are
            up to it. If they need us to take over an entire mission like a
            market search, we get that covered. If any one of our customers has
            a need, we can deliver and get the same service. You are going to
            get the same culture, the same value system, and the same delivery
            and service you need with the high expectations you have.
          </p>
          <Button className="bg-tertiary-bridge py-6 text-xl">
            Download Company Profile
          </Button>
        </div>
        <div>
          <Image
            className="h-auto w-full rounded-3xl"
            src="/about-btg.jpeg"
            alt="Company Overview"
            height={600}
            width={480}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
