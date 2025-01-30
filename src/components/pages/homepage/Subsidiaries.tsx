const Subsidiaries = () => {
  return (
    <section className="bg-secondary-bridge py-20">
      <div className="container space-y-5">
        <div className="flex items-center justify-center">
          <div className="bg-tertiary-bridge inline-block rounded-lg px-5 py-1 text-3xl font-bold text-white">
            Subsidiaries
          </div>
        </div>

        <p className="mx-auto max-w-[950px] text-center text-white">
          Detect the staffing service type you need and find your favorite team.
          SMASCO covers their required documents, stays, insurance, salaries,
          and qualifying training when required. Pick up the formula that suits
          your business way of success.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* card */}
          <div className="rounded-lg bg-white p-5">
            <p className="text-center font-semibold">
              Corporate Venture Capital Company
            </p>
          </div>
          {/* card */}
          <div className="rounded-lg bg-white p-5">
            <p className="text-center font-semibold">
              Corporate Venture Capital Company
            </p>
          </div>
          {/* card */}
          <div className="rounded-lg bg-white p-5">
            <p className="text-center font-semibold">
              Corporate Venture Capital Company
            </p>
          </div>
          {/* card */}
          <div className="rounded-lg bg-white p-5">
            <p className="text-center font-semibold">
              Corporate Venture Capital Company
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
