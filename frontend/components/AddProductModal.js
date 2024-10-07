import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner"; // Assuming you're using Sonner for notifications

// Validation schema using Zod
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.preprocess(
    (value) => Number(value),
    z.number().positive("Price must be a positive number")
  ),
  imageUrl: z.string().url("Please enter a valid image URL"),
});

const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:5001/api/products", data, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });

      if (res.status === 201) {
        onAddProduct(res.data.product);
        onClose();
        reset(); // Reset form after successful submission
        toast.success("Product added successfully!");
      } else {
        console.error("Failed to add product:", res.data.message);
        toast.error("Failed to add product");
      }
    } catch (error) {
      console.error("Failed to add product:", error.response?.data?.message);
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600, // Increased width to 600px
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" component="h2" fontWeight="bold" mb={2}>
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Product Name"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Description"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
            margin="normal"
            variant="outlined"
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="Price"
            type="number"
            {...register("price", { valueAsNumber: true })}
            error={!!errors.price}
            helperText={errors.price?.message}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Image URL"
            {...register("imageUrl")}
            error={!!errors.imageUrl}
            helperText={errors.imageUrl?.message}
            margin="normal"
            variant="outlined"
          />
          <Box mt={3} display="flex" justifyContent="space-between">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}
            >
              {loading ? "Adding..." : "Add Product"}
            </Button>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
