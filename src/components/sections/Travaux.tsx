'use client'
import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

function Travaux() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.travaux : frTranslations.travaux;
  const [isVisible, setIsVisible] = useState(false);
  const [leftImageVisible, setLeftImageVisible] = useState(false);
  const [rightImageVisible, setRightImageVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [overlayImagesVisible, setOverlayImagesVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // تشغيل انيمشن الصور الرئيسية أولاً
          setTimeout(() => setLeftImageVisible(true), 200);
          setTimeout(() => setRightImageVisible(true), 400);
          
          // ثم الكارت من الأعلى
          setTimeout(() => setCardVisible(true), 600);
          
          // أخيراً الصور الإضافية
          setTimeout(() => setOverlayImagesVisible(true), 800);
          
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
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
    <Box
      id="travaux"
      ref={sectionRef}
      sx={{
        backgroundColor: "#f8f9fa",
        padding: { xs: "100px 0 60px 0", md: "190px 0 80px 0" },
        position: "relative", // مهم عشان الصور المطلقة
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            minHeight: "600px",
          }}
        >
          {/* Images Row */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3, md: 4 },
              height: "100%",
              minHeight: "500px",
            }}
          >
            {/* Left Image */}
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "100%",
                minHeight: { xs: "300px", md: "500px" },
                position: "relative",
                // انيمشن الصورة الشمال من الشمال
                transform: leftImageVisible ? 'translateX(0)' : 'translateX(-100px)',
                opacity: leftImageVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <Image
                src="/Rectangle 3353.png"
                alt="Construction work"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* Right Image */}
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "100%",
                minHeight: { xs: "300px", md: "500px" },
                position: "relative",
                // انيمشن الصورة اليمين من اليمين
                transform: rightImageVisible ? 'translateX(0)' : 'translateX(100px)',
                opacity: rightImageVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <Image
                src="/Rectangle 3354.png"
                alt="Construction work"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* Content Overlay */}
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              bottom: { xs: "auto", md: "390px" },
              left: { xs: "auto", md: "50%" },
              transform: { 
                xs: cardVisible ? "none" : "translateY(-50px)", 
                md: cardVisible ? "translateX(-50%)" : "translateX(-50%) translateY(-50px)" 
              },
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(15px)",
              borderRadius: "20px",
              padding: { xs: "30px", md: "40px" },
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              maxWidth: "600px",
              width: "90%",
              textAlign: "left",
              zIndex: 2,
              mx: { xs: "auto", md: 0 },
              mt: { xs: 3, md: 0 },
              // انيمشن الكارت من الأعلى
              opacity: cardVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                color: "#333",
                marginBottom: "20px",
                lineHeight: 1.2,
                direction: isArabic ? 'rtl' : 'ltr',
                textAlign: isArabic ? 'right' : 'left',
              }}
            >
              {translations.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#666",
                marginBottom: "30px",
                direction: isArabic ? 'rtl' : 'ltr',
                textAlign: isArabic ? 'right' : 'left',
              }}
            >
              {translations.description}
            </Typography>

            <Button
              variant="contained"
              onClick={handleScrollToContact}
              sx={{
                backgroundColor: "#EF6C00",
                color: "white",
                borderRadius: "20px",
                padding: "12px 30px",
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 3px 10px rgba(239, 108, 0, 0.3)",
                "&:hover": {
                  backgroundColor: "#E65100",
                  boxShadow: "0 4px 15px rgba(239, 108, 0, 0.4)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {translations.contactButton}
            </Button>
          </Box>

          {/* Two Overlay Images - Hidden on mobile */}
          {/* First image - overlapping on the left main image */}
          <Box
            sx={{
              position: "absolute",
              top: "450px",
              left: "270px",
              width: "580px",
              height: "420px",
              overflow: "hidden",
              zIndex: 3,
              display: { xs: 'none', md: 'block' },
              // انيمشن الصورة الإضافية من الشمال
              transform: overlayImagesVisible ? 'translateX(0) scale(1)' : 'translateX(-80px) scale(0.8)',
              opacity: overlayImagesVisible ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Image
              src="/Rectangle 3356.png"
              alt="Construction work"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Second image - below the grid */}
          <Box
            sx={{
              position: "absolute",
              bottom: "-380px",
              right: "150px",
              width: "420px",
              height: "440px",
              overflow: "hidden",
              display: { xs: 'none', md: 'block' },
              // انيمشن الصورة الإضافية من اليمين
              transform: overlayImagesVisible ? 'translateX(0) scale(1)' : 'translateX(80px) scale(0.8)',
              opacity: overlayImagesVisible ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s', // تأخير قليل
            }}
          >
            <Image
              src="/Rectangle 3355.png"
              alt="Construction work"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Travaux;
