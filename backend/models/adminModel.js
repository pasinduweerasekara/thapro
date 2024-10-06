const adminSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "manager", "support"],
      default: "admin",
    },
  });
  
  module.exports = mongoose.model("Admin", adminSchema);
  