
'use client'
import { Box, Typography, Button, Container } from '@mui/material';
import { usePathname } from 'next/navigation';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

function Rectangle() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.finitions : frTranslations.finitions;
  
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <section>
      <Box
        sx={{
          minHeight: { xs: 'auto', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#BEBEBE',
          overflow: 'visible',
          marginTop: { xs: '60px', md: '370px' },
          py: { xs: 4, md: 0 },
        }}
      >

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: '20px', md: '40px' },
              flexDirection: { xs: 'column', md: 'row' },
              minHeight: '80vh',
              padding: { xs: '20px', md: '40px' },
            }}
          >
             {/* Bathroom Image with small image below */}
             <Box
               sx={{
                 maxWidth: { xs: '100%', md: '400px' },
                 position: 'relative',
                 display: 'flex',
                 flexDirection: 'column',
                 gap: '20px',
               }}
             >
               {/* Main Bathroom Image */}
               <Box
                 component="img"
                 src="/Rectangle 3358.png"
                 alt="Bathroom renovation"
                 sx={{
                   width: '100%',
                   height: { xs: '400px', md: '600px' },
               zIndex: 4,
                   objectFit: 'cover',
                 }}
               />
               
               {/* Small Image Below - positioned absolute - Hidden on mobile */}
                <Box
                component="img"
                src="/Rectangle 3359.png"
                alt="Design decoration"
                sx={{
                  position: 'absolute',
                  width: '1900px',
                  height: '200px',
                  top: '420px',
                  left: '390px',
                  objectFit: 'fill',
                  transform: 'scaleX(1.5)',
                  display: { xs: 'none', md: 'block' },
                }}
              />

               {/* Orange Circle Image - positioned above card right - Hidden on mobile */}
               <Box
                 component="img"
                 src="/Group 5521.png"
                 alt="Orange circle decoration"
                 sx={{
                   position: 'absolute',
                   width: '200px',
                   height: 'auto',
                   top: '-70px',
                   left: '580px',
                   display: { xs: 'none', md: 'block' },
                 }}
               />

               {/* Group 5522 Image - positioned absolute - Hidden on mobile */}
               <Box
                 component="img"
                 src="/Group 5522.png"
                 alt="Group decoration"
                 sx={{
                   position: 'absolute',
                   width: '280px',
                   height: 'auto',
                   top: '150px',
                   right: '265px',
                   marginTop: '270px',
                   display: { xs: 'none', md: 'block' },
                 }}
               />
             </Box>

            {/* Content Card */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: '100%', md: '350px' },
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: { xs: '25px', md: '40px' },
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                zIndex: 3,
                marginLeft: { md: '-50px' }, // Overlap effect like in the image
                marginBottom: { xs: '30px', md: '80px' },
              }}
            >
              {/* Title */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.6rem', md: '1.9rem' },
                  color: '#333',
                  marginBottom: '20px',
                  lineHeight: 1.2,
                  direction: isArabic ? 'rtl' : 'ltr',
                  textAlign: isArabic ? 'right' : 'left',
                }}
              >
                {translations.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '13px', md: '14px' },
                  lineHeight: 1.6,
                  color: '#555',
                  marginBottom: '30px',
                  direction: isArabic ? 'rtl' : 'ltr',
                  textAlign: isArabic ? 'right' : 'left',
                }}
              >
                {translations.description}
              </Typography>

              {/* Contact Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  variant="contained"
                  onClick={handleScrollToContact}
                  sx={{
                    backgroundColor: '#FF9800',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '10px 24px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 3px 12px rgba(255, 152, 0, 0.4)',
                    '&:hover': {
                      backgroundColor: '#F57C00',
                      boxShadow: '0 5px 18px rgba(255, 152, 0, 0.5)',
                      transform: 'translateY(-1px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {translations.contactButton}
                </Button>
              </Box>
            </Box>
          </Box>

        </Container>
      </Box>
    </section>
  );
}

export default Rectangle;