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
import { useRouter } from "next/navigation";

const pages = [
  { name: "Services", id: "services" },
  { name: "À propos", id: "travaux" },
  { name: "Nos Photos", id: "photos" },
  { name: "Contact", id: "contact" }
];

function Navbar() {
  const router = useRouter();
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
        <Toolbar disableGutters sx={{ minHeight: '70px' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
            <Image
              src="/logo.png"
              alt="AlleBat-Bat Logo"
              width={100}
              height={40}
              style={{ objectFit: 'contain', marginLeft: '120px' }}
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleScrollToSection(page.id)}>
                  <Typography sx={{ color: '#000', fontWeight: 800,fontStyle: 'bold' }}>{page.name}</Typography>
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
                  '&:hover': {
                    color: '#EF6C00',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Language Toggle */}
          <Box sx={{ flexGrow: 0 }}>
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
