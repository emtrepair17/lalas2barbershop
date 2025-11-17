
import * as React from 'react';
import { Card, CardMedia, Typography, CardContent, Grid, Box, useTheme } from '@mui/material';

const serviceData = [
    {
        title: "Haircuts",
        img: "/img/galaryimg7.jpg",
        tags: [
            "Men's Haircut",
            "Kids Haircuts",
            "Long Haircuts",
            "Military Haircut",
            "Buzz Cuts",
            "Fade Cut",
            "Hair Shape-Up"
        ]
    },
    {
        title: "Beard Services",
        img: "/img/haircut.png",
        tags: [
            "Beard Trim",
            "Beard Maintenance",
            "Beard Dyeing",
            "Beard Conditioning"
        ]
    },
    {
        title: "Hair Coloring",
        img: "/img/galaryimg6.jpg",
        tags: [
            "Full Color",
            "Highlights",
            "Balayage",
            "Color Touch-Up",
            "Ombre Color"
        ]
    },
    {
        title: "Shaving Services",
        img: "/img/galaryimg1.jpg",
        tags: [
            "Classic Shave",
            "Straight Razor Shave",
            "Head Shave"
        ]
    },
    {
        title: "Specialty Cuts & Styling",
        img: "/img/galaryimg8.jpg",
        tags: [
            "Curly Hair Styling",
            "Razor Cut",
            "Edge Up",
            "Men's Hair Lines"
        ]
    },
    {
        title: "Kids & Family Services",
        img: "/img/galaryimg9.jpg",
        tags: [
            "Kids Haircuts",
            "Father-Son Haircuts",
            "Family Grooming Packages"
        ]
    }
];

function Services() {
    const theme = useTheme();
    
    return (
        <Box sx={{ 
            py: 8,
            px: 2,
            backgroundColor: theme.palette.background.default
        }}>
            <Typography variant="h3" align="center" gutterBottom sx={{
                fontWeight: 700,
                mb: 6,
                color: theme.palette.text.primary
            }}>
                Our Services
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
                {serviceData.map((service, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card sx={{ 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 3,
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 6
                            }
                        }}>
                            {/* Fixed height image container */}
                            <Box sx={{
                                height: 200,
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <CardMedia
                                    component="img"
                                    image={service.img}
                                    alt={service.title}
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0
                                    }}
                                />
                            </Box>
                            
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h3" sx={{
                                    fontWeight: 600,
                                    color: theme.palette.primary.main,
                                    mb: 2
                                }}>
                                    {service.title}
                                </Typography>
                                <Box component="ul" sx={{
                                    pl: 2,
                                    listStyleType: 'none',
                                    maxHeight: 200,
                                    overflowY: 'auto',
                                    '&::-webkit-scrollbar': {
                                        width: 4
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 2
                                    }
                                }}>
                                    {service.tags.map((tag, tagIndex) => (
                                        <Typography 
                                            key={tagIndex}
                                            component="li"
                                            variant="body1"
                                            sx={{ 
                                                color: 'text.secondary',
                                                mb: 1,
                                                '&:before': {
                                                    content: '"•"',
                                                    color: theme.palette.primary.main,
                                                    display: 'inline-block',
                                                    width: '1em',
                                                    marginLeft: '-1em'
                                                }
                                            }}
                                        >
                                            {tag}
                                        </Typography>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Services;