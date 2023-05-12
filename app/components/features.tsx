type FeaturesProps = {
  cta: CTA;
  topRow: Features[];
  bottomRow: Features[];
};

export default function Features({ cta, topRow, bottomRow }: FeaturesProps) {
  return (
    <section className="container flex flex-col items-center gap-2.5 px-0 py-24">
      <div className="flex items-center gap-16 p-0">
        <div className="order-0 flex h-[436px] w-[380px] grow-0 flex-col items-center gap-4 p-0">
          <h5 className="text-4xl font-extrabold leading-[45px] text-gray-900">{cta.title}</h5>
          <p className="text-xl font-normal leading-[30px] text-gray-500">{cta.description}</p>
        </div>
        <div className="flex w-[836px] flex-col items-start gap-8 p-0">
          <div className="flex flex-row items-start gap-8 p-0">
            {topRow.map((top) => (
              <div key={top.title} className="flex w-[402px] flex-col items-start gap-5 p-0">
                <div className="relative h-12 w-12 rounded-lg bg-[#E1EFFE]">
                  <div className="absolute left-2 top-2 h-8 w-8">{top.icon}</div>
                </div>
                <h6 className="text-xl font-bold leading-[25px] text-gray-900">{top.title}</h6>
                <p className="text-base font-normal text-gray-500">{top.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-row items-start gap-8 p-0">
            {bottomRow.map((bottom) => (
              <div key={bottom.title} className="flex w-[402px] flex-col items-start gap-5 p-0">
                <div className="relative h-12 w-12 rounded-lg bg-[#E1EFFE]">
                  <div className="absolute left-2 top-2 h-8 w-8">{bottom.icon}</div>
                </div>
                <h6 className="text-xl font-bold leading-[25px] text-gray-900">{bottom.title}</h6>
                <p className="text-base font-normal text-gray-500">{bottom.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
