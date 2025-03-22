import PropTypes from "prop-types";

export default function Card({ title, cover }) {
  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img src={cover} alt={title} className="card__image" />
        <div className="card__overlay"></div>
      </div>
      <h2 className="card__title">{title}</h2>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
