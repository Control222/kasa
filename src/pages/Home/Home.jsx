import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import homeBanner from "../../assets/images/e270fc8fc902a1eb738458e7b29c1899.jpg";

import locations from "../../data/locations.json";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home__main">
        <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
        <Gallery locations={locations} />
      </main>
      <Footer />
    </>
  );
}
