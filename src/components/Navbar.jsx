import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

const navItems = [
  { label: "About", id: "about" },
  { label: "Workshops", id: "workshops" },
  { label: "Private Courses", id: "private-courses" },
  { label: "Who We Serve", id: "who-we-serve" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const handleScrollTo = (targetId) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpenDrawer(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 6 : 0}
      sx={{
        bgcolor: "rgba(15, 15, 26, 0.75)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700 }}>
          TechSpark Academy
        </Typography>
        <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
          {navItems.map((item) => (
            <Button key={item.id} color="inherit" onClick={() => handleScrollTo(item.id)}>
              {item.label}
            </Button>
          ))}
        </Stack>
        <IconButton
          color="inherit"
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 280, p: 2, bgcolor: "#111122", height: "100%" }}>
          <Stack spacing={1}>
            {navItems.map((item) => (
              <Button key={item.id} color="inherit" onClick={() => handleScrollTo(item.id)}>
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
