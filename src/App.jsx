import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Fab } from "@mui/material";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PrivateCourses from "./components/PrivateCourses";
import Testimonials from "./components/Testimonials";
import WhoWeServe from "./components/WhoWeServe";
import Workshops from "./components/Workshops";

const App = () => (
  <Box>
    <Navbar />
    <Hero />
    <About />
    <Workshops />
    <PrivateCourses />
    <WhoWeServe />
    <Testimonials />
    <Gallery />
    <Contact />
    <Footer />
    <Fab
      color="success"
      aria-label="Chat on WhatsApp"
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      sx={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 1400,
        bgcolor: "#25D366",
        color: "#fff",
        "&:hover": { bgcolor: "#1fb558" },
      }}
    >
      <WhatsAppIcon />
    </Fab>
  </Box>
);

export default App;
