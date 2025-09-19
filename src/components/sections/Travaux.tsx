import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";

function Travaux() {
  return (
    <Box
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
              position: "absolute",
              bottom: "390px",
              left: "50%",
              transform: "translateX(-50%)",
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
              }}
            >
              Travaux de construction et de démolition
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#666",
                marginBottom: "30px",
              }}
            >
              Nous transformons votre vision en réalité avec des projets de
              construction et de démolition haut de gamme. Nous proposons la
              construction neuve, la démolition sécurisée, la rénovation et les
              finitions de base selon les plus hauts standards de qualité et de
              sécurité. Nous garantissons des bâtiments solides, durables, avec
              des designs raffinés qui reflètent l&apos;élégance et le prestige dans
              chaque détail.
            </Typography>

            <Button
              variant="contained"
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
              Contactez-nous
            </Button>
          </Box>

          {/* Two Overlay Images */}
          {/* First image - overlapping on the left main image */}
          <Box
            sx={{
              position: "absolute",
              top: "450px",
              left: "270px",
              width: { xs: "200px", md: "580px" },
              height: { xs: "180px", md: "420px" },
              overflow: "hidden",
              zIndex: 3,
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
              width: { xs: "250px", md: "420px" },
              height: { xs: "200px", md: "440px" },
              overflow: "hidden",
             
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
