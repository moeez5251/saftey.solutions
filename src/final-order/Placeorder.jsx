import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Package, 
  Truck, 
  Download, 
  Calendar, 
  MapPin, 
  Phone,
  Mail
} from "lucide-react";
import confetti from "canvas-confetti";

function Placeorder() {
  // Trigger confetti on load
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f97316", "#ea580c", "#dc2626", "#16a34a", "#2563eb"],
      ticks: 200,
      gravity: 0.8,
      decay: 0.94,
      startVelocity: 30,
    });
  }, []);

  // Mock order data (in real app, this would come from context or props)
  const orderData = {
    orderId: "SS" + Math.floor(Math.random() * 900000 + 100000),
    date: "January 07, 2026",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+92 300 1234567",
      address: "House #123, Street ABC, Lahore, Pakistan",
    },
    items: [
      { title: "Premium Safety Helmet Pro", quantity: 2, price: 4500 },
      { title: "Fire Resistant Gloves", quantity: 1, price: 2800 },
      { title: "High Visibility Jacket", quantity: 3, price: "Call for Price" },
    ],
    total: 11800,
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(24);
    doc.setTextColor(249, 115, 22);
    doc.text("S.S-SAFETY SOLUTIONS", 105, 20, { align: "center" });
    doc.setFontSize(16);
    doc.setTextColor(0);
    doc.text("Order Receipt", 105, 30, { align: "center" });

    // Order Info
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Order ID: ${orderData.orderId}`, 20, 50);
    doc.text(`Order Date: ${orderData.date}`, 20, 58);
    doc.text(`Estimated Delivery: January 10-11, 2026`, 20, 66);

    // Customer Details
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("Customer Details", 20, 80);
    doc.setFontSize(11);
    doc.setTextColor(80);
    doc.text(`Name: ${orderData.customer.name}`, 20, 90);
    doc.text(`Email: ${orderData.customer.email}`, 20, 98);
    doc.text(`Phone: ${orderData.customer.phone}`, 20, 106);
    doc.text(`Address: ${orderData.customer.address}`, 20, 114);

    // Items Table
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("Order Items", 20, 130);

    let y = 145;
    doc.setFontSize(11);
    orderData.items.forEach((item, index) => {
      const priceText = typeof item.price === "number" 
        ? `Rs. ${item.price.toLocaleString("en-IN")}` 
        : item.price;
      const lineTotal = typeof item.price === "number" 
        ? `Rs. ${(item.price * item.quantity).toLocaleString("en-IN")}` 
        : item.price;

      doc.text(`${index + 1}. ${item.title}`, 20, y);
      doc.text(`Quantity: ${item.quantity}`, 30, y + 8);
      doc.text(`Price: ${priceText}`, 30, y + 16);
      doc.text(`Total: ${lineTotal}`, 30, y + 24);
      y += 40;
    });

    // Total
    doc.setFontSize(16);
    doc.setTextColor(249, 115, 22);
    doc.text(`Grand Total: Rs. ${orderData.total.toLocaleString("en-IN")}`, 105, y + 20, { align: "center" });

    // Footer
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text("Thank you for choosing S.S-SAFETY SOLUTIONS!", 105, y + 40, { align: "center" });
    doc.text("For any queries, contact us at +92 300 1234567", 105, y + 48, { align: "center" });

    // Save PDF
    doc.save(`SSSafety_Order_${orderData.orderId}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Animation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header with Checkmark */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <CheckCircle size={120} className="text-white mx-auto" />
            </motion.div>
            <h1 className="text-5xl font-bold text-white mt-6">Order Placed Successfully!</h1>
            <p className="text-xl text-orange-100 mt-4">Order ID: {orderData.orderId}</p>
          </div>

          {/* Main Content */}
          <div className="p-10 lg:p-16 space-y-10">
            {/* Dispatch Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
            >
              <Truck size={64} className="text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Your order has been dispatched!
              </h2>
              <p className="text-xl text-gray-700">
                You will receive it in <span className="font-bold text-orange-600">3-4 business days</span>
              </p>
              <p className="text-gray-600 mt-4">
                Estimated Delivery: <span className="font-semibold">January 10-11, 2026</span>
              </p>
            </motion.div>

            {/* Customer & Delivery Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin size={24} className="text-orange-600" />
                  Delivery Address
                </h3>
                <p className="text-gray-700">{orderData.customer.name}</p>
                <p className="text-gray-700">{orderData.customer.address}</p>
                <p className="text-gray-700 mt-2">{orderData.customer.phone}</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Calendar size={24} className="text-orange-600" />
                  Order Details
                </h3>
                <p className="text-gray-700">Order Date: {orderData.date}</p>
                <p className="text-gray-700">Items: {orderData.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
                <p className="text-2xl font-bold text-orange-600 mt-3">
                  Total: Rs. {orderData.total.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Blinking Download Receipt Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <button
                onClick={generatePDF}
                className="inline-flex items-center gap-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105 animate-pulse"
              >
                <Download size={36} />
                Download Your Receipt
              </button>
              <p className="text-gray-600 mt-4 text-lg">
                Your receipt will be downloaded as a PDF with all order details
              </p>
            </motion.div>

            {/* Thank You Message */}
            <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Shopping with S.S-SAFETY SOLUTIONS!
              </h3>
              <p className="text-xl text-gray-700">
                We appreciate your trust in us for your safety needs.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                For any queries, feel free to contact us:
              </p>
              <div className="flex items-center justify-center gap-6 mt-6">
                <a href="tel:+923001234567" className="flex items-center gap-3 text-orange-600 hover:text-orange-700">
                  <Phone size={24} />
                  +92 300 1234567
                </a>
                <a href="mailto:info@sssafety.com" className="flex items-center gap-3 text-orange-600 hover:text-orange-700">
                  <Mail size={24} />
                  info@sssafety.com
                </a>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles for Blinking */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default Placeorder;