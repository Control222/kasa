import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import AnnonceDetails from "../../components/AnnonceDetails/AnnonceDetails";

export default function AnnonceLogement() {
  return (
    <>
      <Header />
      <main className="annonce__main">
        <AnnonceDetails location={location} />
      </main>
      <Footer />
    </>
  );
}
