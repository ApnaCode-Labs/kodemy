import { useRef } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Card, CardContent, Container, Grid, Link, Paper, Typography } from "@mui/material";
import useScrollReveal from "../hooks/useScrollReveal";

const WhoWeServe = () => {
  const ref = useRef(null);
  const isVisible = useScrollReveal(ref);

  return (
    <Box id="who-we-serve" ref={ref} sx={{ py: 10, bgcolor: "#0F0F1A" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          We Partner With
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4, opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <SchoolIcon color="secondary" sx={{ fontSize: 40 }} />
                <Typography variant="h5" sx={{ mt: 1.5, mb: 1 }}>
                  Schools
                </Typography>
                <Typography color="grey.400">
                  Structured workshop modules designed for batches, labs, and school innovation
                  programs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <BusinessIcon color="secondary" sx={{ fontSize: 40 }} />
                <Typography variant="h5" sx={{ mt: 1.5, mb: 1 }}>
                  Coaching Institutes
                </Typography>
                <Typography color="grey.400">
                  Collaborative training tracks that add high-impact tech offerings to your existing
                  student programs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Paper sx={{ p: 3, bgcolor: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.35)" }}>
          <Typography>
            Looking for individual coaching? Explore our private learning path in{" "}
            <Link href="#private-courses" underline="hover" color="secondary.main">
              Private Courses
            </Link>
            .
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default WhoWeServe;
