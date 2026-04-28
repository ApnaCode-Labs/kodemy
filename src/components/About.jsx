import { useRef } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import useScrollReveal from "../hooks/useScrollReveal";

const stats = [
  {
    value: "500+",
    label: "Students Trained",
    icon: <SchoolIcon color="primary" sx={{ fontSize: 38 }} />,
  },
  {
    value: "20+",
    label: "Schools Reached",
    icon: <BusinessIcon color="primary" sx={{ fontSize: 38 }} />,
  },
  {
    value: "5",
    label: "Courses Offered",
    icon: <MenuBookIcon color="primary" sx={{ fontSize: 38 }} />,
  },
];

const About = () => {
  const ref = useRef(null);
  const isVisible = useScrollReveal(ref);

  return (
    <Box id="about" ref={ref} sx={{ py: 10, bgcolor: "#F9FAFB", color: "#111827" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography sx={{ maxWidth: 760, mb: 5, color: "#374151" }}>
          Kodemy is a youth-focused tech workshop company that turns complex concepts into fun,
          practical learning experiences. We partner with schools, institutes, and individual
          learners to build confidence in modern digital skills.
        </Typography>
        <Grid container spacing={3} sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          {stats.map((item) => (
            <Grid item xs={12} md={4} key={`${item.value}-${item.label}`}>
              <Card sx={{ bgcolor: "white", borderColor: "rgba(17,24,39,0.12)" }}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  {item.icon}
                  <Typography variant="h5" sx={{ mt: 2, mb: 1, color: "#111827" }}>
                    {item.value}
                  </Typography>
                  <Typography color="#4B5563">{item.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
