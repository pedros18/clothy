import React from 'react';
import { Box, Container } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import IconSection from './IconSection';

const Hero = () => {

    // Array of image paths
    const carouselImages1 = [
      'src/images/suits.webp',
      'src/images/watches.avif',
      'src/images/clothes2.webp',
      'src/images/suits3.avif',
      'src/images/iphones16.avif',
      'src/images/suits2.avif'
    ];
    const carouselImages2 = [
      'src/images/asus.jpg',
      'src/images/casque.jpeg',
      'src/images/macbook.jpg',
      'src/images/Samsung.png'

    ]

  return (
    <Container
    
  >
    {/* Left Section - Carousel */}
    <Box sx={{
      mt: 2.5,pt:2,
      display: 'flex',
      alignItems: 'center', // Stretch items vertically to match height
      gap: 2,
    }} >
      <Box
        sx={{
          flex: 2, // Takes more space than the right section
          height: '100%', // Full height of the container
        }}
      >
        <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          emulateTouch
        >
          {carouselImages1.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`carousel-image-${index}`} />
            </div>
          ))}
        </Carousel>
      </Box>
      
      {/* Right Section - Two Small Stacked Images */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Space out the images evenly
            flex: 0.64, // Smaller than the left section
            height: '100%', // Match the height of the left image
            gap: 2, // Gap between the two small images
          }}
        >
          <Box
            sx={{
              flex: 1, // Take up half of the vertical space
              height: '50%', // Ensure the height is exactly half
            }}
          >
            <Carousel
          showArrows={true}
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          emulateTouch
        >
          {carouselImages2.map((image, index) => (
            <div key={index}>
              <img src={image} style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                objectFit: 'cover', // Ensure image covers the whole box
              }} alt={`carousel-image-${index}`} />
            </div>
          ))}
        </Carousel>
          </Box>
          <Box
            sx={{
              flex: 1, // Take up half of the vertical space
              height: '50%', // Ensure the height is exactly half
            }}
          >
            <img
              src="src/images/iphone12.jpeg"
              alt="iphoneimg"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                objectFit: 'cover', // Ensure image covers the whole box
              }}
            />
          </Box>
          
        </Box>
    </Box >
      
      <IconSection/>
    </Container>
  );
};



export default Hero;
