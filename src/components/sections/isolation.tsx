

'use client'
import { Box, Typography, Button, Container } from '@mui/material';
import { usePathname } from 'next/navigation';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';
import Stats from './stats';

function Isolation() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.isolation : frTranslations.isolation;
  
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
          minHeight: '120vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#BEBEBE',
          overflow: 'visible',
          marginTop: { xs: '60px', md: '170px' },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: '20px', md: '60px' },
              flexDirection: { xs: 'column', md: 'column' },
              maxWidth: { xs: '100%', md: '100%' },
              zIndex:9,
              padding: { xs: '20px', md: '40px' },
            }}
          >
            {/* Content Card - Left Side */}
            <Box
  sx={{
    position: { xs: 'relative', md: 'absolute' },
    top: { xs: 'auto', md: '40px' },
    left: { xs: 'auto', md: '80px' },
    transform: { xs: 'none', md: 'none' },
    width: { xs: '100%', md: '400px' },
    maxWidth: { xs: '400px', md: '400px' },
    height: 'auto',
    minHeight: { xs: 'auto', md: '600px' },
    backgroundColor: 'white',
    padding: { xs: '30px', md: '30px' },
    zIndex: 10,
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    borderRadius: '12px',
    mx: { xs: 'auto', md: 0 },
    mb: { xs: 4, md: 0 },
  }}
>
  {/* Title */}
  <Typography
    variant="h2"
    sx={{
      fontWeight: 'bold',
      fontSize: { xs: '1.4rem', md: '1.8rem' },
      color: '#333',
      marginBottom: '15px',
      lineHeight: 1.2,
    }}
  >
    {translations.title}
  </Typography>

  {/* Description */}
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: '15px', md: '16px' },
      lineHeight: 1.8, // أكبر للانتشار أكثر
      color: '#555',
      marginBottom: '25px',
      textAlign: 'left',
      letterSpacing: '0.3px', // مسافة بين الحروف للوضوح
    }}
  >
   {translations.description}
  </Typography>

  {/* Contact Button */}
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
             {/* Image Section - Far Right Side */}
             <Box
               sx={{
                 position: { xs: 'relative', md: 'relative' },
                 width: { xs: '100%', md: '440px' },
                 height: { xs: '300px', md: '900px' },
                 display: 'flex',
                 alignItems: 'flex-start',
                 justifyContent: { xs: 'center', md: 'flex-end' },
                 marginTop: { xs: 0, md: '-300px' },
                 marginLeft: { xs: 0, md: '504px' },
               }}
             >
               {/* Main Isolation Image - Far Right */}
               <Box
                 component="img"
                 src="/Rectangle 3361.png"
                 alt="Building isolation"
                 sx={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover',
                   zIndex: 5,
                   marginLeft: { xs: 0, md: '30px' },
                   borderRadius: { xs: '12px', md: 0 },
                 }}
               />

             </Box>

            {/* Secondary Image - Center of Page - Hidden on mobile */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 7,
              }}
            >
              <Box
                component="img"
                src="/Rectangle 3362.png"
                alt="Building maintenance"
                sx={{
                  width: '1280px',
                  height: '580px',
                  marginBottom: '400px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Stats />
    </section>
  );
}

export default Isolation;