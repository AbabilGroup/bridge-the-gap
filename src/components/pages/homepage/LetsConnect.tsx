import { Button } from "@/components/ui/button";

const LetsConnect = () => {
  return (
    <section className="bg-secondary-bridge py-20">
      <div className="container space-y-3">
        <h2 className="text-center text-4xl font-semibold">
          Let&apos;s Connect
        </h2>
        <p className="text-center text-lg">
          The core of business success has always been people.
        </p>

        <div className="flex items-center justify-center">
          <Button className="bg-white text-black">Let&apos;s Connect</Button>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
