import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import PercentIcon from "@mui/icons-material/Percent";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { motion } from "framer-motion";

const deliveryItems = [
  {
    icon: <PercentIcon sx={{ fontSize: "2rem" }} />,
    title: "Discount",
    subtitle: "every week new sales",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: "2rem" }} />,
    title: "Free Delivery",
    subtitle: "100% Free for all orders",
  },
  {
    icon: <AccessAlarmIcon sx={{ fontSize: "2rem" }} />,
    title: "Great Support 24/7",
    subtitle: "We care your experiences",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: "2rem" }} />,
    title: "Secure Payment",
    subtitle: "100% Secure Payment Method",
  },
];

const Delivery = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 2 },
        backgroundColor: "#fff",
        maxWidth: "100%",
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
        {deliveryItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                justifyContent="center"
              >
                <Box>{item.icon}</Box>
                <Box>
                  <Typography
                    variant="inherit"
                    fontWeight={500}
                    color="#272343"
                    sx={{ fontSize: { xs: "14px", md: "16px" } }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="inherit"
                    color="#9a9caa"
                    sx={{ fontSize: { xs: "14px", md: "16px" } }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Delivery;
