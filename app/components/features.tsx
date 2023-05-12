type FeaturesProps = {
  cta: CTA;
  topRow: Features[];
  bottomRow: Features[];
};

export default function Features({ cta, topRow, bottomRow }: FeaturesProps) {
  return (
    <section className="container flex flex-col items-center gap-2.5 px-0 py-4 md:py-24">
      <div className="flex flex-col items-center gap-16 p-0 md:flex-row">
        <div className="order-0 flex h-[436px] w-[380px] flex-col items-center gap-4 md:p-0">
          <h5 className="text-center text-4xl font-extrabold leading-[45px] text-gray-900">
            {cta.title}
          </h5>
          <p className="p-2.5 text-center text-xl font-normal leading-[30px] text-gray-500 md:text-start">
            {cta.description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 p-0 md:w-[836px] md:items-start">
          <div className="flex flex-col items-start gap-8 p-0 md:flex-row">
            {topRow.map((top) => (
              <div
                key={top.title}
                className="flex flex-col items-center gap-5 p-0 md:w-[402px] md:items-start"
              >
                <div className="relative h-12 w-12 rounded-lg bg-[#E1EFFE]">
                  <div className="absolute left-2 top-2 h-8 w-8">{top.icon}</div>
                </div>
                <h6 className="text-center text-xl font-bold leading-[25px] text-gray-900">
                  {top.title}
                </h6>
                <p className="p-2.5 text-center text-base font-normal text-gray-500 md:p-0 md:text-start">
                  {top.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-8 p-0 md:flex-row md:items-start">
            {bottomRow.map((bottom) => (
              <div
                key={bottom.title}
                className="flex flex-col items-center gap-5 p-0 md:w-[402px] md:items-start"
              >
                <div className="relative h-12 w-12 rounded-lg bg-[#E1EFFE]">
                  <div className="absolute left-2 top-2 h-8 w-8">{bottom.icon}</div>
                </div>
                <h6 className="text-center text-xl font-bold leading-[25px] text-gray-900">
                  {bottom.title}
                </h6>
                <p className="p-2.5 text-center text-base font-normal text-gray-500 md:p-0 md:text-start">
                  {bottom.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
