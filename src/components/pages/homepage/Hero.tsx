import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="border">
      <div className="container flex min-h-[85vh] flex-col items-center justify-center gap-10">
        <h1 className="text-center text-6xl font-bold drop-shadow-2xl">
          We Are Here To Manpower You
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
          <Button className="bg-secondary-bridge py-6 text-lg">
            Request Free Consultation{" "}
            <span>
              <MdOutlineKeyboardArrowRight className="text-2xl" />
            </span>
          </Button>

          <Button className="bg-secondary-bridge py-6 text-lg">
            <FaRegCirclePlay /> Watch the video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
