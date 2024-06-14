import NavBar from "../components/NavBar";
import CarouselCats from "../components/CarouselCats";
import CarouselProducts from "../components/CarouselProducts";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <CarouselProducts />
      <CarouselCats />
    </>
  );
}

export default Home;
