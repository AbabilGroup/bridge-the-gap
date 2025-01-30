import { IoBulbOutline } from "react-icons/io5";
import { BsBarChartSteps } from "react-icons/bs";

const OurValue = () => {
  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3 md:col-span-2 lg:col-span-1">
          <h6 className="font-semibold text-primary-bridge">Our Value</h6>
          <h2 className="text-3xl font-semibold">
            True World class manpower Service
          </h2>
          <p className="text-sm">
            As we have realized the huge matter of providing perfossinal
            services, and how complicated it is for Saudi organizations to find
            professionals fully covered legally; the SMASCO team has taken the
            pledge to carry this on our shoulders with the best we have.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 rounded-xl bg-white p-5">
          <IoBulbOutline className="text-5xl text-primary-bridge" />

          <h6 className="font-semibold text-primary-bridge">Vision</h6>
          <p className="text-center text-sm">
            To be the first direction for organizations in the Saudi Kingdom as
            a manpower company, by adding a truly valuable selection of
            qualified people … to be the first, whole and heartedly.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 rounded-xl bg-white p-5">
          <BsBarChartSteps className="text-5xl text-primary-bridge" />

          <h6 className="font-semibold text-primary-bridge">Mission</h6>
          <p className="text-center text-sm">
            Our mission is to save you miles to walk and take the headache of
            searching for qualified manpower, secure your business with legally
            covered professionals, and get you out of confusion with our
            consulting and support to promote your business performance and
            growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
