import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Rating,
  Box,
  IconButton,
  Modal,
  Divider,
  TextField,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { DataProduct } from "../Data/DataProducts";
import CloseIcon from "@mui/icons-material/Close";
import Discount from "../Discount/Discount";

const BestProduct = () => {
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
    <Container
      maxWidth={false}
      disableGutters
      sx={{ py: 5, px: 2, bgcolor: "#fff" }}
    >
      <Discount />
      <Typography
        variant="h5"
        sx={{
          // textAlign: "center",
          fontSize: "30px",
          fontWeight: "1000",
          my: 6,
          mx: 3,
          color: "black",
          // fontFamily: "Nothing You Could Do",
        }}
      >
        Best Seller Products
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {DataProduct.map((product) => (
          <Card
            key={product.id}
            onClick={() => handleOpen(product)}
            sx={{
              width: 250,
              cursor: "pointer",
              boxShadow: 3,
              borderRadius: 2,
              position: "relative",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "white",
                boxShadow: 1,
                "&:hover": { backgroundColor: "#fdd" },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <FavoriteBorderIcon sx={{ color: "#f44336" }} />
            </IconButton>

            <CardMedia
              component="img"
              alt={product.title}
              height="200"
              image={product.image[0]}
            />

            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {product.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "red", fontWeight: 500 }}
                >
                  {product.price}
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.discription}
              </Typography>
            </CardContent>

            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button size="small" sx={{ fontSize: "12px" }}>
                <AddShoppingCartIcon fontSize="small" sx={{ mr: 0.5 }} />
                Add to Cart
              </Button>
              <Rating
                size="small"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
              />
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* ================= MODAL ================= */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: { xs: "90%", sm: 600 },
            mx: "auto",
            mt: 10,
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            position: "relative",
            boxShadow: 24,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          {selectedProduct && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedProduct.title}
              </Typography>
              <Box>
                <img
                  src={selectedProduct.image[0, 1]}
                  alt={selectedProduct.title}
                  style={{
                    width: "30%",
                    height: "auto",
                    maxHeight: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
              </Box>

              <Typography sx={{ color: "text.secondary", mb: 2 }}>
                {selectedProduct.discription}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleQtyChange(-1)}
                  >
                    -
                  </Button>
                  <TextField
                    value={quantity}
                    size="small"
                    sx={{ width: "60px" }}
                    inputProps={{
                      style: { textAlign: "center" },
                      readOnly: true,
                    }}
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleQtyChange(1)}
                  >
                    +
                  </Button>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add {quantity} to Cart
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default BestProduct;
