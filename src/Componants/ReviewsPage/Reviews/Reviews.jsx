import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Rating,
  Grid,
  TextField,
  TextareaAutosize,
  Button,
  Snackbar,
  Alert,
  Container,
} from "@mui/material";
import LayoutReviews from "../LayoutReviews/LayoutReviews";
import { DataProduct } from "../../HomePage/Data/DataProducts";

const Reviews = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);

  // Load reviews from localStorage
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews);
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Use URL.createObjectURL to show image
    }
  };

  // Handle submit (add or update review)
  const handleSubmit = () => {
    const newReview = { name, message, rating, image };

    let updatedReviews;
    if (editIndex !== null) {
      updatedReviews = [...reviews];
      updatedReviews[editIndex] = newReview;
      setEditIndex(null);
    } else {
      updatedReviews = [...reviews, newReview];
    }

    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    // Clear the form after submitting
    setName("");
    setMessage("");
    setRating(0);
    setImage(null);
    setSuccessOpen(true);
  };

  // Handle edit (populate form for editing)
  const handleEdit = (index) => {
    const review = reviews[index];
    setName(review.name);
    setMessage(review.message);
    setRating(review.rating);
    setImage(review.image);
    setEditIndex(index);
  };

  // Handle delete (remove review from list)
  const handleDelete = (index) => {
    const updated = reviews.filter((_, i) => i !== index);
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));

    if (editIndex === index) setEditIndex(null);
  };

  const Productid = 59;
  const Product = DataProduct.find((product) => product.id === Productid);

  if (!Product) {
    return <p>Product not found</p>;
  }
  return (
    <>
      <Container sx={{ my: 10, p: "0" }}>
        <Box sx={{ width: "100%", height: "300%" }}>
          <img
            src={Product.image}
            alt={Product.name}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Container>
      {/* Success Message */}
      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSuccessOpen(false)}
          sx={{ backgroundColor: "#4caf50", color: "white" }}
        >
          Review submitted successfully!
        </Alert>
      </Snackbar>

      {/* Main Layout */}
      <Box
        sx={{
          // py: 5,
          px: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {/* Form */}
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={4}
            sx={{ fontSize: { xs: "20px", sm: "24px", md: "30px" } }}
          >
            🗣️ Customer Reviews
          </Typography>

          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item>
              <TextareaAutosize
                minRows={5}
                placeholder="Enter your message"
                style={{
                  width: "100%",
                  border: "1px solid lightgray",
                  padding: "10px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  borderRadius: "4px",
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>

            <Grid item>
              <Typography fontSize="14px" fontWeight="medium" mb={1}>
                Your evaluation matters to us
              </Typography>
              <Rating
                name="user-rating"
                precision={0.5}
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                sx={{
                  "& .MuiRating-icon": {
                    fontSize: "32px",
                  },
                }}
              />
            </Grid>

            {/* Image Upload */}
            <Grid item>
              <Button variant="outlined" component="label" fullWidth>
                Upload Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Button>
            </Grid>

            <Grid item>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                {editIndex !== null ? "Update" : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Reviews Display */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {reviews.map((review, index) => (
            <LayoutReviews
              key={index}
              name={review.name}
              message={review.message}
              rating={review.rating}
              image={review.image}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Reviews;
