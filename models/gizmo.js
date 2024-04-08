const mongoose = require("mongoose");

// Define the schema with validation
const gizmoSchema = mongoose.Schema({
  gizmo_name: String,
  functionality: String,
  price: {
    type: Number,
    min: [0, 'Price must be a positive number'],
    max: [1000, 'Price cannot exceed $1000'],
  }
});

module.exports = mongoose.model("Gizmo", gizmoSchema);
