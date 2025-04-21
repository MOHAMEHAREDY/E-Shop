import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
  Rating,
  Modal,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Styles.css";
import { DataProduct } from "../Data/DataProducts";
import { Autoplay, Navigation } from "swiper/modules";

export default function TopProduct() {
  const [value, setValue] = useState(4);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
    setQuantity(1);
  };

  const handleClose = () => setOpen(false);

  const handleQtyChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

    // get proudcts from Array DataProduct File
    const productsid = [19, 20, 21, 10, 11, 12, 1, 2, 3];
  
    const filteredProduct = DataProduct.filter((item) =>
      productsid.includes(item.id)
    );
  
  return (
    <Container maxWidth="xl" sx={{ py: 2, backgroundColor: "#fff" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10, pagination: false },
          750: { slidesPerView: 3, spaceBetween: 20 },
          1000: { slidesPerView: 4, spaceBetween: 30 },
          1300: { slidesPerView: 5, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {DataProduct.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              onClick={() => handleOpen(product)}
              sx={{
                width: "100%",
                maxWidth: 180,
                mx: "auto",
                my: 1,
                cursor: "pointer",
                borderRadius: 2,
                transition: "0.3s",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "white",
                  zIndex: 1,
                  "&:hover": { backgroundColor: "#fff" },
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <FavoriteBorderIcon sx={{ color: "#f44336" }} />
              </IconButton>

              <CardMedia
                component="img"
                alt={product.title}
                height="180"
                image={product.image[0]}
              />

              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {product.title}
                  </Typography>
                  <Typography variant="subtitle2" color="error">
                    {product.price}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {product.discription}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button size="small" sx={{ fontSize: "11px" }}>
                  <AddShoppingCartIcon fontSize="small" sx={{ mr: 0.5 }} />
                  Add
                </Button>
                <Rating
                  size="small"
                  value={value}
                  onChange={(e, newValue) => setValue(newValue)}
                />
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal section */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            maxWidth: 700,
            width: "90%",
            mx: "auto",
            mt: 8,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            position: "relative",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "#eee",
              "&:hover": {
                bgcolor: "#ddd",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedProduct && (
            <>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                {selectedProduct.title}
              </Typography>

              {/* عرض صورتين جنب بعض */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Box
                  component="img"
                  src={selectedProduct.image[0]}
                  alt="product-img-1"
                  sx={{
                    width: "50%",
                    height: 250,
                    objectFit: "contain",
                    borderRadius: 2,
                  }}
                />
                <Box
                  component="img"
                  src={selectedProduct.image[1]}
                  alt="product-img-2"
                  sx={{
                    width: "50%",
                    height: 250,
                    objectFit: "contain",
                    borderRadius: 2,
                  }}
                />
              </Box>

              <Typography sx={{ mb: 1 }}>
                {selectedProduct.discription}
              </Typography>

              <Typography color="error" fontWeight="bold" sx={{ mb: 2 }}>
                {selectedProduct.price}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Button variant="outlined" onClick={() => handleQtyChange(-1)}>
                  -
                </Button>
                <Typography>{quantity}</Typography>
                <Button variant="outlined" onClick={() => handleQtyChange(1)}>
                  +
                </Button>
              </Box>

              <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                fullWidth
                sx={{ mt: 3 }}
              >
                Add to cart
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}
