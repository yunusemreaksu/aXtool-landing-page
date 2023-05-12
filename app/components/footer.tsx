import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center p-0">
      <div className="flex flex-col items-center px-0 py-16">
        <div className="flex h-[70px] w-[384px] flex-col items-center justify-center gap-6 p-0">
          <Image
            src={'/images/footer/footer-image.png'}
            alt="footer-image"
            width={800}
            height={200}
          />
        </div>
        <p className="text-center text-base font-normal text-gray-500">
          © 2023 adesso, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
