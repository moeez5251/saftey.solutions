import React, { useState, useEffect, useRef } from "react";
import { Menu, X, User, ShoppingCart, UserCheck, LogOut, Trash2, Search } from "lucide-react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import auths from "../appwrite/appwrite";

// ← NEW: Import the real cart
import { useCart } from "../context/CartContext";

// ← NEW: Import your products data (adjust the path if needed)
import { productsData, categories } from '../cat/ALL'; // ← CHANGE THIS PATH TO WHERE YOUR productsData IS EXPORTED

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // ← NEW: Search states
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // ← NEW: Use real global cart
  const { 
    cartItems, 
    totalItems, 
    totalAmount, 
    removeFromCart,
    updateQuantity
  } = useCart();

  // ← NEW: Flatten all products for search (static, so no performance issue)
  const allProducts = Object.values(productsData).flat();

  // ← NEW: Filtered results (max 10)
  const filteredProducts = allProducts
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 10);

  // ← NEW: Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ← NEW: Handle product selection → navigate to detail page
const handleProductSelect = (product) => {
  setQuery("");
  setShowDropdown(false);
  
  // Navigate to products + hash for this product id
  navigate(`/products#${product.id}`);
  
  // Optional small delay to let page settle
  setTimeout(() => {
    const el = document.getElementById(product.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 400);
};


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    (async () => {
      try {
        const currentUser = await auths.currentuser();
        if (currentUser) {
          setIsLoggedIn(true);
          setUser(currentUser);
        }
      } catch {
        setIsLoggedIn(false);
        setUser(null);
      }
    })();
  }, []);

  const handleLogout = async () => {
    await auths.logout();
    setIsLoggedIn(false);
    setUser(null);
    setShowLogout(false);
    setToastMessage("Logout success");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const linkClass = ({ isActive }) =>
    `text-gray-700 font-medium transition hover:text-orange-600 ${
      isActive ? "text-orange-600" : ""
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-md text-base font-medium transition ${
      isActive
        ? "text-orange-600 bg-gray-50"
        : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:h-20 h-26">
            {/* Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* LOGO */}
            <div className="flex items-center absolute inset-x-0 justify-center pointer-events-none lg:pointer-events-auto lg:static">
              <NavLink
                to="/"
                className="flex lg:flex-row flex-col items-center lg:space-x-3 pointer-events-auto group px-4"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABNVBMVEX/////SwD8////TAD/SAD//f/3///6////+//8TAD/RAD7/f/8SAD//f79//37SgD9PQD/9//6//v6QgD+/Pj6//j5TQD3RgD+/ff/OADz//36OgD7TwD9//fy///3PgD7KgD/8efzUgb2TQ30//f86d/89u/+dUn/x7n/dVL7akv9p5P/3NH/08X9/vH98e755cvz0qr3waz4wKL8YC73el/+5+b8jHf9tqT/WS/8jm781rz1xLD/nIT3SRT/XjL7poP4vpb8fln8yMTycDbu/+r5ZDz/7+T0qJL6WzH8t5n8ViDwekj+3dj/lXTu2cj5XhvynXP7fmv5iFz4q4f1cUj28Nv/qqL8mYr4zrH/TSj+c2T0dlr1kGf9s7D7qYz+6fD/W0L23sL3YT38bDL9lW31ZhO/GrwuAAAVG0lEQVR4nO1da1vbyrWWdRuN5iaPxiPJlm3wjbvdEpIYgmnq3QCBhqQ73bRJ03J6kn3+/084MpDgyDaWlcgGHt6PWFHm1axZs26zRlEe8YhHPOIRj3jEIx7xiEc84hF3DghxYix6EJmCI9H2Fz2ITJEvEwMtehCZoi0qnT8sehCZgit/XN9e9CAyQNlQed6yuCKe7CyttxY9nAxgKeVCUWmXt56WHHtDXfRwMoDFad6qPHvueBB7m+1FDycDFIVlvuqeOnUW6rvWg5xDUVneKzHGoOc9bzyw/ZAiShAHL8JSbgDobKsPjKFhckHovuvWLhkye0sRix7Tz4XJ84bZc2VoX83hQZPSRY/p54Jyo91zdOiGlwxzu53CA7PaEKr0XMaw9C4J6n9C5YfDsGAQxfB5L2C5b9B31OivDwWWSX0ButVQv2GId1Tl4TA0uGWa+46EeJghFQ9H01CaN5vYC105LKXiATFUOXj11KnZtaE5tE9bD4ihMMyX1dz30A42wcNZh9RvnsoYQ93bAose188DbX/SWZxhtUsfEMV9x40zZO7ZA7LaWms2DmMM6/aKeBDrsGG1TfPPQU3DMYbSc88XPbifAoIaeb5jMwjj61AvPYxQG6HU3F8KI4s7zlBW9x5EFEMQq93HdajHGcKQ7TQXPbqfAR/xTTt0oV6LM3Sl88uiR/czgF6ZL53cGOBQl39RXuVRYdFD/EEQUxza4xhCGemaI8Ok933L4OitE1ejl9A8pjsbZuHem98cHetxk/RKSnOhhK/PLXrfQxlCrHlxNXqJumazXPVELdz3RDDteDhukt5A323dfxfqF/cWhtg7QffewdgIcmPX4RXD+sfWfWdI+5FNOpGhZKWLRY/wR0HWsRyraS7BsDy976bbZh2zyeuQhbD+V9MqN6xFjzM9NmXuFoZQ2rnqC0SQuehxpscvHoaTpTTHINbXW5Z5j/NsXVeX+mSGWIbS6TXucwZjw7NvYRgpIYylfFPgix5nepzZ2i07/hVN+4vwDYDy99OP2pvO0JWliwrxuXo/RbUfMZy841+C4dBdrZjGPU0JJ2AYSjf8uGzm+f1cjH0bThHSHIwcSHevjUB+0YNNhZVoP5xGcYDg74Dcz21/xdMTMZTuW3Q/y9xWbrdpvoE575bv526xg5Mx9MJq/36Wm0YMtQQEIwO17vxt0YOdAMoFH284F6gFQsZu8Q+/R3ASeRl30I9Caqs4VgsSnxKVYZiYYe5gi9/FnOLytmmNnUMiqOo7WIOJxPQSp53yHQwQ01/fL4+NJqkC8OVA03KJGdbttdYdZGj+eelwbKwFRAybSwzqU6y2G+B6tVeZ9/inQ3RcN9jiyGrEf6EqWC1pyXTpJSCTkW3jq358IqmlcoGIsZjgKmrVdFZdBe14RleliHdLyfldehmy9NZqjB4XUollDCr9FuJ+mKKvY1jdV+J6XvVB4cKJGCYmyaQT2qfnFop7GVaBGhWFKos57UaVf9qYYXurGPtBjcRtb2zucCLDustqzpqg8RJ3S5jgfGF5OKF0XYjr+sFm7AfkW601PfkMDuJSkkU2+MtKXBwiv0McE6EsJgNA6b4T6hr0gg74bmc0BWjOsgqv4YalVU5VUhxyFwXy0ckaMa0FTeOqA3OaxtxPnWjp3fwZCXVzbAr/dkiMd5ooUs1DbHxSBi+WTsCiUuKrDmMw2tmDC9UfUnYWV/8czM4QSt35jSIghl5VRgXUDJxNsaBQzqrNtEFVV6Rtho8yGVx5P5OiuQJmkcBfFCw+tBipwSny7NdHC4mNUxpJqZ7D0dauf6Hl4V+sncRG9w2kFykcd9MctlCBRX011Jze3NkN4KvbzlWcwpPBMeXczF9tZ5RvuvGKxMQT+dkncYk89HJB1/RHbaesQdUN+4oh9uTnI5SnytXXJ8q2m5JgTqteGPFNsW/X8EGnLdDcF6O6d120hqXtbph5WrhmSH9NbnTH5zDnvIk7nWdOXXPOaNGad1zVJ1+uIzGS6fKgXUHXBSTq+QGcnMK/HczzPsXDNhcutmvBKgDzZlhGtWsvHtfZQTDwh682RfXDUt1LyVBG8hAvP/2HU8fQO2zP/egp6QRD5yjsTy2zBQgAPuBPXZx6DnXNsyOlMrwBdiPTCUPnGM3dsPklGHYB601gUJUKYjVP9VvKMKYwzEUeWTcShyFnYsAQMv20Ne9NEfSc4TJ1p6taFAkfgH/Y7Lb0762AUNdyux1Ehtbcthv9kUHnn/Neh2INsyFhdPvUoIoPKu3d3Hc/zDiHkanrHHNliM1q5MJAN9ox3s6Z4bP/6vWhqdJOXwmTtlTjbVDHej0lwwFHTd9p+UOm9qqr6RAy7D6fHzlOUFtZ9XBtKPeC8QtV4YKStbQS+g2h220MMdy24dWZhqWmisw5eRllg4Mz1xs+k8bcfVUpCOVDCscpBt39NDyHXQdql5/S7hWFmI+6MRoEgVD3votqu8cK8RHfSeFWxICl0xwybI4dmbtkqH9s+mRO6sa0zM0g9/1hCrenKqQ8GM6PQobOy6HdvWfLawO42lON+aRTKbLMkwB+n6nXn6oCHHmpTdIb1KE+3ODlecTw6rOxXeHPR0qpUHhcodRy//J5632Qeiu8QSSU7hawTMtXjKIAK07teg6l2y3OJ0dFCWoexIbleX/1lZdOmNroHmIIPffCNKihqgawwDtb6lemBcbfqaAsGRrmcdwFrNtr6EOppssk2fvbgTXPfacCIQAghqUMKuSuGcpScz7rUDXK6yNE7H9v1SFOb7ANMfRgLjgCBkfUt8BREC33q8XtRSpoPqFTTs8P4gxr7pcdG0toxw86zQ7oaXDpAzUKxIo23hdLEF+fYqwze049pgjojpx+jZTpD1Mbgt1TOOIF0jBOBibElRODtUgFKW2UfZyfk76dIpo2E8OnHW4IagDQuzEhBirozBTR5GbNsPDMTe0BJoS+2yyqhEQG8Ocb2WDQsyVARvbl4bzrpPaPElPcAgBFc7U5JCwew3ppax5ZDLDn2mkjMUnhrEa7LqHF/1w2ZbhahxFBVrooWplG3QxABW2e4mmllRMhpce83PT8qfO7SUiZmiuxBa9/8hU/28gpUcC+y0bO9yZFZHRKmYCh/T4yvrl1dBrzVfSPR0qmqSjTiNTbe0eOdINIilB6upubXotiH0YzxVF3JHwerHKeJUNuIE4Z9kZOoSeF67l7L+3pDPHpMlJVsTJiBTpnaqaahlq8/GxJumFaTeNVu9bfndxUhuygiSh6VhqRFbwOMnWhUEGYFyndeCxxvbrSVMznCV4gnS0Tob3RE3Dy4CjTYA0hhniakqHn1Zz+eZGIfoIXePY2Lb79KEeWg+Zm2+CGW+bRaUoLNMRLL32UF34/wQuY21VB35WjgclqN9MCIk4qW2mjaa59UjQobXTWEzDE9kZlqyT10RSIt5eppiG0vJGWYXXDp8JQ+f8kCalKp3e+jt2aF3+WeV8yLUalVI1bGUng1fV69aSA/EElV6I5rHvv/z22ooPpYStLKaW08zrFMmSshn8tA6tMo+2mk2QOITw4GN+yQPeaWWYSAdiqp2CoQ/dTp2JQbqkRw08JdKnmaePtJpirvsiSIVK7TgqDTdqvW1yIompFUkqS1PVh/LXjaZwhdE6yZGipG2mi2rr3AqmAgDxXLM7PEjBk0HXHZrAkLF1kydD3V2Y0SZnEunQ2gHV1NIZaDeW4VMOpDVsdO79nueX7rZ3cbGPDUEq81uGFq9ADNQpoO2CpM/2R+Drvs2RIl70ZnV9pS620ya3rlCCNXKJmEM1s6lQ/tteytLzBZmna6dcYIGbuWaVtfM2L8UjbSP1rkDcNQ/x5OUuGq0GiE1s3wJ7cPReoYV2VVyCTEPMvLsyldaElhv89ypLhy9KMDPWwdBJ/S9eNZiIlw0gNZNpTQ/3dmZEh9GojkfjNuvYj4chsu4a8n37A93swe4PH7Ui1P+t3uoGWy40Uz/9MxKpoEgCfdkaiDup2NX1WQIPZMlxnM+pStwdGIrikdQpTh5RhtgyPdmHyHb+m52QON4tWXEoLpOumT3xoOEuGzVkYQh0yu98BRtwpt4qd3RlOfn0HjDNmeAqTn4bRodSCrlIA5dhbSFHdvnRvU7CMDFovS4abB7MoQchgdRkIENc07XxBzHY0aoghzNUzZphc0WiQ4Rqg/kiegQMLnS8NJG52hjhrhl407qSDgcxz/zHxVV3mhSkYQj38b5Y7fsRwhvSvtPHWxFdZZ6nyrJH6ujsM9dB+PdkNMMVONcXJk8seWneFIdPc/uTobZk/e5fGspH2WpaXDW2yXHKbRuLqLR0hkOD7pRQM63Y/yzjN5imTiRcPZMH+5MEggfiTqqfXZrPfWFjKNE7TPMXJK9cYdjYn16Fx3zL5c1yfsXCFadmWfjX/pI+0WZ8InJPLk8smjAK1KqJvz7gpanqQaVP35UM9uVED9R1/MkMLcUGKrdfebAoV4iDLDV9pH+a0xFKK7ZXC5LBYI48IMND/1mYz3yRzOlnG2uhTbXyP56Eh6Lp3Fa1m9vNpzdiob0aOFMRh4s9W13ezLaPdm1osxHBY068Z9kYCGDGYltU+K0msJxZV7PazrRjqOdOkVGP4+hHNmZphQKKSb9VsOEOY2d2gWe6H6klp2lhgeHB9fw50TpQpGWniE8t8ciCTNySSzv60l/4YwycBnJI/HGRvrxLhMNLrUwYDgEU4eR/UEiclpbtJstQ06ptgmkkTDaF7zdB5kuhzi84MyRD2p0amtYm0Y0/Tet5hYfP6Nkdn6hxeApGem9gUdPo026NBrdNpZYnuhtm6KuxNypAbzXri3cLpAjVLKSX+p2mTqG+i9oY9C0OigN/jt5dNBHujiiy9J1J47tzuC+iHyxWrGczCUJRB4m4o+mELnWcppYL/Z6SGZ+i/z2k5pwfKFuh7g557djeRFyAQFX2GvWlbBs5B6bwslq0se0kCY8ueHOTEGswFJ4BbdMuNvCzNSXYFt0A+vQgiz3qaumEaLm2ZPso0B2ydH0xW7JFjpS1tAW5Qdc+J7NfIakvSw4oovtlcgl8P4U3+gBAPTiP4mR5gU43G+mRZgpqeC1qRbqTKH+quZPrzchKGqqBIeaeH0xgyyNwzk9BMNwuimHu3dC7RNWYDwQlV0EU1Wle/lpN8bkqRBd6XplpudTg4FeSrJMt1KDjfrMpwQvIicoP008vnfAIil8F+ZyVuoTvo5zPlkLvMuAzjCpQ+29UjrTaWIYMY71w+BhTe6QcStxI3et7CbFp9hmSlJ5m3/+ACoee2NqFZd6QK8OHlc6CYp+3DkttMLFDN3Qmfbej1Xj37y1sKQlVXAzwheYE13Vu5fM4nlbbR/tvSVuI5bK1PL0BxN0jmN88XLNpGl13MxjLMYbZ2+VzREqRcsI6fJJ5DsIbH3xB1A6k32/M5Q3rmTBAoHOruX1SqkK+BlBlWDYjeOpmhx2o6dHrmSPPIbLB1ICeEo6CufxmwShEqUgff7Zbpw3W22wR8PqfVUX9CQcagy8K7lC9Ve84tmgYyLwxOEJ9TI0z0ojQ+lAEx01hKfU4vnFt2Cyxr9ru2ZYx0c8sG3DocbySHugergzM7Kb40v6jeciAuxGHwxGqb1nw6Doji1tXlhiNSpeW0oEl4mjuN1Y3SLduFl/N6c+yiBMrGb3a0+Y0umwHDLcpTLZYL55auIVJ+PJpju2hOyFs32vNHtbumaaUnXEkVsu3dytBZneddJkIUjF4VatoYdaPZZwWDp2Co3rofVs8q5Tm2aVUJB8sBY2OUe2S3fSrnCyksj4jh5Pp9/fOyqMy7I92qF9bGeYp62CykGUthbcJdAxJr0un4YO63JonnzvgjBe6WmWa3aK1PuPMD1zVnmxJDmXfPPdQ6dcfaIE6vguKlegnQPB2nnHODni1LJ9Q0jHk1wfoGS3lbH/vN9UNSTvG5J3rA0vk3ESAydefd+zLa1Y/HlsPg02ftFF3iVx2ZGxvFcNdbJhGUq/NuPY84aF8EUvfiizF0ujPKk8+RpQwiUXGZcJlWdz6dA7GQO1qQb6Fy34M4HuTX8VqiKOkNKBVIeWePRhPrEtuHR9RazMVl1qAcZrk/mhJ2pbM5mwdASbnSXGJypAOT5jkrTRMZdCF3I1ioIUQj3x/J/Hmy2ptxt4g0STfQRqP6nvtbxySEWwuR0kZeJabVWP4tiOn4urQ/d2Z6FQWUPsfYC+MWRPW3DhCIVubfy/sbDG62z4JIRQx9fQ3Xgr+rbTO5eihY/nl8NTOJWanXqoh57xExEJEH7cgpYEM2uMTQrjeIMBKrB6GoJ/GT6Yzp7kYbjb9waY4wG4plqk/c4YpMqOtwtpCK1SjsxJ1f6cIPvGKJRvwKlDkjbzQEIOTN66EUrs6gZLtN1E4spSp9MqKv3M9vVJ+XC+qC73/keZNYiKrNvwbf5JTJmgtLPRMlDgYTsO59v+nowdlykSCDG9YduYNdVS7eOR4Mv+kc6bwwuOBTGx5FtsHgeqil63MJ0suFOsTB+v58xj0DSKHZdzwX1669WAw/t4hCLDKFoQUKPm0dyuvW4DKse9Jz95p38JKyisr3I3fKrV3NIcbO35AZOXVTFKrBLWD+0/161fzgquvSly2VLFi/jANpE9p+uWtfnyv06gx3qYKmXWig0ry5WZLw+p/Vpfv6uIXQYkzt20EpB5Z6/nvgXqocT+ou7gh1WgYDUfBqzYP2tYfiOr2m0og2mrt6vywxQPNlvRpKV+oY5nbfcGBEnp0y1nA2VC5I2zLPSoPOvJGdAEv6yyZYjJWdFA1hVYrN49eOh3EYuvrhs7IReefj1c1gftWKsu2GWNaldEu7F+eNilVenA2aABbiRr4AGh/27GqVMc1eWX4FkEHGakZODAOov3iRg4ntktN/0lF8ywDGHVyCNyBlDkxBVAOdb//62nOks/5scPnP2NS0oISIFzvYde36ykUk0BwhE3C6aEv0VlBKjLZPFC5UFTR/+b1WLX3sUBOMlVICAO3goBT83/GmpbQJsmi5POiUNe9R/wCAurx9sfbh60VQMRTz4I+n/Zf72ZdXZIfIZFWVdic/PvnuA/TmD0RBd3vh3Q5Ey+1GvsKNsRYKpXmAypyDBV0b9zNgUmJZJhfjwyxGtLU3rOi3O61abocgl0V5aHzWiCJDNSMxzrbU8BGPeMQjHvGIRzziEY94xCMekRD/D9jA54ZaGDyzAAAAAElFTkSuQmCC"
                  alt="Flame Icon"
                  className="md:h-20 md:w-12 h-12 w-8 object-contain drop-shadow-md group-hover:scale-110 transition-all"
                />
                <span className="font-extrabold tracking-tight text-gray-900 text-center lg:text-left">
                  <span className="block text-xl lg:text-2xl">
                    <span className="text-orange-600">S.S </span>SAFETY
                  </span>
                  <span className="block text-xl lg:hidden">SOLUTIONS</span>
                  <span className="hidden lg:inline lg:ml-1 text-2xl">
                    SOLUTIONS
                  </span>
                </span>
              </NavLink>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <NavLink to="/" end className={linkClass}>Home</NavLink>
              <NavLink to="/products" className={linkClass}>Products</NavLink>
              <NavLink to="/services" className={linkClass}>Services</NavLink>
              <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </div>

            {/* Icons + Search (Search only visible on large screens) */}
            <div className="flex items-center space-x-4">
              {/* ← NEW: Search Bar */}
              <div className="hidden lg:block relative" ref={searchRef}>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 transition-shadow focus-within:ring-2 focus-within:ring-orange-600">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search products..."
                    className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500"
                  />
                  <Search size={20} className="text-gray-500 ml-2" />
                </div>

                {/* Dropdown suggestions – same layout as your screenshot (image + title + desc) */}
                {showDropdown && query.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                    {filteredProducts.length === 0 ? (
                      <div className="px-4 py-3 text-gray-500 text-center">No products found</div>
                    ) : (
                      filteredProducts.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductSelect(product)}
                          className="flex items-center w-full px-4 py-3 hover:bg-orange-50 transition border-l-4 border-transparent hover:border-l-4 hover:border-orange-600 text-left"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-12 h-12 object-cover rounded mr-4 flex-shrink-0 border border-gray-200"
                            onError={(e) => (e.target.src = "/placeholder.jpg")} // fallback if image fails
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">{product.title}</p>
                            {product.desc && (
                              <p className="text-sm text-gray-500 truncate mt-1">{product.desc}</p>
                            )}
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* User & Cart Icons */}
              {isLoggedIn ? (
                <button
                  onClick={() => setShowLogout(true)}
                  className="p-2 rounded-full hover:bg-gray-100 transition text-orange-600"
                >
                  <UserCheck size={20} />
                </button>
              ) : (
                <Link
                  to="/signup"
                  className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 hover:text-orange-600"
                >
                  <User size={20} />
                </Link>
              )}

              {/* Cart button with real count */}
              <button
                onClick={() => setShowCart(true)}
                className="relative text-gray-700 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 ">
            <div className="px-2 pt-2 pb-4 space-y-1 z-1000000">
              <div className="mb-4">
                <div className="relative" ref={mobileSearchRef}>
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 transition-shadow focus-within:ring-2 focus-within:ring-orange-600">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setShowDropdown(true);
                      }}
                      onFocus={() => setShowDropdown(true)}
                      placeholder="Search products..."
                      className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500"
                    />
                    <Search size={20} className="text-gray-500 ml-2" />
                  </div>

                  {/* Dropdown suggestions – same layout as your screenshot (image + title + desc) */}
                  {showDropdown && query.trim() && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                      {filteredProducts.length === 0 ? (
                        <div className="px-4 py-3 text-gray-500 text-center">No products found</div>
                      ) : (
                        filteredProducts.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleProductSelect(product)}
                            className="flex items-center w-full px-4 py-3 hover:bg-orange-50 transition border-l-4 border-transparent hover:border-l-4 hover:border-orange-600 text-left"
                          >
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-12 h-12 object-cover rounded mr-4 flex-shrink-0 border border-gray-200"
                              onError={(e) => (e.target.src = "/placeholder.jpg")} // fallback if image fails
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 truncate">{product.title}</p>
                              {product.desc && (
                                <p className="text-sm text-gray-500 truncate mt-1">{product.desc}</p>
                              )}
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
              <NavLink to="/" end className={mobileLinkClass}>Home</NavLink>
              <NavLink to="/products" className={mobileLinkClass}>Products</NavLink>
              <NavLink to="/services" className={mobileLinkClass}>Services</NavLink>
              <NavLink to="/about-us" className={mobileLinkClass}>About Us</NavLink>
              <NavLink to="/contact" className={mobileLinkClass}>Contact</NavLink>
            </div>
          </div>
        )}

        {/* Logout Modal */}
        {showLogout && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setShowLogout(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowLogout(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition text-gray-500"
              >
                <X size={24} />
              </button>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Hi, <span className="text-orange-600">{user?.name || "User"}</span>
                </h2>
                <button
                  onClick={handleLogout}
                  className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-3"
                >
                  <LogOut size={24} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast */}
        {toastMessage && (
          <div className="fixed inset-x-0 bottom-6 flex justify-center z-50 pointer-events-none">
            <div className="bg-gray-800 text-white font-medium text-lg px-8 py-4 rounded-xl shadow-2xl">
              {toastMessage}
            </div>
          </div>
        )}

        {/* Cart Popup */}
        {showCart && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" onClick={() => setShowCart(false)}>
            <div
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col h-full">
                {cartItems.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                    <ShoppingCart size={80} className="text-gray-300 mb-6" />
                    <p className="text-xl font-medium text-gray-600">Your cart is empty</p>
                    <p className="text-gray-500 mt-2">Add items to get started</p>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 py-5 border-b border-gray-100 last:border-0">
                          <div className="bg-gray-100 rounded-lg w-20 h-20 flex-shrink-0">
                            {item.image && (
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 line-clamp-2">{item.title}</h4>
                            <p className="text-orange-600 font-semibold mt-2">
                              {typeof item.price === "number"
                                ? `Rs. ${(item.price * item.quantity).toLocaleString("en-IN")}`
                                : item.price || "Call for Price"}
                            </p>
                            <div className="flex items-center gap-4 mt-4">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 flex items-center justify-center text-xl font-bold transition shadow-sm"
                                disabled={item.quantity <= 1}
                              >
                                −
                              </button>
                              <span className="text-lg font-bold w-16 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center text-xl font-bold transition shadow-sm"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition shadow-sm"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 bg-gray-50 px-6 py-6 mt-auto space-y-5">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-gray-900">Total</span>
                        <span className="text-3xl font-bold text-orange-600">
                          Rs. {totalAmount.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <Link
                        to="/checkout"
                        onClick={() => setShowCart(false)}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl py-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-3"
                      >
                        Proceed to Checkout
                      </Link>
                      <button
                        onClick={() => setShowCart(false)}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-lg py-4 rounded-xl transition shadow-md"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ←←← OFFICIAL WHATSAPP FLOATING BUTTON →→→ */}
        <div className="fixed bottom-6 right-6 z-[1000] md:bottom-8 md:right-8">
          <a
            href="https://wa.me/923347616779?text=Hi%20I%20am%20MR-sufiyan%20CEO%20of%20SS.%20Safety%20Solution.%20How%20can%20I%20help%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110"
            aria-label="Contact us on WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-sm font-medium px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Contact
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;