import React from "react";
import BloggerDetails from "pages/BloggerDetails";
import ContactUs from "pages/ContactUs";
import BlogDetails from "pages/BlogDetails";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/bloggerdetails" element={<BloggerDetails />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
