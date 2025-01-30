import { Button } from "@/components/ui/button";

const InputOutput = () => {
  return (
    <section className="bg-secondary-bridge py-40">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-5">
          <h3 className="text-4xl font-semibold text-white">
            Inputs Shape the Outputs
          </h3>
          <p className="text-white">
            For ten years and more, SMASCO has served all the sectors in the
            Kingdom by shaping their inputs in a way that reshaped their outputs
            with a much better performance. Discuss your company’s requirements
            with us, And we will provide you with advice you need to hear
            regarding the professional reinforcements to assist with the growth
            of your business.
          </p>
          <Button className="bg-tertiary-bridge">More About Us</Button>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default InputOutput;
