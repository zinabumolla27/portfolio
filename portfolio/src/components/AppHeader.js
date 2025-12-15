import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "./AppHeader.css";

function AppHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useNavigate();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "/", label: <span className="menu-label">Home</span> },
    { key: "/about", label: <span className="menu-label">About Me</span> },
    { key: "/projects", label: <span className="menu-label">Projects</span> },
    { key: "/skill", label: <span className="menu-label">Skills</span> },
    { key: "/contact", label: <span className="menu-label">Contact</span> },
  ];

  return (
    <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Premium Logo */}
        <div
          className="logo"
          onClick={() => {
            navigate("/");
            setOpen(false);
          }}
        >
          <div className="logo-content">
            <span className="logo-glow"></span>
            <span className="logo-text">Zinabu Molla</span>
            <span className="logo-badge">Portfolio</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <Menu
          className="desktop-menu"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-overlay ${open ? "active" : ""}`}
          onClick={() => setOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${open ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <span className="logo-glow-small"></span>
              ZM
            </div>
            <CloseOutlined
              className="close-icon"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="mobile-menu-content">
            <Menu
              mode="vertical"
              selectedKeys={[location.pathname]}
              items={menuItems}
              onClick={({ key }) => {
                navigate(key);
                setOpen(false);
              }}
            />
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div className="hamburger-inner">
            {open ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
