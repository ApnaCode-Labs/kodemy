import { useRef } from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PersonIcon from "@mui/icons-material/Person";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import useScrollReveal from "../hooks/useScrollReveal";

const highlights = [
  {
    title: "Flexible Scheduling",
    desc: "Pick your time slots",
    icon: <EventAvailableIcon color="primary" />,
  },
  {
    title: "Personalized Curriculum",
    desc: "Tailored to your level and goals",
    icon: <TuneIcon color="primary" />,
  },
  {
    title: "1-on-1 Mentorship",
    desc: "Direct access to the instructor",
    icon: <PersonIcon color="primary" />,
  },
];

const courses = ["IoT", "Python", "Web Dev", "Cybersecurity"];

const PrivateCourses = ({ onOpenEnrollment }) => {
  const ref = useRef(null);
  const isVisible = useScrollReveal(ref);

  return (
    <Box id="private-courses" ref={ref} sx={{ py: 10, bgcolor: "#F9FAFB", color: "#111827" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Private Courses
        </Typography>
        <Typography variant="h6" sx={{ color: "#4B5563", mb: 2 }}>
          Learn at your own pace, one-on-one with an expert
        </Typography>
        <Typography sx={{ color: "#374151", maxWidth: 760, mb: 4 }}>
          Prefer focused guidance? Kodemy private courses are built for individual learners who
          want a flexible and personalized learning path with practical outcomes.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4, opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          {highlights.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Card sx={{ bgcolor: "white", borderColor: "rgba(17,24,39,0.12)", height: "100%" }}>
                <CardContent>
                  {item.icon}
                  <Typography variant="h6" sx={{ color: "#111827", mt: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#4B5563" }}>{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Card sx={{ bgcolor: "#111827", borderColor: "rgba(255,255,255,0.1)" }}>
          <CardContent>
            <Stack spacing={3} alignItems={{ xs: "flex-start", md: "center" }}>
              <Typography variant="h5">Ready to start your learning journey?</Typography>
              <Button variant="contained" color="secondary" size="large" onClick={onOpenEnrollment}>
                Enroll Now
              </Button>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {courses.map((course) => (
                  <Chip key={course} label={course} color="primary" variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PrivateCourses;
