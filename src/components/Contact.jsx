import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";

const Contact = () => (
  <Box id="contact" sx={{ py: 10, bgcolor: "#F9FAFB", color: "#111827" }}>
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        Get In Touch
      </Typography>
      <Typography sx={{ color: "#374151", mb: 4 }}>
        Reach out using the details below. We typically respond within 24 hours.
      </Typography>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          bgcolor: "#fff",
          border: "1px solid rgba(17, 24, 39, 0.12)",
          borderRadius: 2,
        }}
      >
        <Stack spacing={3}>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <EmailIcon color="primary" sx={{ mt: 0.25 }} />
            <Box>
              <Typography variant="subtitle2" sx={{ color: "#6B7280", mb: 0.5 }}>
                Email
              </Typography>
              <Typography sx={{ color: "#111827", fontWeight: 600 }}>hello@kodemy.tech</Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <PhoneIcon color="primary" sx={{ mt: 0.25 }} />
            <Box>
              <Typography variant="subtitle2" sx={{ color: "#6B7280", mb: 0.5 }}>
                Phone
              </Typography>
              <Typography sx={{ color: "#111827", fontWeight: 600 }}>+91 98765 43210</Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <LocationOnIcon color="primary" sx={{ mt: 0.25 }} />
            <Box>
              <Typography variant="subtitle2" sx={{ color: "#6B7280", mb: 0.5 }}>
                Location
              </Typography>
              <Typography sx={{ color: "#111827", fontWeight: 600 }}>New Delhi, India</Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  </Box>
);

export default Contact;
