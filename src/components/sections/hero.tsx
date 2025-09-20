
'use client'
import { Box, Typography, Button, Container } from '@mui/material';
import { usePathname } from 'next/navigation';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

function Hero() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.hero : frTranslations.hero;
  
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
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          objectFit: 'cover',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
              minHeight: { xs: '70vh', md: '80vh' },
              px: { xs: 2, md: 0 },
            }}
          >
            {/* Content Card */}
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                padding: { xs: '30px', md: '40px' },
                maxWidth: { xs: '350px', md: '400px' },
                width: '100%',
                marginRight: { xs: 0, md: '50px' },
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                minHeight: { xs: '400px', md: '500px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Title */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
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
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: 1.6,
                  color: '#666',
                  marginBottom: '30px',
                  direction: isArabic ? 'rtl' : 'ltr',
                  textAlign: isArabic ? 'right' : 'left',
                }}
              >
                {translations.description}
              </Typography>

              {/* Contact Button */}
              <Box sx={{ display: 'flex', justifyContent: isArabic ? 'flex-end' : 'flex-start' }}>
                <Button
                  variant="contained"
                  onClick={handleScrollToContact}
                  sx={{
                    backgroundColor: '#EF6C00',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '8px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 3px 10px rgba(239, 108, 0, 0.3)',
                    width: { xs: '70%', md: '50%' },
                    '&:hover': {
                      backgroundColor: '#E65100',
                      boxShadow: '0 4px 15px rgba(239, 108, 0, 0.4)',
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

export default Hero;