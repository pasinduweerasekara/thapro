import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Spinner from "./components/spinner/Spinner";
import ProductPage from "./pages/product/ProductPage";

// Lazy load components
const Navbar = lazy(() => import("./components/navbar/navbar"));
const Home = lazy(() => import("./pages/home/home"));
const Cart = lazy(() => import("./pages/cart/cart"));
const Wallets = lazy(() => import("./pages/wallets/Wallets"));
const Belts = lazy(() => import("./pages/belts/Belts"));
const Accessories = lazy(() => import("./pages/accessories/Accessories"));
const ForHer = lazy(() => import("./pages/women/ForHer"));
const ForHim = lazy(() => import("./pages/men/FoHim"));
const Products = lazy(() => import("./pages/products/Products"));
const About = lazy(() => import("./pages/about/About"));
const All = lazy(() => import("./pages/all/All"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <Navbar />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<Spinner />}>
              <Products />
            </Suspense>
          }
        >
          <Route
            index
            path="all"
            element={
              <Suspense fallback={<Spinner />}>
                <All />
              </Suspense>
            }
          />
          <Route
            path="wallets"
            element={
              <Suspense fallback={<Spinner />}>
                <Wallets />
              </Suspense>
            }
          />
          <Route
            path="belts"
            element={
              <Suspense fallback={<Spinner />}>
                <Belts />
              </Suspense>
            }
          />
          <Route
            path="accessories"
            element={
              <Suspense fallback={<Spinner />}>
                <Accessories />
              </Suspense>
            }
          />
          <Route
            path="women"
            element={
              <Suspense fallback={<Spinner />}>
                <ForHer />
              </Suspense>
            }
          />
          <Route
            path="men"
            element={
              <Suspense fallback={<Spinner />}>
                <ForHim />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="cart"
          element={
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          }
        />
        {
          ["wallets","belts","accessories","men","women", "bags"].map((page)=>(
            <Route
            key={page}
          path={`/products/${page}/:id`}
          element={
            <Suspense fallback={<Spinner />}>
              <ProductPage />
            </Suspense>
          }
        />
          ))
        }
        <Route
          path="about"
          element={
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
