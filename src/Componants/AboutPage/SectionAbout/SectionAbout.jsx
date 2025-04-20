import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { DataProduct } from "../../../Componants/HomePage/Data/DataProducts";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";

const Productid = 58;
const Product = DataProduct.find((product) => product.id === Productid);

const AboutSection = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 2,
        display: "flex",
        alignItems: "flex-start",
        gap: 4,
        flexWrap: "nowrap",
      }}
    >
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* About Us */}
        <Box sx={{ mb: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
              }}
            >
              E-Shop - About Us
            </Typography>
            <Typography
              variant=""
              color="text.primary"
              sx={{
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
              }}
            >
              At E-Shop, we redefine the online shopping experience by combining
              modern technology, convenience, and high quality into one seamless
              experience. The platform was developed using React.js, Material
              UI, and JavaScript to provide a responsive and seamless user
              experience. We focus on providing reliable service, secure
              payments, and fast delivery.
            </Typography>
          </motion.div>
        </Box>

        {/* Mission */}
        <Box sx={{ mb: 2 }}>
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
              }}
            >
              🎯 Our message
            </Typography>
            <Typography
              variant=""
              color="text.primary"
              sx={{
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
              }}
            >
              We strive to make the online shopping experience easier, faster,
              and more enjoyable by offering high-quality products through a
              modern, secure, and responsive platform, supported by excellent
              customer service.
            </Typography>
          </motion.div>
        </Box>

        {/* Vision */}
        <Box sx={{ mb: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
              }}
            >
              🌟 Our vision
            </Typography>
            <Typography
              variant=""
              color="text.primary"
              sx={{
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
              }}
            >
              To be among the leading e-commerce platforms, known for its
              user-centric design, smart features, and commitment to delivering
              value and trust.
            </Typography>
          </motion.div>
        </Box>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.95, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                padding: "0",
                fontSize: { xs: "10px", sm: "12px", md: "18px" },
              }}
            >
              💡 Why choose E-Shop?
            </Typography>
            <List sx={{ p: 0 }}>
              {[
                "✅ User-friendly design built with React.js and Material UI",
                "🚀 Fast and responsive performance on all devices",
                "🔐 Secure and reliable payments",
                "💬 Technical support before, during and after the order",
                "🛍️ Product variety and guaranteed quality",
              ].map((item, idx) => (
                <ListItem key={idx} sx={{ p: 0 }}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: { fontSize: { xs: "10px", sm: "12px", md: "16px" } },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </motion.div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <motion.img
          src={Product.image}
          alt={Product.title || "Product Image"}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "16px",
          }}
          initial={{ opacity: 0, x: -80, scale: 0.95, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </Box>
    </Container>
  );
};

export default AboutSection;
