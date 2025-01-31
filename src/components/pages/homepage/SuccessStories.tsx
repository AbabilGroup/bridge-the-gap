import SuccessCarousel from "./SuccessCarousel";

const SuccessStories = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="inline-block rounded-lg bg-tertiary-bridge px-5 py-1 text-3xl font-bold text-white">
            Success Stories
          </div>
        </div>

        <SuccessCarousel slides={["/logo.png", "/logo.png", "/logo.png"]} />
      </div>
    </section>
  );
};

export default SuccessStories;
