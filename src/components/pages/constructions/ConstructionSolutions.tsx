import { IoDocumentTextOutline } from "react-icons/io5";
import { PiClockCountdownFill } from "react-icons/pi";
import { GiCargoCrane } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";

const ConstructionSolutions = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Our solutions for the construction field
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <IoDocumentTextOutline className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              Short-term or extremely short-term contracts starting at only one
              month
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <PiClockCountdownFill className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              A team of immediate hires is available in response to emergencies
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <GiCargoCrane className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              We will assist you in the construction of a couple of compounds or
              even just an extension to your building
            </p>
          </div>
          {/* card  */}
          <div className="flex flex-col items-center justify-start gap-3 text-center">
            <MdConstruction className="text-8xl text-primary-bridge" />

            <p className="text-sm">
              SMASCO is your one-stop resource for finding skilled construction
              personnel, from certified agile construction engineers to
              experienced skilled builders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSolutions;
