import Brands from './components/brands';
import { BRAND_IMAGES } from './constants';

export default function Home() {
  return (
    <div className="text-gray-500">
      <Brands images={BRAND_IMAGES} />
    </div>
  );
}
