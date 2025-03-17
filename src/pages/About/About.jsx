import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";

import aboutBanner from "../../assets/images/about-background.png";

import aboutContent from "../../data/aboutData";

export default function About() {
  return (
    <>
      <Header />
      <main className="about__main">
        <Banner image={aboutBanner} />
        <section className="dropdown__container">
          {aboutContent.map((item, index) => (
            <Dropdown key={index} title={item.title} content={item.content} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
