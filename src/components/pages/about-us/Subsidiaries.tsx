const Subsidiaries = () => {
  return (
    <section className="bg-[#E1E1E1] py-20">
      <div className="container space-y-8">
        <h2 className="text-center text-4xl font-semibold">Subsidiaries</h2>

        <p className="mx-auto max-w-[950px] text-center text-lg">
          Detect the staffing service type you need and find your favorite team.
          SMASCO covers their required documents, stays, insurance, salaries,
          and qualifying training when required. Pick up the formula that suits
          your business way of success.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl bg-white p-8">
                <h6>Corporate Venture Capital Company</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Saneem is a Saudi company that invests in innovative
                  technology solutions as well as promising startup firms.
                </p>
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl bg-white p-8">
                <h6>Parcel Logistic Solutions</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Saneem is a Saudi company that invests in innovative
                  technology solutions as well as promising startup firms.
                </p>
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl bg-white p-8">
                <h6>A Better Customer Experience</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Saneem is a Saudi company that invests in innovative
                  technology solutions as well as promising startup firms.
                </p>
              </div>
            </div>
          </div>
          {/* flip card  */}
          <div className="card">
            <div className="card__content relative p-20 text-center font-bold transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl bg-white p-8">
                <h6>Innovative and Integrated Home Solutions</h6>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl bg-[#494949] p-8 text-white">
                <p>
                  Saneem is a Saudi company that invests in innovative
                  technology solutions as well as promising startup firms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
