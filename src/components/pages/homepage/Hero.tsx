import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <section className="border">
      <div className="container flex min-h-[85vh] flex-col items-center justify-center">
        <h1 className="text-6xl font-bold drop-shadow-2xl">
          We Are Here To Manpower You
        </h1>
        <div>
          <Button className="bg-primary-bridge py-6">
            <span className="text-xl">Request Free Consultation</span>{" "}
            <MdOutlineKeyboardArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
