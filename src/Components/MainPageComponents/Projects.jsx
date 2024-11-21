import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./../../assets/css/projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce website with advanced features.",
    image: require('./../../assets/ProjectImages/project1/image1.png'),
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills and projects.",
    image: require('./../../assets/ProjectImages/project2/image1.png'),
  },
  {
    id: 3,
    title: "Mobile App",
    description: "A cross-platform mobile application for productivity.",
    image: require('./../../assets/ProjectImages/project5/image1.png'),
  },
  {
    id: 4,
    title: "Inventory System",
    description: "A comprehensive inventory management system.",
    image: require('./../../assets/ProjectImages/project4/Picture2.jpg'),
  },
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/project-details/${id}`);
  };

  return (
    <Container className="projects-page mt-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col md={6} lg={4} key={project.id} className="mb-4">
            <Card className="project-card shadow-sm border-0">
              <Card.Img
                variant="top"
                src={project.image}
                className="project-image rounded-top"
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
