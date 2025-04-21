import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Brands = () => {
  const brand = [
    { id: 1, name: "Nike", logo: "/assets/Images/brands/brand_8.jpg" },
    { id: 2, name: "Adidas", logo: "/assets/Images/brands/brand_9.jpg" },
    { id: 3, name: "Puma", logo: "/assets/Images/brands/brand_10.png" },
    { id: 4, name: "Reebok", logo: "/assets/Images/brands/brand_11.jpg" },
    { id: 5, name: "New Balance", logo: "/assets/Images/brands/brand_1.png" },
    { id: 6, name: "Under Armour", logo: "/assets/Images/brands/brand_2.png" },
    { id: 7, name: "ASICS", logo: "/assets/Images/brands/brand_3.png" },
    { id: 8, name: "Fila", logo: "/assets/Images/brands/brand_5.png" },
  ];

  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
      }}
      modules={[Pagination]}
      className="mySwiper"
      loop={true}
    >
      {brand.map((item) => (
        <SwiperSlide key={item.id}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <Box
              sx={{
                width: { xs: "60px", sm: "80px", md: "100px" },
                height: { xs: "60px", sm: "80px", md: "100px" },
              }}
            >
              <img
                src={item.logo}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
