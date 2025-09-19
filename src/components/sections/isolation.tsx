

import { Box, Typography, Button, Container } from '@mui/material';
import Stats from './stats';

function Isolation() {
  return (
    <section>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#BEBEBE',
          overflow: 'visible',
          marginTop: { xs: '60px', md: '100px' },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: '20px', md: '60px' },
              flexDirection: { xs: 'column', md: 'row' },
              minHeight: '80vh',
              zIndex:9,
              padding: { xs: '20px', md: '40px' },
            }}
          >
            {/* Content Card - Left Side */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: '100%', md: '3000px' },
                backgroundColor: 'white',
                padding: { xs: '30px', md: '40px' },
                position: 'relative',
                zIndex: 10,
                marginRight: { md: '-50px' },
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
                }}
              >
                Isolation et entretien des bâtiments
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '13px', md: '14px' },
                  lineHeight: 1.6,
                  color: '#555',
                  marginBottom: '30px',
                  textAlign: 'left',
                }}
              >
                Nous protégeons vos bâtiments avec des solutions d'isolation thermique et acoustique, de traitement de l'humidité et de maintenance complète. Nous offrons une protection durable et une qualité élevée pour assurer un environnement sain, sûr et esthétique pour les occupants, tout en préservant l'élégance et la valeur architecturale du bâtiment pendant de nombreuses années.
              </Typography>

              {/* Contact Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start',}}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FF9800',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '10px 24px',
                    fontSize: '13px',
                    fontWeight: 600,
                    zIndex: 8,
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
                  Contactez-nous
                </Button>
              </Box>
            </Box>

             {/* Image Section - Far Right Side */}
             <Box
               sx={{
                 position: 'relative',
                 width: { xs: '100%', md: '440px' },
                 height: { xs: '400px', md: '700px' },
                 display: 'flex',
                 alignItems: 'flex-start',
                 justifyContent: 'flex-end',
                 marginTop: { md: '-100px' },
                 marginLeft: { md: '504px' },
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
                   marginLeft: { md: '30px' },
                 }}
               />

             </Box>

            {/* Secondary Image - Center of Page */}
            <Box
              sx={{
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
                  width: { xs: '180px', md: '1280px' },
                  height: { xs: '180px', md: '580px' },
                  marginBottom: { xs: '100px', md: '100px' },
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