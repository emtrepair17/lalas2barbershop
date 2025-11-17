import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom"; // Import Link from your routing library

export function TeamCard({ img, name, position, socials, link }) {
  return (
    <Link to={link} className="hover:shadow-lg transition-shadow duration-300">
      <Card
        color="transparent"
        shadow={false}
        className="text-center hover:shadow-lg transition-shadow duration-300 p-4"
      >
        <Avatar
          src={img}
          alt={name}
          size="xxl"
          variant="rounded"
          className="h-full w-full shadow-lg shadow-gray-500/25"
          style={{ height: "320px" }}
        />
        <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
          {name}
        </Typography>
        {position && (
          <Typography className="font-bold text-blue-gray-500">
            {position}
          </Typography>
        )}
        {socials && <div className="mx-auto mt-5">{socials}</div>}
      </Card>
    </Link>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
  link: "#", // Default link if none is provided
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
  link: PropTypes.string, // Add link prop type
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;