import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const servicesImgs = [
    {
      src: "/img/galaryimg1.jpg",
      title: "Where every cut is a masterpiece and every style tells your story.",
      subtitle:"Skilled and Experienced Barbers"
    },
    {
      src: "/img/galaryimg3.jpg",
      title: "From classic styles to bold colors—your hair, your way.",
      subtitle:"Personalized Service"
    },
    {
      src: "/img/galaryimg6.jpg",
      title: "Transform your look with our expert cuts and vibrant hair colors.",
      subtitle:"Comprehensive Services"
    },
    {
      src: "/img/galaryimg5.jpg",
      title: "Unleash your inner confidence with the perfect haircut tailored just for you.",
      subtitle:"Family-Friendly Environment"
    },
    {
      src: "/img/galaryimg7.jpg",
      title: "Get the latest trends, timeless styles, and colors that pop, all in one place.",
      subtitle:"Precision & Attention to Detail"
    },
    {
      src: "/img/galaryimg4.jpg",
      title: "Step into a world of stunning hairstyles and colors that match your personality",
      subtitle:"Faith-Driven Values"
    }
  ]

  const images = ["/img/Home2Final.png", "/img/Home3.png"];

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 2000ms (2 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesImgs.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, []);

  

  return (
    <>
    <div className="relative flex h-[80vh] items-center justify-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

      {isMobileView ? (
        <div className="absolute top-0 left-0 w-full h-full">
          {servicesImgs.map((img, index) => (
            <div
              key={img.src}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img.src}
                alt={img.subtitle}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center center" }}
              />
              {/* Title overlay */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center px-4">
              <h2
                className={`text-2xl md:text-4xl font-extrabold text-white
                  drop-shadow-2xl transition-all duration-1000
                  ${index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                  {img.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover brightness-125"
            style={{ objectPosition: "center center" }}
          >
            <source src="/img/lalassalonvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Image slider on top of video */}
          {servicesImgs.map((img, index) => (
            <div
              key={img.src}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img.src}
                alt={img.subtitle}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center center" }}
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center px-4">
              <h2
                className={`text-2xl md:text-4xl font-extrabold text-white
                  drop-shadow-2xl transition-all duration-1000
                  ${index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                  {img.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>



      <div>
        <Typography style={{ fontSize: "66px", color: "#000000", textAlign: "center", fontFamily: "bodoni-moda,bodoni moda,serif", marginTop: "40px" }}>
          Services
        </Typography>
      </div>
      <div style={{ backgroundColor: "#edd5d5", marginLeft: `${isMobileView?"5px":"60px"}`, marginRight: `${isMobileView?"5px":"60px"}` }}>
        <div style={{ padding: "20px" }}>
          <Grid container spacing={3}>
            {
              servicesImgs.map((el, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                <Card sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 240,
                      objectFit: 'cover'
                    }}
                    image={el.src}
                    alt={el.title}
                  />
                  <CardHeader
                    title={el.title}
                    titleTypographyProps={{
                      // variant: 'h6',
                      fontSize:'16px',
                      align: 'center'
                    }}
                    sx={{
                      flexGrow: 1
                    }}
                  />
                </Card>
              </Grid>
              ))
            }
          </Grid>
        </div>
      </div>


      <Box sx={{ py: 8, px: 2 }}>
        <Typography style={{ fontSize: "66px", color: "#000000", textAlign: "center", fontFamily: "bodoni-moda,bodoni moda,serif" }}>
          Contact Us
        </Typography>

        <Grid container spacing={4} justifyContent="space-around" alignContent="center" textAlign="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Address
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                1913 Baltimore-Reynoldsburg Rd, <br />
                Reynoldsburg, OH 43068<br />
                United States
              </Typography>
            </Box>
          </Grid>

          {/* Hours Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Hours
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                Monday - Thursday: 10am - 8pm<br />
                Friday & Saturday: 9am - 9pm<br />
                Sunday: 12pm - 6pm
              </Typography>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Contact
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                Phone: +1 (740) 918-9526<br />
                Gmail: lalas2barbershop@gmail.com<br />
                Email: patrickasamoah12@yahoo.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default Home;