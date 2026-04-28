import { useMemo, useRef, useState } from "react";
import { Avatar, Box, Card, CardContent, Container, Grid, Rating, Tab, Tabs, Typography } from "@mui/material";
import useScrollReveal from "../hooks/useScrollReveal";

const workshopTestimonials = [
  {
    name: "Rahul S.",
    meta: "Delhi Public School",
    quote: "The IoT workshop was mind-blowing! We built a working sensor project in just one day.",
  },
  {
    name: "Priya M.",
    meta: "Teacher, Sunrise Coaching",
    quote: "Our students loved the Cybersecurity session. Very interactive and practical.",
  },
  {
    name: "Ankit T.",
    meta: "DPS Student",
    quote: "Python workshop made coding fun for our entire batch.",
  },
];

const privateTestimonials = [
  {
    name: "Sneha R.",
    meta: "Private Student",
    quote: "The 1-on-1 Python sessions fit perfectly around my college schedule.",
  },
  {
    name: "Karan D.",
    meta: "Private Student",
    quote: "I enrolled for Web Development and landed a freelance project within 2 months!",
  },
  {
    name: "Meera P.",
    meta: "Engineering Student",
    quote: "The personalized IoT curriculum helped me prepare for my final year project.",
  },
];

const Testimonials = () => {
  const [tab, setTab] = useState(0);
  const ref = useRef(null);
  const isVisible = useScrollReveal(ref);

  const data = useMemo(() => (tab === 0 ? workshopTestimonials : privateTestimonials), [tab]);

  return (
    <Box id="testimonials" ref={ref} sx={{ py: 10, bgcolor: "#F9FAFB", color: "#111827" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          What People Say
        </Typography>
        <Tabs value={tab} onChange={(_, value) => setTab(value)} textColor="secondary" indicatorColor="secondary" sx={{ mb: 3 }}>
          <Tab label="Workshop Participants" />
          <Tab label="Private Course Students" />
        </Tabs>
        <Grid container spacing={3} sx={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          {data.map((item) => (
            <Grid item xs={12} md={4} key={item.name}>
              <Card sx={{ bgcolor: "white", borderColor: "rgba(17,24,39,0.12)", height: "100%" }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: "primary.main", mb: 1 }}>
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </Avatar>
                  <Typography variant="h6" sx={{ color: "#111827" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: "#6B7280", mb: 1 }}>{item.meta}</Typography>
                  <Rating value={5} readOnly size="small" sx={{ mb: 1 }} />
                  <Typography sx={{ color: "#374151" }}>{item.quote}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
