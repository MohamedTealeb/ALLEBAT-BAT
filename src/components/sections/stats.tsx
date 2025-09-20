'use client'
import { Box, Typography, Container } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

// Hook للعد التدريجي
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // استخدام easing function للحركة السلسة
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return { count, ref, isVisible };
}

function Stats() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.stats : frTranslations.stats;

  // استخدام العد التدريجي لكل رقم
  const projectsCount = useCountUp(2324, 2500);
  const experienceCount = useCountUp(5, 2000);
  const visitorsCount = useCountUp(7820, 3000);
  
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
              ref={projectsCount.ref}
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
                // انيمشن الكارت
                transform: projectsCount.isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: projectsCount.isVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
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
                  // تأثير بصري للرقم أثناء العد
                  transform: projectsCount.isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {projectsCount.count.toLocaleString()}
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
              ref={experienceCount.ref}
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
                // انيمشن الكارت
                transform: experienceCount.isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: experienceCount.isVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s', // تأخير قليل
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
                  // تأثير بصري للرقم أثناء العد
                  transform: experienceCount.isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {experienceCount.count} years
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
              ref={visitorsCount.ref}
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
                // انيمشن الكارت
                transform: visitorsCount.isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: visitorsCount.isVisible ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s', // تأخير أكبر
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
                  // تأثير بصري للرقم أثناء العد
                  transform: visitorsCount.isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {visitorsCount.count.toLocaleString()}
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
