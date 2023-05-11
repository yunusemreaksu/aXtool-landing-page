import Brands from './components/brands';

const BRAND_IMAGES = [
  '/brands/image-1.png',
  '/brands/image-2.png',
  '/brands/image-3.png',
  '/brands/image-4.png',
  '/brands/image-5.png'
];

export default function Home() {
  return (
    <div className="text-gray-900">
      <Brands images={BRAND_IMAGES} />
    </div>
  );
}
