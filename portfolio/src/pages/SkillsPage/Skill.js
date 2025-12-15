import React from "react";
import "./Skill.css";
import { Progress, Card, Row, Col } from "antd";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import {
  SmileOutlined,
  TeamOutlined,
  BulbOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const skills = [
  { name: "React.js", level: 100, icon: <SiReact color="#61DBFB" size={22} /> },
  {
    name: "JavaScript",
    level: 100,
    icon: <SiJavascript color="#F7DF1E" size={22} />,
  },
  {
    name: "HTML & CSS",
    level: 100,
    icon: (
      <>
        <SiHtml5 color="#E34F26" size={22} />{" "}
        <SiCss3 color="#1572B6" size={22} />
      </>
    ),
  },
  {
    name: "Node.js",
    level: 60,
    icon: <SiNodedotjs color="#83CD29" size={22} />,
  },
  { name: "Github", level: 100, icon: <SiGithub color="#181717" size={22} /> },
  {
    name: "Linux (Ubuntu)",
    level: 100,
    icon: <SiLinux color="#FCC624" size={22} />,
  },
];

const softSkills = [
  {
    name: "Communication",
    icon: <SmileOutlined style={{ fontSize: 20, color: "#1890ff" }} />,
  },
  {
    name: "Teamwork",
    icon: <TeamOutlined style={{ fontSize: 20, color: "#52c41a" }} />,
  },
  {
    name: "Problem Solving",
    icon: <BulbOutlined style={{ fontSize: 20, color: "#faad14" }} />,
  },
  {
    name: "Leadership",
    icon: <SolutionOutlined style={{ fontSize: 20, color: "#eb2f96" }} />,
  },
];

const Skill = () => {
  return (
    <div className="skill-unique-page">
      {/* Technical Skills */}
      <div className="skill-unique-header">
        <h1>My Skills</h1>
        <p>Here are some technologies I work with and my proficiency levels.</p>
      </div>

      <Row gutter={[16, 16]} className="skill-unique-grid">
        {skills.map((skill) => (
          <Col xs={24} sm={12} md={8} key={skill.name}>
            <Card className="skill-unique-card" hoverable>
              <h3 className="skill-unique-title">
                <span className="skill-unique-icon">{skill.icon}</span>{" "}
                {skill.name}
              </h3>
              <Progress
                percent={skill.level}
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Soft Skills */}
      <div className="skill-unique-header skill-unique-soft-header">
        <h1>Soft Skills</h1>
        <p>Alongside technical expertise, here are my personal strengths.</p>
      </div>

      <Row gutter={[16, 16]} className="skill-unique-grid">
        {softSkills.map((skill) => (
          <Col xs={24} sm={12} md={6} key={skill.name}>
            <Card className="skill-unique-soft-card" hoverable>
              <h3 className="skill-unique-title">
                <span className="skill-unique-icon">{skill.icon}</span>{" "}
                {skill.name}
              </h3>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skill;
