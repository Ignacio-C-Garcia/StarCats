import styles from "../styles/Home.module.css";
import CarouselCats from "../components/CarouselCats";
import CarouselProducts from "../components/CarouselProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <CarouselProducts />
      <CarouselCats />
      <Footer />
    </>
  );
}

export default Home;
