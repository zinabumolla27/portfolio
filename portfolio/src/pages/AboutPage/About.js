import React, { useState } from "react";
import "./About.css";
import { Button, Modal, Typography, Timeline, Tag } from "antd";
import {
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  TrophyOutlined,
  ToolOutlined,
  TeamOutlined,
  StarFilled,
  UserOutlined,
  LinkedinOutlined,
  ShareAltOutlined,
  PrinterOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const experience = [
    {
      period: "March 17, 2025 - Present",
      position: "System Analyst (ERP Systems)",
      company: "Guba Technology",
      location: "Addis Ababa",
    },

    {
      period: "Jun 2023 - Jul 2024",
      position: "Information Technology Expert",
      company: "Trade Office",
      location: "Amhara region",
    },
    {
      period: "Jul 2022 - Dec 2022",
      position: "Quality Assurance Officer & Teaching",
      company: "Mslg College",
      location: "Addis Ababa",
    },
  ];

  const education = {
    degree: "BSc in Software Engineering",
    university: "Adigrat University",
    date: "Dec 29, 2021",
    gpa: "3.49 CGPA",
  };

  return (
    <div className="about-page">
      {/* Enhanced Animated Background */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>

      {/* Header Section */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Title level={1} className="about-title">
          About Me
        </Title>
        <div className="title-underline"></div>
        <Paragraph className="header-subtitle">
          Software Engineer & Business Analyst
        </Paragraph>
      </motion.div>

      {/* Main Content */}
      <div className="about-content">
        {/* Profile Card */}
        <motion.div
          className="profile-card"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-header">
            <div className="avatar-container">
              <div className="avatar-circle">
                <div className="avatar-initials">ZM</div>
              </div>
              <div className="online-indicator"></div>
            </div>
            <div className="profile-info">
              <Title level={2} className="profile-name">
                Zinabu Molla Taddesse
              </Title>
              <Text className="profile-title">
                Frontend Developer & ERP Specialist
              </Text>

              <div className="contact-info">
                <div className="contact-item">
                  <MailOutlined />
                  <span style={{ color: "black" }}>
                    zinabumolla27@gmail.com
                  </span>
                </div>
                <div className="contact-item">
                  <PhoneOutlined />
                  <span style={{ color: "black" }}>
                    +251929260805 | +251912847687
                  </span>
                </div>
                <div className="contact-item">
                  <EnvironmentOutlined />
                  <span style={{ color: "black" }}>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Button
              type="primary"
              className="resume-button"
              icon={<DownloadOutlined />}
              size="large"
              onClick={showModal}
            >
              View Resume
            </Button>
            <Button
              className="contact-button"
              size="large"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="content-section"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Experience Timeline */}
          <div className="experience-card">
            <Title level={3} className="section-title">
              <CalendarOutlined /> Professional Experience
            </Title>
            <Timeline
              items={experience.map((exp, index) => ({
                color: index === 0 ? "#667eea" : "#764ba2",
                children: (
                  <div className="timeline-item">
                    <Text strong className="timeline-period">
                      {exp.period}
                    </Text>
                    <Title level={5} className="timeline-position">
                      {exp.position}
                    </Title>
                    <Text className="timeline-company">
                      {exp.company} • {exp.location}
                    </Text>
                  </div>
                ),
              }))}
            />
          </div>
        </motion.div>
      </div>
      {/* Education - This card will align left */}
      <div className="education-card">
        <Title level={3} className="section-title">
          <TrophyOutlined /> Education
        </Title>
        <div className="education-item">
          <div className="education-header">
            <Text strong className="education-degree">
              {education.degree}
            </Text>
            <Tag color="blue">{education.gpa}</Tag>
          </div>
          <Text className="education-university">{education.university}</Text>
          <br />
          <Text type="secondary" className="education-date">
            {education.date}
          </Text>
        </div>
      </div>
      {/* Resume Modal */}
      <Modal
        title={
          <div className="modal-header">
            <div className="modal-title-content">
              <Title level={2} className="modal-main-title">
                Curriculum Vitae
              </Title>
              <Text className="modal-subtitle">Zinabu Molla Taddesse</Text>
              <div className="modal-tagline">
                <Tag icon={<BookOutlined />} color="blue">
                  Software Engineer
                </Tag>
                <Tag icon={<TrophyOutlined />} color="green">
                  Business Analyst
                </Tag>
                <Tag icon={<CalendarOutlined />} color="purple">
                  3+ Years Experience
                </Tag>
              </div>
            </div>
            <div className="modal-avatar">
              <div className="modal-avatar-circle">
                <div className="modal-avatar-initials">ZM</div>
              </div>
            </div>
          </div>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <div key="footer" className="modal-footer">
            <Button
              key="print"
              icon={<PrinterOutlined />}
              size="large"
              className="print-button"
            >
              Print
            </Button>
            <Button
              key="share"
              icon={<ShareAltOutlined />}
              size="large"
              className="share-button"
            >
              Share
            </Button>
            <Button
              key="download"
              type="primary"
              icon={<DownloadOutlined />}
              size="large"
              className="download-button"
            >
              Download PDF
            </Button>
          </div>,
        ]}
        width={1000}
        className="resume-modal"
        styles={{
          body: {
            padding: "0",
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          },
        }}
      >
        <div className="resume-preview">
          {/* Header Section */}
          <div className="resume-header">
            <div className="resume-personal-info">
              <div className="contact-info-grid">
                <div className="contact-item">
                  <MailOutlined className="contact-icon" />
                  <span>zinabumolla27@gmail.com</span>
                </div>
                <div className="contact-item">
                  <PhoneOutlined className="contact-icon" />
                  <span>+251929260805</span>
                </div>
                <div className="contact-item">
                  <EnvironmentOutlined className="contact-icon" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="contact-item">
                  <LinkedinOutlined className="contact-icon" />
                  <span>linkedin.com/in/zinabu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-content">
            {/* Professional Summary */}
            <div className="resume-section">
              <div className="section-header">
                <UserOutlined className="section-icon" />
                <Title level={4} className="section-title">
                  Professional Summary
                </Title>
              </div>
              <div className="summary-content">
                <Paragraph className="summary-text">
                  Passionate Software Engineer with a Bachelor's degree in
                  Software Engineering and 3+ years of professional experience
                  in full-stack development, quality assurance, and business
                  analysis. Currently specializing in ERP systems at Guba
                  Technology with expertise in modern web technologies and
                  system architecture.
                </Paragraph>
              </div>
            </div>

            {/* Experience Section */}
            <div className="resume-section">
              <div className="section-header">
                <CalendarOutlined className="section-icon" />
                <Title level={4} className="section-title">
                  Professional Experience
                </Title>
              </div>
              <div className="experience-timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-left">
                        <Text strong className="experience-position">
                          {exp.position}
                        </Text>
                        <Text className="experience-company">
                          {exp.company}
                        </Text>
                      </div>
                      <div className="experience-right">
                        <Tag className="experience-period">{exp.period}</Tag>
                        <Text className="experience-location">
                          {exp.location}
                        </Text>
                      </div>
                    </div>
                    <div className="experience-details">
                      <ul className="experience-bullets">
                        <li>
                          Guided learners through real ERP workflows, including
                          HR, finance, and inventory modules.
                        </li>
                        and maintained enterprise-level applications
                        <li>
                          Provided hands-on exercises to practice system
                          configuration and process automation.
                        </li>
                        <li>
                          Helped trainees understand best practices for managing
                          business processes efficiently.
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="resume-section">
              <div className="section-header">
                <TrophyOutlined className="section-icon" />
                <Title level={4} className="section-title">
                  Education
                </Title>
              </div>
              <div className="education-item enhanced">
                <div className="education-header">
                  <div className="education-left">
                    <Text strong className="education-degree">
                      {education.degree}
                    </Text>
                    <Text className="education-university">
                      {education.university}
                    </Text>
                  </div>
                  <div className="education-right">
                    <Tag color="blue" className="gpa-tag">
                      {education.gpa}
                    </Tag>
                    <Text className="education-date">{education.date}</Text>
                  </div>
                </div>
                <div className="education-achievements">
                  <div className="achievement-item">
                    <StarFilled className="achievement-icon" />
                    <span>Graduated with Honors</span>
                  </div>
                  <div className="achievement-item">
                    <TeamOutlined className="achievement-icon" />
                    <span>Student Leadership Award</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="resume-section">
              <div className="section-header">
                <ToolOutlined className="section-icon" />
                <Title level={4} className="section-title">
                  Technical Skills
                </Title>
              </div>
              <div className="skills-grid">
                <div className="skill-category">
                  <Text strong className="skill-category-title">
                    Frontend
                  </Text>
                  <div className="skill-tags">
                    <Tag color="blue">React</Tag>
                    <Tag color="blue">JavaScript</Tag>
                    <Tag color="blue">HTML/CSS</Tag>
                    <Tag color="blue">Ant Design</Tag>
                  </div>
                </div>
                <div className="skill-category">
                  <Text strong className="skill-category-title">
                    Backend
                  </Text>
                  <div className="skill-tags">
                    <Tag color="green">Node.js</Tag>
                  </div>
                </div>
                <div className="skill-category">
                  <Text strong className="skill-category-title">
                    Database
                  </Text>
                  <div className="skill-tags">
                    <Tag color="orange">MySQL</Tag>
                    <Tag color="orange">MongoDB</Tag>
                    <Tag color="orange">PostgreSQL</Tag>
                  </div>
                </div>
                <div className="skill-category">
                  <Text strong className="skill-category-title">
                    Tools
                  </Text>
                  <div className="skill-tags">
                    <Tag color="purple">Git</Tag>
                    <Tag color="purple">Figma</Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default About;
