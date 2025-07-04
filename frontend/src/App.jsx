import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/standard/Navbar.jsx';
import Footer from './components/standard/Footer';
import Home from './components/standard/Home';
import Contact from './components/standard/Contact';
import AdminLogin from './components/Admin/AdminLogin.jsx';
import AdminDashboard from './components/Admin/AdminDashboard';
import NotFound from './components/standard/NotFound';
import { AdminSignup } from './components/Admin/AdminSignup.jsx';
import SupplierLogin from './components/Supplier/SupplierLogin.jsx';
import { SupplierSignup } from './components/Supplier/SupplierSignup.jsx';
import SupplierDashboard from './components/Supplier/SupplierDashboard.jsx';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/supplier-login" element={<SupplierLogin />} />
          <Route path="/supplier-signup" element={<SupplierSignup />} />
          <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
