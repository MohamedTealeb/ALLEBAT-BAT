'use client'
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import {
  Phone,
  LocationOn,
  Schedule,
  Person,
  Email,
  Home,
  Message,
} from '@mui/icons-material';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

function Contact() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const translations = isArabic ? arTranslations.contact : frTranslations.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F5',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        {/* Contact Form Section */}
        <Box sx={{ mb: 6 }}>
          <Paper
            sx={{
              maxWidth: 400,
              width: '100%',
              mx: 'auto',
              p: 4,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              direction: isArabic ? 'rtl' : 'ltr',
              marginTop: { xs: '20px', md: '100px' },
              position: 'absolute',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                textAlign: isArabic ? 'right' : 'left',
                
              }}
            >
              {translations.title}
            </Typography>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: '#EF6C00' }}
                  >
                    {translations.name}
                  </Typography>
                  <Person fontSize="small" />
                </Box>
                <TextField
                  fullWidth
                  variant="standard"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                />
              </Box>

              {/* Email */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: '#EF6C00' }}
                  >
                    {translations.email}
                  </Typography>
                  <Email fontSize="small" />
                </Box>
                <TextField
                  fullWidth
                  variant="standard"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                />
              </Box>

              {/* Phone */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: '#EF6C00' }}
                  >
                    {translations.phone}
                  </Typography>
                  <Phone fontSize="small" />
                </Box>
                <TextField
                  fullWidth
                  variant="standard"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                />
              </Box>

              {/* Address */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: '#EF6C00' }}
                  >
                    {translations.address}
                  </Typography>
                  <Home fontSize="small" />
                </Box>
                <TextField
                  fullWidth
                  variant="standard"
                  value={formData.address}
                  onChange={handleInputChange('address')}
                />
              </Box>

              {/* Message */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: '#EF6C00' }}
                  >
                    {translations.message}
                  </Typography>
                  <Message fontSize="small" />
                </Box>
                <TextField
                  fullWidth
                  variant="standard"
                  multiline
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange('message')}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: '#EF6C00',
                  color: '#fff',
                  py: 1.2,
                  borderRadius: '25px',
                  fontWeight: 600,
                  '&:hover': { backgroundColor: '#D84315' },
                }}
              >
                {translations.submit}
              </Button>
            </form>
          </Paper>
        </Box>

        {/* Image Section */}
        <Box sx={{ mb: 6 }}>
          <Box
            component="img"
            src="/Rectangle 3368.png"
            alt="Contact Interior"
            sx={{
              width: '100%',
              maxWidth: 800,
              mx: 'auto',
              display: 'block',
              borderRadius: 3,
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              objectFit: 'cover',
              height: { xs: 280, md: 700 },
            }}
          />
        </Box>

        {/* Bottom Info Bar */}
        <Paper
          sx={{
            mt: 6,
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            backgroundColor: '#EF6C00',
            color: '#fff',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '60%',
            marginLeft: { xs: '20px', md: '355px' },
           
            gap: 3,
          }}
        >
          {/* Phone */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Phone />
            <Box>
              <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>
                {translations.callUs}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                {translations.phoneNumber}
              </Typography>
            </Box>
          </Box>

          {/* Location */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOn />
            <Box>
              <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>
                {translations.location}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                {translations.addressLine1}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                {translations.addressLine2}
              </Typography>
            </Box>
          </Box>

          {/* Hours */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Schedule />
            <Box>
              <Typography sx={{ fontWeight: 'bold', fontSize: 14 }}>
                {translations.hours}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                {translations.workingHours1}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                {translations.workingHours2}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;
