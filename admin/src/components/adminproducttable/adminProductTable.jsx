import React from "react";
import "./adminproducttable.css"; // Adjusted filename
import { Link } from "react-router-dom";
import { CiEdit, CiTrash } from "react-icons/ci"; // Icons for actions
import config from "../../helpers/config";

function AdminProductTable({ products }) {

  return (
    <div className="admin-product-table">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price (LKR)</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product,index) => (
              <tr key={product._id}>
                <td>{index+1}</td>
                <td>
                  <Link to={`${config.frontendUrl}/products/${product.category}/${product.slug}`}>{product.name}</Link>
                </td>
                <td>{product.category}</td>
                <td>{product.price.toFixed(2)}</td>
                <td>{product.stockQuantity}</td>
                <td className={product.stockQuantity > 0 ? "in-stock" : "out-of-stock"}>
                  {product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
                </td>
                <td>
                  <button className="edit-btn">
                    <CiEdit /> Edit
                  </button>
                  <button className="delete-btn">
                    <CiTrash /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-products">
                No products available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProductTable;
