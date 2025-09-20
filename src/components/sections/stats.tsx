'use client'
import { Box, Typography, Container } from '@mui/material';
import { usePathname } from 'next/navigation';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

function Stats() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.stats : frTranslations.stats;
  
  return (
    <Box sx={{ 
      marginTop: { xs: '60px', md: '100px' },
      backgroundColor: '#BEBEBE',
      paddingBottom: { xs: '40px', md: '60px' }
    }}>
      {/* Background Image */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '400px', md: '600px' },
          backgroundImage: 'url("/Rectangle 3364.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Stats Cards Section */}
      <Container maxWidth="xl" sx={{ marginTop: { xs: '-120px', md: '-150px' }, position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: '20px', md: '40px' },
            flexDirection: { xs: 'column', md: 'row' },
            padding: { xs: '20px', md: '40px' },
          }}
        >
            {/* Projects Card */}
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: { xs: '30px', md: '35px' },
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                minWidth: { xs: '280px', md: '320px' },
                minHeight: { xs: '200px', md: '240px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
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
                  direction: isArabic ? 'rtl' : 'ltr',
                }}
              >
                {translations.projectsCompleted}
              </Typography>
            </Box>

            {/* Experience Card */}
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: { xs: '30px', md: '35px' },
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                minWidth: { xs: '280px', md: '320px' },
                minHeight: { xs: '200px', md: '240px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
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
                  direction: isArabic ? 'rtl' : 'ltr',
                }}
              >
                {translations.yearsExperience}
              </Typography>
            </Box>

            {/* Visitors Card */}
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: { xs: '30px', md: '35px' },
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                minWidth: { xs: '280px', md: '320px' },
                minHeight: { xs: '200px', md: '240px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
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
                  direction: isArabic ? 'rtl' : 'ltr',
                }}
              >
                {translations.visitors}
              </Typography>
            </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Stats;
