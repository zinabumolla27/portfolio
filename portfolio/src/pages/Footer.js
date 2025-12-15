import React from "react";
import { Row, Col, Typography } from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Text } = Typography;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={8} className="footer-col">
            <Text className="footer-text">
              © {new Date().getFullYear()} Zinabu
            </Text>
          </Col>

          <Col xs={24} md={8} className="footer-col">
            <Text className="footer-text">Powered by Zinabu Molla </Text>
          </Col>

          <Col xs={24} md={8} className="footer-col social-icons">
            <a href="mailto:zinabu@example.com" aria-label="Email">
              <MailOutlined />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinOutlined />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubOutlined />
            </a>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
