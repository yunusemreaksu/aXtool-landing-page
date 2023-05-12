import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-[48px] font-extrabold text-black">Discover the Potential</h1>
      <p className="mb-[64px] text-center text-[#6B7280]">
        aXtool helps employees reach full potential by standardizing and measuring experience.
        <br />
        Utilizing AI technology, we transform employee experience.
      </p>
      <Image src={'/images/hero/aXtool-grafik.png'} alt={'aXtool logo'} width={1000} height={750} />
    </div>
  );
}
