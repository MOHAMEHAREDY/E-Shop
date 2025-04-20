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

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          750: { slidesPerView: 2, spaceBetween: 20 },
          1000: { slidesPerView: 3, spaceBetween: 30 },
          1300: { slidesPerView: 4, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {DataProduct.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              onClick={() => handleOpen(product)}
              sx={{
                width: "100%",
                maxWidth: 280,
                mx: "auto",
                my: 2,
                cursor: "pointer",
                boxShadow: 3,
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
                  boxShadow: 1,
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
                height="200"
                image={product.image[(0, 1)]}
              />

              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {product.title}
                  </Typography>
                  <Typography variant="subtitle1" color="error">
                    {product.price}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {product.discription}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button size="small" sx={{ fontSize: "12px" }}>
                  <AddShoppingCartIcon fontSize="small" sx={{ mr: 0.5 }} />
                  Add to Cart
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

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            maxWidth: 300,
            width: "90%",
            mx: "auto",
            mt: 10,
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
              <Typography variant="h5" gutterBottom>
                {selectedProduct.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <img
                  src={selectedProduct.image[(0, 1)]}
                  alt={selectedProduct.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
                <Typography>{selectedProduct.discription}</Typography>
                <Typography color="error" fontWeight="bold">
                  {selectedProduct.price}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleQtyChange(-1)}
                  >
                    -
                  </Button>
                  <Typography>{quantity}</Typography>
                  <Button variant="outlined" onClick={() => handleQtyChange(1)}>
                    +
                  </Button>
                </Box>
                <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
                  Add to cart
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}
