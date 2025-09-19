import { Box, Typography, Container } from '@mui/material';

function Stats() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#BEBEBE',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: 'url("/Rectangle 3364.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    
        marginTop: { xs: '60px', md: '100px' },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }
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
            {/* Projects Card */}
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: { xs: '20px', md: '25px' },
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                minWidth: { xs: '250px', md: '280px' },
                minHeight: { xs: '140px', md: '160px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#FF9800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/material-symbols-light_design-services.png"
                  alt="Projects icon"
                  sx={{
                    width: '30px',
                    height: '30px',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Number */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  color: '#333',
                  lineHeight: 1,
                }}
              >
                2.324
              </Typography>

              {/* Label */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '12px', md: '13px' },
                  fontWeight: 600,
                  color: '#666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                PROJETS TERMINÉS
              </Typography>
            </Box>

            {/* Experience Card */}
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: { xs: '20px', md: '25px' },
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                minWidth: { xs: '250px', md: '280px' },
                minHeight: { xs: '140px', md: '160px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                
                gap: '15px',
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#FF9800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/Group.png"
                  alt="Experience icon"
                  sx={{
                    width: '30px',
                    height: '30px',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Number */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  color: '#333',
                  lineHeight: 1,
                }}
              >
                5 years
              </Typography>

              {/* Label */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '12px', md: '13px' },
                  fontWeight: 600,
                  color: '#666',
                  textTransform: 'capitalize',
                  letterSpacing: '0.5px',
                }}
              >
                Années d'expérience
              </Typography>
            </Box>

            {/* Visitors Card */}
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: { xs: '20px', md: '25px' },
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                minWidth: { xs: '250px', md: '280px' },
                minHeight: { xs: '140px', md: '160px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#FF9800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/Vector.png"
                  alt="Visitors icon"
                  sx={{
                    width: '30px',
                    height: '30px',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Number */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  color: '#333',
                  lineHeight: 1,
                }}
              >
                7.820
              </Typography>

              {/* Label */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '12px', md: '13px' },
                  fontWeight: 600,
                  color: '#666',
                  textTransform: 'capitalize',
                  letterSpacing: '0.5px',
                }}
              >
                Nombre de visiteurs
              </Typography>
            </Box>
          </Box>
        </Container>
    </Box>
  );
}

export default Stats;
