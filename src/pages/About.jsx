import React from "react";
import { Typography, Box, useTheme, useMediaQuery, Grid } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

export function About() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const paragraph = 
    "Welcome to LALAS2 Barber Shop LLC(Inside Famous Barber), where precision meets style, and grooming becomes an experience. We are a modern, faith-driven barbershop with a commitment to offering the highest quality haircuts, fades, and grooming services in a warm and friendly environment. Our expert barbers are dedicated to crafting hairstyles that are as unique as you are, paying attention to every detail to ensure you leave feeling refreshed, confident, and looking your absolute best." +
    "At LALAS2, we believe that a great haircut is more than just a service; it's an art. Our passion for styling, combined with years of experience, ensures that we provide not only impeccable haircuts but also a personal touch that makes you feel right at home. Whether you're coming in for a classic trim, a bold new color, or a beard grooming session, we treat every client with respect, care, and a focus on delivering excellence." +
    "More than just a barbershop, LALAS2 is a place where community, faith, and style come together. We’ve built our business on these core values to create a space where everyone feels valued, inspired, and ready to take on the world with a fresh new look.";

  const Why = [
    "Skilled and Experienced Barbers",
    "Personalized Service",
    "Comprehensive Services",
    "Family-Friendly Environment"
  ]
  const Why2 = [
    "Precision & Attention to Detail",
    "Faith-Driven Values",
    "Up-to-Date Trends & Techniques",
    "Comfortable, Relaxing Experience"
  ]

  return (
    <>
      <div className="relative flex h-[110vh] content-center items-center justify-center overflow-hidden">
        <Grid container spacing={3} style={{ padding: "40px", fontFamily: "bodoni-moda,bodoni moda,serif",paddingTop:`${isMobileView&&"250px"}` }}>
          <Grid md={6} xs={12}><img src="/img/galaryimg4.jpg" className="img-responsive" alt="" />{" "}</Grid>
          <Grid md={6} xs={12}>
            <div style={{ padding: "40px" }}>
            <Typography style={{ fontSize: "40px", color: "#000000", fontFamily: "bodoni-moda,bodoni moda,serif" }}>About Us</Typography>
              <p>{paragraph ? paragraph : "loading..."}</p>
              <Typography style={{ fontSize: "25px", color: "#000000", fontFamily: "bodoni-moda,bodoni moda,serif", paddingTop:"30px" }}>Why Choose Us?</Typography>
              
              <Grid container>
                <Grid item md={6} xs={12}>
                <ul>
                    {Why.map((d, i) => (
                      <li key={`${d}-${i}`}><DoneIcon color="primary"/>{d}</li>
                    ))}
                  </ul>
                </Grid>
                <Grid item md={6} xs={12}>
                <ul>
                    {Why2.map((d, i) => (
                      <li key={`${d}-${i}`}><DoneIcon color="primary"/>{d}</li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
              
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default About;