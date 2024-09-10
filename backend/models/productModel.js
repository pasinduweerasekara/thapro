const mongoose = require("mongoose");
const { default: slugify } = require("slugify");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: { type: String, unique: true },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["wallets", "bags", "belts", "accessories"],
      required: true,
    },
    gender: {
      type: String,
      enum: ["women", "men", "unisex"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    material: {
      type: String,
      default: "leather",
    },
    colors: {
      type: [String],
      required: true,
    },
    size: {
      type: String, // Could be dimensions for bags or length for belts, etc.
    },
    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
    },
    images: {
      type: [String], // Array of image URLs
    },
    sku: {
      type: String,
      unique: true,
      required: true,
    },
    tags: {
      type: [String], // For search purposes
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

// Pre-save middleware to generate the slug
productSchema.pre('save', async function (next) {
    if (!this.isModified('name')) {
        return next(); // Only regenerate slug if the name is modified
    }

    // Create initial slug
    let slug = slugify(this.name, { lower: true, strict: true });

    // Check if slug already exists
    let existingProduct = await mongoose.model('Product').findOne({ slug });

    // If slug exists, append a unique identifier
    let suffix = 1;
    while (existingProduct) {
        slug = `${slugify(this.name, { lower: true, strict: true })}-${suffix}`;
        existingProduct = await mongoose.model('Product').findOne({ slug });
        suffix++;
    }

    // Set the slug
    this.slug = slug;
    next();
});


module.exports = mongoose.model("Product", productSchema);
