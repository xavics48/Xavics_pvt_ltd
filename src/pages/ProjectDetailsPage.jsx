import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./../assets/css/projectdetails.css";

const projects = [
  {
    id: 1,
    title: "Unilancers Web Application",
    scope: "Online Frrelance Platform for students",
    description: "This platform is a dedicated freelance marketplace designed exclusively for university students. It connects clients with talented student freelancers, allowing clients to post project requirements and receive competitive bids. Once a project is awarded, the payment is securely handled through an escrow system, ensuring fairness and transparency. The platform supports popular local payment methods like EasyPaisa and JazzCash, making it accessible and user-friendly. By empowering students to gain professional experience and earn income, this platform bridges the gap between academia and real-world opportunities.",
    technologies: ["React", "Django", "MySQL", "Bootstrap"],
    images: [
      require('./../assets/ProjectImages/project1/image2.png'),
      require('./../assets/ProjectImages/project1/image3.png'),
      require('./../assets/ProjectImages/project1/image4.png'),
    ],
  },
  {
    id: 2,
    title: "Car Pulse Website",
    scope: "Car Wash website for car wash services",
    description: "A professional and user-friendly website designed for car wash businesses to streamline their services and enhance customer convenience. The platform offers features like online appointment scheduling, service package selection, and secure payment options. Customers can browse various car wash packages, learn about the services provided, and book appointments with ease. With an attractive and responsive design, the website ensures seamless navigation across all devices, making it a perfect digital solution for modern car wash businesses.",
    technologies: ["React", "Firebase", "Css", "Bootstrap"],
    images: [
      require('./../assets/ProjectImages/project2/image2.png'),
      require('./../assets/ProjectImages/project2/image4.png'),
      require('./../assets/ProjectImages/project2/image3.png'),
    ],
  },
  {
    id: 3,
    title: "Football Academy Website",
    scope: "website for football session academy",
    description: "A dynamic and engaging website designed for a football academy to showcase its programs, schedules, and achievements. The platform provides detailed information about training sessions, coaching staff, and facilities, along with an easy-to-use online registration system for new players. Parents and players can access session calendars, view updates, and explore membership options. With a responsive and visually appealing design, the website reflects the academy's passion for football and commitment to nurturing talent.",
    technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
    images: [
      require('./../assets/ProjectImages/project5/image2.png'),
      require('./../assets/ProjectImages/project5/image3.png'),
      require('./../assets/ProjectImages/project5/image4.png'),
    ],
  },
  {
    id: 4,
    title: "Shiftease Project",
    scope: "A project For Shifting and decorating Companies ",
    description: "An innovative platform connecting companies with customers seeking services like home shifting, interior decorating, and item renting. The platform enables companies to list their services while providing customers with a seamless browsing and booking experience. Users can compare service options, check reviews, and make secure bookings, all in one place. With features like real-time updates, user-friendly navigation, and a responsive design, this project simplifies complex tasks, making it easier for customers to find reliable service providers and for companies to reach their target audience.",
    technologies: ["React", "Django", "Flutter", "MySQL"],
    images: [
      require('./../assets/ProjectImages/project4/Picture3.jpg'),
      require('./../assets/ProjectImages/project4/Picture5.jpg'),
      require('./../assets/ProjectImages/project4/Picture6.jpg'),
    ],
  },
];

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <Container className="project-details-page mt-5">
      <h1 className="text-center mb-4">{project.title}</h1>
      <Row className="mb-4">
        {project.images.map((image, index) => (
          <Col md={4} key={index}>
            <Image src={image} alt={`Project ${index + 1}`} fluid className="project-detail-image" />
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={6}>
          <h4>Scope</h4>
          <p>{project.scope}</p>
        </Col>
        <Col md={6}>
          <h4>Technologies Used</h4>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h4>Description</h4>
          <p>{project.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetailsPage;
