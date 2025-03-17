import { useParams, Navigate } from "react-router";
import locations from "../../data/locations.json";

import Dropdown from "../Dropdown/Dropdown";
import Tags from "../Tags/Tags";
import Rating from "../Rating/Rating";
import Slider from "../../components/Slider/Slider";

export default function AnnonceDetails() {
  // Get the ID from the URL
  const { id } = useParams();

  // Find the location data based on ID
  const location = locations.find((loc) => loc.id === id);

  // If ID is invalid, redirect to error page
  if (!location) {
    return <Navigate to="/error" replace />;
  }

  return (
    <>
      <Slider images={location.pictures} />

      <section className="location-details">
        <div className="description">
          <div className="informations">
            <h2 className="informations__titre">{location.title}</h2>
            <p className="informations__adresse">{location.location}</p>
            <Tags tags={location.tags} />
          </div>

          <div className="rating-host">
            <Rating note={parseFloat(location.rating)} />

            <div className="host">
              <p className="host__name">{location.host.name}</p>
              <img
                src={location.host.picture}
                alt={location.host.name}
                className="host__image"
              />
            </div>
          </div>
        </div>
        <div className="dropdown-container">
          <div className="dropdown-description">
            <Dropdown title="Description" content={location.description} />
          </div>
          <div className="dropdown-equipements">
            <Dropdown
              title="Equipements"
              content={location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            />
          </div>
        </div>
      </section>
    </>
  );
}
