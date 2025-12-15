import React, { useState } from "react";
import "./Contact.css";
import { Form, Input, Button, message, Card, Row, Col, Typography } from "antd";
import {
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      message.success("Message sent successfully!");
      setSubmitted(true);
      form.resetFields();
    } catch {
      message.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: "Email",
      content: "zinabumolla27@gmail.com",
      link: "mailto:zinabumolla27@gmail.com",
    },
    {
      icon: <PhoneOutlined />,
      title: "Phone",
      content: "+251 929 260 805",
      link: "tel:+251929260805",
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Location",
      content: "Addis Ababa, Ethiopia",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Response Time",
      content: "Within 24 hours",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedinOutlined />,
      url: "https://linkedin.com",
      color: "#0A66C2",
    },
    {
      icon: <MailOutlined />,
      url: "mailto:zinabumolla27@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <PhoneOutlined />,
      url: "tel:+251929260805",
      color: "#25D366",
    },
  ];

  return (
    <div className="contact-page">
      {/* Background Animation */}
      <div className="contact-background-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <Title level={1}>Let's Start a Conversation</Title>
        <Paragraph>
          Have a project or training need? I'm ready to help.
        </Paragraph>
      </motion.div>

      <Row gutter={[48, 32]} className="contact-content">
        {/* LEFT SIDE */}
        <Col xs={24} lg={8}>
          <Card className="contact-info-card" bordered={false}>
            <Title level={3}>Get in Touch</Title>

            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div className="contact-info-content">
                    <Text strong>{item.title}</Text>
                    <br />
                    {item.link ? (
                      <a
                        href={item.link}
                        className="contact-info-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <Text>{item.content}</Text>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="social-links">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </Card>
        </Col>

        {/* RIGHT SIDE */}
        <Col xs={24} lg={16}>
          <Card className="contact-form-card" bordered={false}>
            {submitted ? (
              <div className="success-message">
                <CheckCircleOutlined />
                <Title level={3}>Message Sent</Title>
                <Button onClick={() => setSubmitted(false)}>
                  Send Another
                </Button>
              </div>
            ) : (
              <Form layout="vertical" form={form} onFinish={onFinish}>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Full Name"
                      name="name"
                      rules={[{ required: true }]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ type: "email", required: true }]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[{ required: true }]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true }]}
                >
                  <TextArea rows={5} />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                  loading={loading}
                  size="large"
                >
                  Send Message
                </Button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
