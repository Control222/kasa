import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Card from "../Cards/Card";

export default function Gallery({ locations }) {
  return (
    <div className="gallery">
      {locations.map((loc) => (
        <Link key={loc.id} to={`/annonce/${loc.id}`}>
          <Card title={loc.title} cover={loc.cover} />
        </Link>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
};
