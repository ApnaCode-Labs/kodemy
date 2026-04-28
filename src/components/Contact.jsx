import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  inquiryType: "",
  message: "",
};

const Contact = ({ onOpenEnrollment }) => {
  const [formData, setFormData] = useState(initialValues);
  const [openSnack, setOpenSnack] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "inquiryType" && value === "Private Course Enrollment") {
      onOpenEnrollment();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenSnack(true);
    setFormData(initialValues);
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: "#F9FAFB", color: "#111827" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Get In Touch
        </Typography>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={7}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Organization / School Name" name="organization" value={formData.organization} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <Select fullWidth displayEmpty name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                    <MenuItem value="" disabled>
                      Inquiry Type
                    </MenuItem>
                    <MenuItem value="Workshop Booking">Workshop Booking</MenuItem>
                    <MenuItem value="Private Course Enrollment">Private Course Enrollment</MenuItem>
                    <MenuItem value="General Query">General Query</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline minRows={4} label="Message" name="message" value={formData.message} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <EmailIcon color="primary" />
                <Typography>hello@kodemy.tech</Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <PhoneIcon color="primary" />
                <Typography>+91 98765 43210</Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <LocationOnIcon color="primary" />
                <Typography>New Delhi, India</Typography>
              </Stack>
              <Typography sx={{ color: "#6B7280" }}>We respond within 24 hours</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={openSnack} autoHideDuration={4000} onClose={() => setOpenSnack(false)}>
        <Alert severity="success" variant="filled" onClose={() => setOpenSnack(false)}>
          Thanks! We&apos;ll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
