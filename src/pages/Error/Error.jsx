import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router";

export default function Error() {
  return (
    <>
      <Header />
      <main className="error">
        <p className="error__number">404</p>
        <p className="error__text">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <Link to="/" className="error__link">
          Retourner sur la page d&apos;acceuil
        </Link>
      </main>
      <Footer />
    </>
  );
}
