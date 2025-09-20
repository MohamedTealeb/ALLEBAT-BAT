
'use client'
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

function Services() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.services : frTranslations.services;
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // تشغيل انيمشن العنوان أولاً
          setIsVisible(true);
          
          // تشغيل انيمشن الكروت تدريجياً
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, 200 + (index * 150)); // تأخير تدريجي لكل كارت
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const services = [
    {
      id: 1,
      image: '/1.png',
      title: translations.service1.title,
      description: translations.service1.description
    },
    {
      id: 2,
      image: '/2.png',
      title: translations.service2.title,
      description: translations.service2.description
    },
    {
      id: 3,
      image: '/3.png',
      title: translations.service3.title,
      description: translations.service3.description
    },
    {
      id: 4,
      image: '/4.png',
      title: translations.service4.title,
      description: translations.service4.description
    }
  ];

  return (
    <Box
      id="services"
      ref={sectionRef}
      sx={{
        backgroundColor: '#f8f9fa',
        padding: { xs: '60px 0', md: '80px 0' },
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#333',
            marginBottom: '60px',
            direction: isArabic ? 'rtl' : 'ltr',
            // انيمشن العنوان من الأعلى
            transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {translations.title}
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <Box key={service.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: 'none',
                  borderTop: '4px solid #EF6C00',
                  overflow: 'hidden',
                  // انيمشن الكروت من الأعلى
                  transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(-80px)',
                  opacity: visibleCards.includes(index) ? 1 : 0,
                  '&:hover': {
                    transform: visibleCards.includes(index) ? 'translateY(-8px) scale(1.03)' : 'translateY(-80px)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    padding: '25px 18px',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Service Image Circle */}
                  <Box
                    sx={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      backgroundColor: '#EF6C00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                      boxShadow: '0 3px 12px rgba(239, 108, 0, 0.25)',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={40}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>

                  {/* Service Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: '#333',
                      marginBottom: '12px',
                      lineHeight: 1.3,
                      minHeight: '40px',
                      direction: isArabic ? 'rtl' : 'ltr',
                      textAlign: 'center',
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Service Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '13px',
                      color: '#777',
                      lineHeight: 1.5,
                      flexGrow: 1,
                      textAlign: 'center',
                      direction: isArabic ? 'rtl' : 'ltr',
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Services;