import Image from 'next/image';

type BrandsProps = {
  images: string[];
};

export default function Brands({ images }: BrandsProps) {
  return (
    <section className="flex items-center justify-center gap-16 px-0 pb-24 pt-12">
      {images.map((image) => (
        <Image src={image} alt={image} key={image} width={225} height={87} />
      ))}
    </section>
  );
}
