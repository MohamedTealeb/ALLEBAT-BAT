
import { Box, Typography, Button, Container } from '@mui/material';

function Hero() {
  return (
    <section>
      <Box
        sx={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Light overlay for better text readability
          }
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              minHeight: '80vh',
            }}
          >
            {/* Content Card */}
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '400px',
                width: '100%',
                marginRight: { md: '50px', xs: '0' },
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                minHeight: '500px',
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
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: '#333',
                  marginBottom: '20px',
                  lineHeight: 1.2,
                }}
              >
                Création &<br />
                Rénovation
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#666',
                  marginBottom: '30px',
                }}
              >
                Nous créons et rénovons des espaces avec un esprit moderne, en soignant chaque détail. Nous garantissons solidité, sécurité et design raffiné, avec des solutions durables qui préservent la qualité et l&apos;élégance de vos lieux.
              </Typography>

              {/* Contact Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#EF6C00',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '8px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 3px 10px rgba(239, 108, 0, 0.3)',
                    width: '50%',
                    '&:hover': {
                      backgroundColor: '#E65100',
                      boxShadow: '0 4px 15px rgba(239, 108, 0, 0.4)',
                      transform: 'translateY(-1px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contactez-nous
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