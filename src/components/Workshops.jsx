import { useRef } from "react";
import MemoryIcon from "@mui/icons-material/Memory";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import WebIcon from "@mui/icons-material/Web";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import useScrollReveal from "../hooks/useScrollReveal";

const workshopItems = [
  { title: "IoT", desc: "Build smart connected devices and systems", icon: <MemoryIcon color="secondary" /> },
  { title: "Python Programming", desc: "From basics to real-world automation", icon: <TerminalIcon color="secondary" /> },
  { title: "Web Development", desc: "HTML, CSS, JavaScript and beyond", icon: <WebIcon color="secondary" /> },
  { title: "Cybersecurity", desc: "Understand threats and defend systems", icon: <SecurityIcon color="secondary" /> },
  { title: "Offline / Group Workshops", desc: "Customized sessions delivered at your venue", icon: <StorageIcon color="secondary" /> },
];

const Workshops = () => {
  const ref = useRef(null);
  const isVisible = useScrollReveal(ref);

  return (
    <Box id="workshops" ref={ref} sx={{ py: 10, bgcolor: "#0F0F1A" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          What We Teach
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1, opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          {workshopItems.map((workshop) => (
            <Grid item xs={12} sm={6} md={4} key={workshop.title}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(124,58,237,0.28)",
                  },
                }}
              >
                <CardContent>
                  {workshop.icon}
                  <Typography variant="h6" sx={{ mt: 1.5, mb: 1 }}>
                    {workshop.title}
                  </Typography>
                  <Typography color="grey.400" sx={{ mb: 2 }}>
                    {workshop.desc}
                  </Typography>
                  <Button size="small" color="primary" sx={{ mr: 1 }}>
                    Learn More
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    href="/brochures/kodemy-workshop-brochure.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Brochure
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Workshops;
