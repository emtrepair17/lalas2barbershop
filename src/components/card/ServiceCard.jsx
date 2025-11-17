// import PropTypes from "prop-types";
// import { Card, Avatar, Typography } from "@material-tailwind/react";

// export function TeamCard({ img, name, position, socials }) {
//   return (
//     <Card color="transparent" shadow={false} className="text-center">
//       <Avatar
//         src={img}
//         alt={name}
//         size="xxl"
//         variant="rounded"
//         className="h-full w-full shadow-lg shadow-gray-500/25"
//         style={{height:"320px"}}
//       />
//       <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
//         {name}
//       </Typography>
//       {position && (
//         <Typography className="font-bold text-blue-gray-500">
//           {position}
//         </Typography>
//       )}
//       {socials && <div className="mx-auto mt-5">{socials}</div>}
//     </Card>
//   );
// }

// TeamCard.defaultProps = {
//   position: "",
//   socials: null,
// };

// TeamCard.propTypes = {
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   position: PropTypes.string,
//   socials: PropTypes.node,
// };

// TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

// export default TeamCard;


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ServicesCard=({img, name, position, socials}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
