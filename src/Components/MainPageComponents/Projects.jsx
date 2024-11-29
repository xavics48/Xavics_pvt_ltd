import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./../../assets/css/projects.css";

const projects = [
  {
    id: 1,
    title: "Unilancers",
    description: "Unilancers is a freelance marketplace empowering university students to connect with clients, showcase skills, and earn while studying.",
    image: require('./../../assets/ProjectImages/project1/image1.png'),
  },
  {
    id: 2,
    title: "DriveUni",
    description: `DriveUni is a bus tracking app enhancing safe, informed travel for students while
streamlining admin and driver operations.`,
    image: require('./../../assets/ProjectImages/project8/1.png'),
  },
  {
    id: 3,
    title: "Football Academy Website",
    description: "A responsive website for managing football programs, schedules, and player registrations, showcasing training sessions and facilities.",
    image: require('./../../assets/ProjectImages/project5/image1.png'),
  },
  {
    id: 4,
    title: "Shift-Ease",
    description: "Shift Ease is a user-friendly platform streamlining house shifting and property rental services by connecting users with reliable providers.",
    image: require('./../../assets/ProjectImages/project4/Picture1.jpg'),
  },
  {
    id: 5,
    title: "Home Ease App",
    description: "Developed an all-in-one housing app offering rentals, moving services, and home decor solutions with a seamless user experience.",
    image: require('./../../assets/ProjectImages/project6/1.png'),
  },
  {
    id: 6,
    title: "Auth System",
    description: "Developed a secure, scalable authentication application using Flutter and Django with email credentials and social login integrations.",
    image: require('./../../assets/ProjectImages/project7/1.jpeg'),
  },
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/project-details/${id}`);
  };

  return (
    <Container className="projects-page mt-5">
      <h1 className="text-center mb-4">Our Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col md={6} lg={4} key={project.id} className="mb-4">
            <Card className="project-card shadow-sm border-0">
              <Card.Img
                variant="top"
                src={project.image}
                className="project-image rounded-top"
                loading="lazy"
              />
              <Card.Body className="text-center">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="text-muted">
                  {project.description}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => handleViewDetails(project.id)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
