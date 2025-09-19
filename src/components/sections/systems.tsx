import { Box, Typography, Button, Container } from '@mui/material';

function Systems() {
  return (
    <section>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#ffffff',
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
              padding: { xs: '20px', md: '40px' },
            }}
          >
            {/* Technical Systems Image */}
            <Box
              sx={{
                maxWidth: { xs: '100%', md: '50%' },
                position: 'relative',
              }}
            >
              <Box
                component="img"
                src="/Rectangle 3360.png"
                alt="Technical installations"
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '500px' },
                 
                  objectFit: 'cover',
                  zIndex: 4,
                }}
              />
            </Box>

            {/* Content Card */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: '100%', md: '500px' },
                backgroundColor: 'white',
           
                padding: { xs: '30px', md: '50px' },
              
                position: 'relative',
                zIndex: 3,
                marginLeft: { md: '-50px' },
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
                Installations et systèmes techniques
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
                Nous assurons l'efficacité et la sécurité de tous les systèmes des bâtiments grâce à des solutions pour l'électricité, le gaz, le chauffage central, la plomberie et la maintenance générale. Nous nous concentrons sur chaque détail pour garantir la continuité et la performance optimale des installations, offrant des espaces fonctionnels, sûrs et technologiquement avancés.
              </Typography>

              {/* Contact Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  variant="contained"
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

export default Systems;