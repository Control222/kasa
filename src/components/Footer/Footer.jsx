import logoFooter from "../../assets/images/logo-footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo kasa" className="footer__logo" />
      <div className="footer__text__container">
        <p className="footer__text">© 2020 Kasa.</p>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
