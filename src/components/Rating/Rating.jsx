import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useMemo } from "react";

export default function Rating({ note }) {
  const fullStars = note;
  const emptyStars = useMemo(() => {
    return 5 - fullStars;
  }, [fullStars]);

  return (
    <div className="ratings">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={"fullStars" + index}
          icon={faStar}
          className="star star__full"
        />
      ))}

      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          key={"emptyStars" + index}
          icon={faStar}
          className="star star__empty"
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  note: PropTypes.number.isRequired,
};
