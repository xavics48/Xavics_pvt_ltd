import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./../../assets/css/team.css";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Web Developer",
    image: "./../assets/alice.jpg",
    description: "Specializes in creating dynamic and responsive web applications.",
  },
  {
    name: "Mark Stevens",
    role: "App Developer",
    image: "./../assets/mark.jpg",
    description: "Expert in developing high-performance mobile apps for iOS and Android.",
  },
  {
    name: "Emily Clarke",
    role: "UI/UX Designer",
    image: "./../assets/emily.jpg",
    description: "Passionate about designing stunning user experiences.",
  },
  {
    name: "John Doe",
    role: "Project Manager",
    image: "./../assets/john.jpg",
    description: "Efficiently manages teams and ensures timely project delivery.",
  },
  {
    name: "Sophia Lee",
    role: "Content Creator",
    image: "./../assets/sophia.jpg",
    description: "Creates engaging content for web and marketing materials.",
  },
  {
    name: "David Brown",
    role: "E-Commerce Specialist",
    image: "./../assets/david.jpg",
    description: "Skilled in optimizing e-commerce platforms for better sales.",
  },
  {
    name: "Isabella Miller",
    role: "QA Tester",
    image: "./../assets/isabella.jpg",
    description: "Ensures top-notch quality by rigorous application testing.",
  },
];

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="team-page"
    >
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="team-title"
            >
              Meet Our Team
            </motion.h2>
            <p className="team-description">
              Get to know the professionals behind our success.
            </p>
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="team-card">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="team-name">{member.name}</Card.Title>
                    <Card.Subtitle className="team-role">
                      {member.role}
                    </Card.Subtitle>
                    <Card.Text className="team-description">
                      {member.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Team;
