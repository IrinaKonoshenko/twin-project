import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Catalog from "../pages/Catalog";
import Bot from "../pages/Bot";
import Reviews from "../pages/Reviews";
import ReviewNew from "../pages/ReviewNew";
import Pricing from "../pages/Pricing";
import Testing from "../pages/Testing";
import NotFound from "../pages/NotFound";
import Test from "../pages/Test";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/bot" element={<Bot />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/reviews/new" element={<ReviewNew />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
