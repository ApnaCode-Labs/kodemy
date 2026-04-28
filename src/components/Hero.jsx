import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Hero = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 20% 30%, rgba(124,58,237,0.3), transparent 35%), radial-gradient(circle at 80% 70%, rgba(249,115,22,0.25), transparent 30%), #0F0F1A",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 780, position: "relative", zIndex: 1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.4rem" } }}>
            Empowering the Next Generation of Tech Innovators
          </Typography>
          <Typography variant="h6" color="grey.400">
            Kodemy helps students and young creators learn practical tech skills through energetic,
            hands-on programs.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button variant="contained" size="large" onClick={() => scrollTo("workshops")}>
              Explore Workshops
            </Button>
            <Button variant="outlined" color="secondary" size="large" onClick={() => scrollTo("private-courses")}>
              Book a Session
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
