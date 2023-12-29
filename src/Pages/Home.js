import FeatureProducts from '../Components/FeatureProducts';
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services';
import Trusted from '../Components/Trusted';
import { useProductContext } from '../Context/ProductContext';

const Home = () => {
  const { products } = useProductContext();
  console.log(products);
  return (
    <>
      <HeroSection name={'ES Store'} des={'Discover a curated collection of premium products at our online store. From trendy gadgets to timeless classics, find quality, style, and convenience in every purchase. Elevate your shopping experience today!'} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
