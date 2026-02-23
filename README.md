# 🔥 S.S Safety Solutions

<div align="center">

![SS Safety Solutions](https://img.shields.io/badge/S.S-Safety%20Solutions-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-Private-green?style=for-the-badge)

**Leading supplier of premium safety equipment, protective gear, fire fighting systems, and rescue equipment in Pakistan**

[🌐 Live Demo](https://www.sssafetysolutions.com) &nbsp;|&nbsp; [📧 Contact](#-contact) &nbsp;|&nbsp; [📦 Products](#-features)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## 🏢 About

**S.S Safety Solutions** is a modern, responsive e-commerce platform specializing in high-quality safety and protective equipment. We serve industrial, construction, and emergency service sectors across Pakistan with certified, reliable safety products.

### Our Product Categories

| Category                   | Description                                                |
| -------------------------- | ---------------------------------------------------------- |
| 🛡️ Security Equipment    | Tactical gear, body armor, helmets & protective suits      |
| 🚒 Fire Fighting Equipment | Extinguishers, hoses, nozzles & essential tools            |
| 👟 Safety Shoes            | Steel-toe, anti-slip boots meeting international standards |
| 🚧 Road Safety             | Cones, reflective signs, barriers & safety signage         |
| 🪂 Fall Arrest System      | Harnesses, lanyards & anchors for height safety            |
| 🚨 Fire Alarm System       | Smoke detectors, sensors & early warning panels            |
| 🏥 Medical Equipment       | Defibrillators, oxygen systems & emergency kits            |
| 🧪 Laboratory Safety       | Goggles, lab coats, gloves & safety equipment              |
| 🛠️ Industrial Tools      | Heavy-duty machinery & equipment                           |
| ⚡ Power Tools             | Drills, saws, grinders & electric power tools              |

---

## ✨ Features

### 🎨 User Experience

- **Modern UI/UX** - Clean, professional design with smooth animations using Framer Motion
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance** - Powered by Vite for instant HMR and optimized builds
- **SEO Optimized** - Structured data, meta tags, and breadcrumbs for better search visibility

### 🛒 E-Commerce Functionality

- **Product Catalog** - Browse extensive safety equipment categories
- **Shopping Cart** - Add to cart functionality with persistent state management
- **Product Details** - Detailed product pages with images and specifications
- **Checkout System** - Streamlined checkout and order placement process

### 🔐 User Management

- **Authentication** - Secure login and signup pages
- **Protected Routes** - Role-based access control

### 📱 Additional Features

- **Toast Notifications** - Real-time feedback using react-hot-toast
- **Smooth Animations** - Beautiful transitions with Framer Motion
- **Image Carousels** - Product sliders using Swiper.js
- **Icon Library** - Comprehensive icons via Lucide React
- **PDF Generation** - Invoice/receipt generation capability (jspdf)

---

## 🛠️ Tech Stack

### Frontend

| Technology                 | Version  | Purpose                 |
| -------------------------- | -------- | ----------------------- |
| **React**            | 18.3.1   | UI Library              |
| **Vite**             | 7.2.4    | Build Tool & Dev Server |
| **Tailwind CSS**     | 4.1.18   | Utility-First Styling   |
| **React Router DOM** | 7.11.0   | Client-Side Routing     |
| **Framer Motion**    | 12.23.26 | Animation Library       |

### State Management

| Technology              | Version | Purpose                       |
| ----------------------- | ------- | ----------------------------- |
| **Redux Toolkit** | 2.11.2  | Global State Management       |
| **React Context** | -       | Local State Management (Cart) |

### Backend & Database

| Technology         | Version | Purpose              |
| ------------------ | ------- | -------------------- |
| **Appwrite** | 21.5.0  | Backend-as-a-Service |

### Forms & Validation

| Technology                | Version | Purpose       |
| ------------------------- | ------- | ------------- |
| **React Hook Form** | 7.69.0  | Form Handling |

### Additional Libraries

| Library                      | Purpose                  |
| ---------------------------- | ------------------------ |
| **Swiper**             | Touch Slider/Carousel    |
| **Lucide React**       | Icon Library             |
| **React Helmet Async** | Document Head Management |
| **React Hot Toast**    | Notification System      |
| **jsPDF**              | PDF Generation           |
| **Canvas Confetti**    | Celebration Animations   |

### Development Tools

| Tool                   | Purpose                             |
| ---------------------- | ----------------------------------- |
| **ESLint**       | Code Linting                        |
| **Vite Plugins** | React Refresh, Tailwind Integration |

---

## 📁 Project Structure

```
saftey.solutions/
├── public/                     # Static assets
│   ├── favicon.ico            # Browser favicon
│   ├── android-chrome-*.png   # PWA icons
│   ├── apple-touch-icon.png   # iOS icon
│   ├── sitemap.xml            # SEO sitemap
│   └── ads.txt                # Google AdSense
│
├── src/
│   ├── assets/                # Images, fonts, etc.
│   ├── components/            # Reusable UI components
│   │   └── SEO.jsx            # SEO meta component
│   ├── context/               # React Context providers
│   │   └── CartContext.jsx    # Shopping cart state
│   ├── layout/                # Layout components
│   │   └── Layout.jsx         # Main app layout
│   ├── home/                  # Home page
│   │   └── Home.jsx
│   ├── products/              # Products listing
│   │   └── Products.jsx
│   ├── Details/               # Product details page
│   │   └── Details.jsx
│   ├── Checkout/              # Checkout page
│   │   └── Checkout.jsx
│   ├── final-order/           # Order confirmation
│   │   └── Placeorder.jsx
│   ├── about-us/              # About page
│   │   └── About.jsx
│   ├── services/              # Services page
│   │   └── Service.jsx
│   ├── contact-us/            # Contact page
│   │   └── Contact.jsx
│   ├── LOGINS/                # Authentication pages
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── appwrite/              # Appwrite configuration
│   ├── store/                 # Redux store (if used)
│   ├── utility/               # Utility functions
│   ├── conf/                  # Configuration files
│   ├── cat/                   # Category components
│   ├── App.jsx                # Main App component
│   ├── App.css                # App styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
│
├── .env.local                 # Environment variables
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── netlify.toml               # Netlify deployment config
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

---

## 🚀 Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd saftey.solutions
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   ```
4. **Start the development server**

   ```bash
   npm run dev
   ```
5. **Open in browser**
   Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Appwrite Configuration
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here

# Optional: Google Analytics
VITE_GA_TRACKING_ID=your_tracking_id
```

> ⚠️ **Note:** Never commit `.env.local` to version control. It's already in `.gitignore`.

---

## 🌐 Deployment

This project is configured for **Netlify** deployment.

### Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Build Settings:**

   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. **Set Environment Variables** in Netlify dashboard

Configuration is already set in [`netlify.toml`](netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Manual Build

```bash
npm run build
```

Production files will be in the `dist/` folder.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact

### Business Information

**S.S Safety Solutions**
📍 Location: Pakistan
🌐 Website: [www.sssafetysolutions.com](https://www.sssafetysolutions.com)

### Leadership

**CEO:** Mr. SUFYAIN ALI*Founder & Chief Executive Officer*

> "At S.S SAFETY SOLUTIONS, we believe safety is the foundation of progress. We are dedicated to providing world-class, certified safety equipment that protects lives and empowers industries, workplaces, and families across the nation."

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

<div align="center">

### 🔒 Built with ❤️ by S.S Safety Solutions Team

**Protecting Lives. Empowering Industries.**

[🔝 Back to Top](#-s-s-safety-solutions)

</div>
 