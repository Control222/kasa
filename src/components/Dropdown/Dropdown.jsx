import PropTypes from "prop-types";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown__title">{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`dropdown__icon ${isOpen ? "rotate" : ""}`}
        />
      </button>

      {isOpen && <div className="dropdown__content">{content}</div>}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string, // description
    PropTypes.arrayOf(PropTypes.string), // equipments
    PropTypes.node,
  ]).isRequired,
};
