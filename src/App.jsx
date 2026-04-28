import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
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

const enrollmentInitial = {
  name: "",
  email: "",
  phone: "",
  course: "",
  schedule: "",
  message: "",
};

const App = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [enrollmentSnack, setEnrollmentSnack] = useState(false);
  const [enrollmentForm, setEnrollmentForm] = useState(enrollmentInitial);

  const handleEnrollmentChange = (event) => {
    const { name, value } = event.target;
    setEnrollmentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnrollmentSubmit = (event) => {
    event.preventDefault();
    setEnrollmentOpen(false);
    setEnrollmentSnack(true);
    setEnrollmentForm(enrollmentInitial);
  };

  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Workshops />
      <PrivateCourses onOpenEnrollment={() => setEnrollmentOpen(true)} />
      <WhoWeServe />
      <Testimonials />
      <Gallery />
      <Contact onOpenEnrollment={() => setEnrollmentOpen(true)} />
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

      <Dialog open={enrollmentOpen} onClose={() => setEnrollmentOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Private Course Enrollment</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="Name" name="name" value={enrollmentForm.name} onChange={handleEnrollmentChange} fullWidth required />
            <TextField label="Email" type="email" name="email" value={enrollmentForm.email} onChange={handleEnrollmentChange} fullWidth required />
            <TextField label="Phone" name="phone" value={enrollmentForm.phone} onChange={handleEnrollmentChange} fullWidth required />
            <TextField select label="Select Course" name="course" value={enrollmentForm.course} onChange={handleEnrollmentChange} fullWidth required>
              <MenuItem value="IoT">IoT</MenuItem>
              <MenuItem value="Python">Python</MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Cybersecurity">Cybersecurity</MenuItem>
            </TextField>
            <TextField label="Preferred Schedule" name="schedule" value={enrollmentForm.schedule} onChange={handleEnrollmentChange} fullWidth />
            <TextField label="Message" name="message" value={enrollmentForm.message} onChange={handleEnrollmentChange} multiline minRows={3} fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setEnrollmentOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button variant="contained" color="secondary" onClick={handleEnrollmentSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={enrollmentSnack} autoHideDuration={4000} onClose={() => setEnrollmentSnack(false)}>
        <Alert severity="success" variant="filled" onClose={() => setEnrollmentSnack(false)}>
          Enrollment request submitted! We&apos;ll contact you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
