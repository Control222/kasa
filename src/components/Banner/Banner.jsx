import "./Banner.scss";

import PropTypes from "prop-types";

export default function Banner({ image, text }) {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      {text && <h1 className="banner-container__text">{text}</h1>}
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};
