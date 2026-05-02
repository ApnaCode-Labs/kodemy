import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Divider, Grid, IconButton, Link, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Box sx={{ py: 6, bgcolor: "#0F0F1A" }}>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="primary.main">
            kodemy
          </Typography>
          <Typography color="grey.400">Build. Learn. Lead the future with confidence.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <Link href="#about" underline="hover" color="inherit">
              About
            </Link>
            <Link href="#workshops" underline="hover" color="inherit">
              Workshops
            </Link>
            <Link href="#private-courses" underline="hover" color="inherit">
              Private Courses
            </Link>
            <Link href="#contact" underline="hover" color="inherit">
              Contact
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="row">
            <IconButton href="https://www.linkedin.com" target="_blank" rel="noreferrer" color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com" target="_blank" rel="noreferrer" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.youtube.com" target="_blank" rel="noreferrer" color="inherit">
              <YouTubeIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.12)" }} />
      <Typography color="grey.500">© {new Date().getFullYear()} kodemy. All rights reserved.</Typography>
    </Container>
  </Box>
);

export default Footer;
