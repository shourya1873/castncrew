import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import NotFound from "./pages/NotFound";

// import AdminDashboard from "./pages/admin/Dashboard";
// import ArtistDashboard from "./pages/artist/ArtistDashboard";
// import MakerDashboard from "./pages/maker/MakerDashboard";

// import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Guest & Public Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}

        {/* Example Guest-only route */}
        <Route
          path="/signup"
          element={
            <GuestRoute>
              <SignUp />
            </GuestRoute>
          }
        />

        {/* Admin Protected */}
        {/* <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* Artist Protected */}
        {/* <Route
          path="/artist/dashboard"
          element={
            <ProtectedRoute allowedRoles={["artist"]}>
              <ArtistDashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* Maker Protected */}
        {/* <Route
          path="/maker/dashboard"
          element={
            <ProtectedRoute allowedRoles={["maker"]}>
              <MakerDashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
