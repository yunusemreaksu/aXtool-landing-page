import Brands from './components/brands';
import Features from './components/features';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BOTTOM_ROW, BRAND_IMAGES, CTA_CARD, TOP_ROW } from './constants';

export default function Home() {
  return (
    <div className="text-gray-500">
      <Navbar />
      <Hero />
      <Brands images={BRAND_IMAGES} />
      <Features cta={CTA_CARD} topRow={TOP_ROW} bottomRow={BOTTOM_ROW} />
      <Footer />
    </div>
  );
}
