'use client'
import {
  Box,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Email,
} from '@mui/icons-material';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

interface FooterProps {
  isArabic: boolean;
}

function Footer({ isArabic }: FooterProps) {
  const translations = isArabic ? arTranslations.footer : frTranslations.footer;

  return (
    <Box
      sx={{
        backgroundColor: '#BDBDBD',
        py: { xs: 3, md: 4 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Tagline */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: '#333',
              textAlign: 'center',
              fontSize: { xs: 16, md: 18 },
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {translations.tagline}
          </Typography>

          {/* Social Media Icons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: '#4267B2',
                color: 'white',
                width: 40,
                height: 40,
                '&:hover': {
                  backgroundColor: '#365899',
                },
              }}
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>

            <IconButton
              sx={{
                backgroundColor: '#EA4335',
                color: 'white',
                width: 40,
                height: 40,
                '&:hover': {
                  backgroundColor: '#D33B2C',
                },
              }}
              aria-label="Email"
            >
              <Email />
            </IconButton>
          </Box>

          {/* Divider Line */}
          <Box
            sx={{
              width: '100%',
              maxWidth: 600,
              height: 1,
              backgroundColor: '#333',
              my: 2,
            }}
          />

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: '#333',
              textAlign: 'center',
              fontSize: { xs: 12, md: 14 },
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {translations.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
