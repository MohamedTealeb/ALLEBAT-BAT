

import { Box, Typography, Button, Container } from '@mui/material';
import Stats from './stats';

function Isolation() {
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
    position: 'absolute',
    top: { xs: '100px', md: '40px' },   // مكان الكارت من فوق
    left: { xs: '50%', md: '80px' },     // مكان الكارت من الشمال
    transform: { xs: 'translateX(-50%)', md: 'none' }, // في الموبايل يبقى في النص
    width: { xs: '90%', md: '400px' },   // أوسع شوية
    height: { xs: '400px', md: '600px' },
    backgroundColor: 'white',
    padding: { xs: '20px', md: '30px' }, // padding أقل عشان الطول يقل
    zIndex: 10,
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    borderRadius: '12px',
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
    Isolation et entretien des bâtiments
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
   Nous protégeons vos bâtiments avec des solutions d’isolation thermique et acoustique, de traitement de l’humidité et de maintenance complète. Nous offrons une protection durable et une qualité élevée pour assurer un environnement sain, sûr et esthétique pour les occupants, tout en préservant l’élégance et la valeur architecturale du bâtiment pendant de nombreuses années
  </Typography>

  {/* Contact Button */}
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
             {/* Image Section - Far Right Side */}
             <Box
               sx={{
                 position: 'relative',
                 width: { xs: '100%', md: '440px' },
                 height: { xs: '400px', md: '900px' },
                 display: 'flex',
                 alignItems: 'flex-start',
                 justifyContent: 'flex-end',
                 marginTop: { md: '-300px' },
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
                  marginBottom: { xs: '100px', md: '400px' },
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