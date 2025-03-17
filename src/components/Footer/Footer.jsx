import logoFooter from "../../assets/images/logo-footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
