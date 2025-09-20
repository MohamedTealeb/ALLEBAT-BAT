'use client'
import { Box, Typography, Container, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

function Photo() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.photos : frTranslations.photos;
  
  const photos = [
    '/Rectangle 58.png',
    '/Rectangle 59.png', 
    '/Rectangle 60.png',
    '/Rectangle 61.png',
    '/Rectangle 62.png',
    '/Rectangle 63.png',
    '/Rectangle 64.png',
    '/Rectangle 65.png',
    '/Rectangle 66.png',
    '/Rectangle 67.png',
    '/Rectangle 68.png',
    '/Rectangle 69.png',
   
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const photosPerView = 4; // Fixed for desktop, CSS will handle responsive behavior

  const nextPhotos = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + photosPerView >= photos.length ? 0 : prevIndex + photosPerView
    );
  };

  const prevPhotos = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, photos.length - photosPerView) : Math.max(0, prevIndex - photosPerView)
    );
  };

  const visiblePhotos = photos.slice(currentIndex, currentIndex + photosPerView);

  return (
    <Box
      id="photos"
      sx={{
        backgroundColor: '#BEBEBE',
        paddingY: { xs: '60px', md: '80px' },
      }}
    >
      <Container maxWidth="xl">
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#333',
            marginBottom: { xs: '40px', md: '60px' },
            direction: isArabic ? 'rtl' : 'ltr',
          }}
        >
          {translations.title}
        </Typography>

        {/* Photos Gallery with Navigation */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: '10px', md: '20px' },
          }}
        >
          {/* Left Arrow */}
          <IconButton
            onClick={prevPhotos}
            sx={{
              backgroundColor: 'black',
              color: 'white',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'scale(1.1)',
                color: 'black',
              },    
              width: { xs: '40px', md: '50px' },
              height: { xs: '40px', md: '50px' },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Photos Container */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', // Mobile: 2 photos
                sm: 'repeat(3, 1fr)',  // Tablet: 3 photos
                md: 'repeat(4, 1fr)'   // Desktop: 4 photos
              },
              gap: { xs: '8px', md: '15px' },
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              maxWidth: { xs: '320px', sm: '600px', md: '1200px' },
            }}
          >
            {visiblePhotos.map((photo, index) => (
              <Box
                key={currentIndex + index}
                component="img"
                src={photo}
                alt={`Photo ${currentIndex + index + 1}`}
                sx={{
                  width: '100%',
                  height: { xs: '120px', sm: '150px', md: '280px' },
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  },
                }}
              />
            ))}
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={nextPhotos}
            sx={{
              backgroundColor: 'black',
              color: 'white',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                transform: 'scale(1.1)',
              },
              width: { xs: '40px', md: '50px' },
              height: { xs: '40px', md: '50px' },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Photo;
