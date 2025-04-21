import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "swiper/css";
import "./styles.css";
import { DataProduct } from "../Data/DataProducts";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SellProduct = () => {
  // get proudcts from Array DataProduct File
  const productsid = [19, 20, 21, 10, 11, 12, 1, 2, 3];

  const filteredProduct = DataProduct.filter((item) =>
    productsid.includes(item.id)
  );

  return (
    <Box sx={{ width: "100%", position: "relative", my: "1px" }}>
      {/* Swiper Carousel */}
      <Box sx={{ position: "relative", height: "400px" }}>
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.95, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {filteredProduct.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image[0]}
                  alt={item.name}
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Title Overlay with Advanced Animation */}

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "5%",
              transform: "translateY(-50%)",
              textAlign: "left",
              zIndex: 1,
              color: "#000",
              width: { xs: "90%", sm: "500px" },
              m: 0,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: { xs: "24px", sm: "32px", md: "36px" },
                fontWeight: "bold",
              }}
            >
              Buy and Sell Your Product For the Best Prices
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                marginTop: "10px",
                color: "#000",
              }}
            >
              Find and read more about the products you will love, and keep
              track of your favorite products. Be part of the world’s largest
              marketplace of products and services.
            </Typography>

            {/* Shop Now Button */}

            <Link
              component="button"
              to="/Shop"
              style={{
                fontSize: "1.5rem",
                color: "black",
                display: "inline-block",
                padding: "10px 20px",
                textDecoration: "none",
                backgroundColor: "#ef5350",
                borderRadius: "8px",
                marginTop: "8px",
              }}
            >
              Shop Now
            </Link>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default SellProduct;
