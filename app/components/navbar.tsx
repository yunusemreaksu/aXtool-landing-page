import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="px-[80px] py-[24px]">
      <Image src={'/images/navbar/aXtool.png'} alt={'aXtool logo'} width={300} height={100} />
    </div>
  );
}
