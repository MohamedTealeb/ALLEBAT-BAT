"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import ClientOnlyLanguageToggle from "./ClientOnlyLanguageToggle";
import { useRouter, usePathname } from "next/navigation";

import arTranslations from '@/translation/ar.json';
import frTranslations from '@/translation/fr.json';

const pages = [
  { name: "Services", nameKey: "services", id: "services" },
  { name: "À propos", nameKey: "about", id: "travaux" },
  { name: "Nos Photos", nameKey: "photos", id: "photos" },
  { name: "Contact", nameKey: "contact", id: "contact" }
];

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar') || false;
  const translations = isArabic ? arTranslations.navbar : frTranslations.navbar;
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    handleCloseNavMenu();
  };

  const handleLanguageChange = (language: 'french' | 'arabic') => {
    const newPath = language === 'french' ? '/fr' : '/ar';
    router.push(newPath);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        boxShadow: 'none',
        border: 'none'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ 
          minHeight: { xs: '60px', md: '70px' },
          px: { xs: 2, md: 0 }
        }}>
          {/* Logo */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mr: { xs: 2, md: 4 },
            ml: { xs: 0, md: '120px' },
            flexShrink: 0
          }}>
            <Image
              src="/logo.png"
              alt="AlleBat-Bat Logo"
              width={100}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </Box>

          {/* Menu for mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ 
                display: { xs: "block", md: "none" },
                '& .MuiPaper-root': {
                  minWidth: '200px',
                  mt: 1
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClick={() => handleScrollToSection(page.id)}
                  sx={{
                    py: 2,
                    px: 3,
                    minHeight: '48px'
                  }}
                >
                  <Typography sx={{ 
                    color: '#000', 
                    fontWeight: 800,
                    fontStyle: 'bold',
                    fontSize: '16px',
                    direction: isArabic ? 'rtl' : 'ltr'
                  }}>
                    {translations[page.nameKey as keyof typeof translations]}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation Menu */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: "none", md: "flex" },
            justifyContent: 'center',
            gap: 4
          }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleScrollToSection(page.id)}
                sx={{ 
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textTransform: 'none',
                  direction: isArabic ? 'rtl' : 'ltr',
                  '&:hover': {
                    color: '#EF6C00',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {translations[page.nameKey as keyof typeof translations]}
              </Button>
            ))}
          </Box>

          {/* Language Toggle */}
          <Box sx={{ 
            flexGrow: 0,
            ml: { xs: 'auto', md: 0 }
          }}>
            <ClientOnlyLanguageToggle 
              onLanguageChange={handleLanguageChange}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
