import { useRef } from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PersonIcon from "@mui/icons-material/Person";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
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

const PrivateCourses = () => {
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
          Prefer focused guidance? Kodemy private courses are built for individual learners who want
          a flexible and personalized learning path with practical outcomes.
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            mb: 4,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
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
        <Card sx={{ bgcolor: "white", borderColor: "rgba(17,24,39,0.12)" }}>
          <CardContent>
            <Typography variant="h6" sx={{ color: "#111827", mb: 1.5 }}>
              Available as private courses
            </Typography>
            <Typography sx={{ color: "#4B5563", mb: 2 }}>
              Topics you can cover in a one-on-one format:
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {courses.map((course) => (
                <Chip key={course} label={course} color="primary" variant="outlined" />
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PrivateCourses;
