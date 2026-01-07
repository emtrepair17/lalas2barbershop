import React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

export default function Gallery() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const galaryImages = [
    "/img/galary Images/img1.jpeg",
    "/img/galary Images/img2.jpeg",
    "/img/galary Images/img3.jpeg",
    "/img/galary Images/img4.jpeg",
    "/img/galary Images/img5.jpeg",
    "/img/galary Images/img6.jpeg",
    "/img/galary Images/img7.jpeg",
    "/img/galary Images/img8.jpeg",
    "/img/galary Images/img9.jpeg",
    "/img/galary Images/img10.jpeg",
    "/img/galary Images/img11.jpeg",
    "/img/galary Images/img12.jpeg",
    "/img/galary Images/img13.jpeg",
    "/img/galary Images/img14.jpeg",
    "/img/galary Images/img15.jpeg",
    "/img/galary Images/img16.jpeg",
    "/img/galary Images/img17.jpeg",
    "/img/galary Images/img18.jpeg",
    "/img/galary Images/img19.jpeg",
    "/img/galary Images/img20.jpeg",
    "/img/galary Images/img21.jpeg",
    "/img/galary Images/img22.jpeg",
    "/img/galary Images/img23.jpeg",
    "/img/galary Images/img24.jpeg",
    "/img/galary Images/img25.jpeg",
    "/img/galary Images/img26.jpeg",
    "/img/galary Images/img27.jpeg",
    "/img/galary Images/img28.jpeg",
    "/img/galary Images/img29.jpeg",
    "/img/galary Images/img30.jpeg",
    "/img/galary Images/img31.jpeg",
    "/img/galary Images/img32.jpeg",
  ];

  return (
    <div className="relative flex justify-center overflow-hidden">
      <Grid
        container
        spacing={3}
        sx={{
          padding: isMobileView ? "70px 20px" : "70px 40px",
          fontFamily: "bodoni-moda, bodoni moda, serif",
        }}
      >
        {galaryImages.map((el, index) => (
          <Grid item xs={12} md={3} key={index}>
            <img
              src={el}
              alt="gallery"
              style={{ width: "80%", borderRadius: "10px" }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
