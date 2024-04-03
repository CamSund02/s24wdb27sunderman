const mongoose = require("mongoose")
const gizmoSchema = mongoose.Schema({gizmo_name: String, functionality: String, price: Number})
module.exports = mongoose.model("Gizmo",gizmoSchema)