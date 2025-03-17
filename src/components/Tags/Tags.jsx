import PropTypes from "prop-types";

export default function Tags({ tags }) {
  return (
    <ul className="information-tags">
      {tags.map((tag, index) => (
        <li key={index} className="li-tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
