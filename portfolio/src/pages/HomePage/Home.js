import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import { motion } from "framer-motion";
import {
  DownloadOutlined,
  FolderOpenOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./Home.css";
import z from "../../Assets/z.jpg";
import Projects from "../ProjectsPage/Projects";
import Skill from "../SkillsPage/Skill";
import About from "../AboutPage/About";
import Contact from "../ContactPage/Contact";

const { Title, Text } = Typography;
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Row align="middle" justify="center" className="home-row">
          <Col xs={24} md={12} className="home-text">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Title level={1} className="name-title" style={{ color: "#fff" }}>
                Hi, I'm <span className="highlight">Zinabu</span>
              </Title>
              <Text className="subtitle">
                A passionate <span className="role">Software Engineer</span> who
                loves building modern and responsive applications.
              </Text>

              <Space
                size="middle"
                direction="vertical"
                style={{ marginTop: 20 }}
              >
                <Button
                  type="primary"
                  size="large"
                  className="hire-btn"
                  icon={<MailOutlined />}
                  href="/contact"
                >
                  Hire Me
                </Button>

                <Button
                  size="large"
                  className="resume-btn"
                  icon={<DownloadOutlined />}
                  href="/resume.pdf"
                  download="Zinabu_Resume.pdf"
                >
                  Download Resume
                </Button>

                <Button
                  size="large"
                  className="projects-btn"
                  icon={<FolderOpenOutlined />}
                  href="/projects"
                >
                  View Projects
                </Button>
              </Space>
            </motion.div>
          </Col>

          <Col xs={24} md={12} className="home-image">
            <motion.img
              src={z}
              alt="Zinabu"
              className="profile-img"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </Col>
        </Row>
      </div>
      <Projects />
      <Skill />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
