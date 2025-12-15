import React from "react";
import "./Projects.css";
import { Card, Row, Col, Button } from "antd";
import { motion } from "framer-motion";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";

import bty from "../../Assets/bty.png";
import erp from "../../Assets/erp.png";
import erp1 from "../../Assets/erp1.png";
import erp2 from "../../Assets/erp2.png";
import erp3 from "../../Assets/erp3.png";
import erp4 from "../../Assets/erp4.png";

const projects = [
  {
    title: "BTY Trading Plc Website",
    description: "A modern trading website built with React and Ant Design.",
    image: bty,
    demo: "https://btytradingplc.com",
    github: "https://github.com/zinabumolla27/bty",
  },
  {
    title: "ERP System (DEIC)",
    description:
      "ERP system for hands-on customer training on real business processes. ",
    image: erp,
  },

  {
    title: "ERP System (Ethiotelcom )",
    description:
      "ERP system for hands-on customer training on real business processes.",
    image: erp1,
  },
  {
    title: "ERP System (gift real estate )",
    description:
      "ERP system for hands-on customer training on real business processes.",
    image: erp4,
  },
  {
    title: "ERP System (Sugar Factory )",
    description:
      "ERP system for hands-on customer training on real business processes.",
    image: erp3,
  },
  {
    title: "ERP System (Ethiopian Blood Bank )",
    description:
      "ERP system for hands-on customer training on real business processes.",
    image: erp2,
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>🚀 My Projects</h1>
        <p>Here are some of the projects I’ve recently worked on.</p>
      </motion.div>

      <Row gutter={[24, 24]} className="projects-grid">
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={12} lg={8} key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                hoverable
                cover={
                  <img
                    alt={project.title}
                    src={project.image}
                    className="project-image"
                  />
                }
                className="project-card"
              >
                <Card.Meta
                  title={<span className="project-title">{project.title}</span>}
                  description={
                    <span className="project-description">
                      {project.description}
                    </span>
                  }
                />
                <div className="project-buttons">
                  <Button
                    type="primary"
                    icon={<GlobalOutlined />}
                    href={project.demo}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                  <Button
                    icon={<GithubOutlined />}
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
