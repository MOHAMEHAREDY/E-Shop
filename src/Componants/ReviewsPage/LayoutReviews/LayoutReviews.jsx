import React from "react";
import { Typography, Paper, Rating, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const LayoutReviews = ({ name, message, rating, image, onEdit, onDelete }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        backgroundColor: "#fff",
        borderRadius: 2,
        minHeight: "180px",
        display: "flex",
        alignItems: "center", // Align elements in a row
        gap: 3,
      }}
    >
      {/* Edit and Delete buttons */}
      <Box sx={{ position: "absolute", top: 8, right: 8 }}>
        <IconButton onClick={onEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt="Review"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Content Section */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {name || "—"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: "pre-line", marginBottom: "8px" }}
        >
          {message || "Your message will appear here..."}
        </Typography>

        {/* Rating */}
        <Rating value={rating} precision={0.5} readOnly />
      </Box>
    </Paper>
  );
};

export default LayoutReviews;
