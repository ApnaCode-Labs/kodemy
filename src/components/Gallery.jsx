import { useRef } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import useScrollReveal from "../hooks/useScrollReveal";

const tiles = [
  { label: "IoT Workshop", bg: "linear-gradient(135deg, #7C3AED, #4338CA)" },
  { label: "Python Bootcamp", bg: "linear-gradient(135deg, #F97316, #EA580C)" },
  { label: "Web Dev Session", bg: "linear-gradient(135deg, #0EA5E9, #14B8A6)" },
  { label: "Cybersecurity Talk", bg: "linear-gradient(135deg, #7C3AED, #F97316)" },
  { label: "Private Mentorship", bg: "linear-gradient(135deg, #0EA5E9, #7C3AED)" },
  { label: "School Outreach", bg: "linear-gradient(135deg, #14B8A6, #F97316)" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isVisible = useScrollReveal(ref);

  return (
    <Box id="gallery" ref={ref} sx={{ py: 10, bgcolor: "#0F0F1A" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Moments from Our Workshops
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1, opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          {tiles.map((tile) => (
            <Grid item xs={12} sm={6} md={4} key={tile.label}>
              <Paper
                sx={{
                  minHeight: 170,
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                  px: 2,
                  background: tile.bg,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <Typography variant="h6">{tile.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
