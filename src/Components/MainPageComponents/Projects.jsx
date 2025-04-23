import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./../../assets/css/projects.css";

const projects = [
  {
    id: 1,
    title: "Unilancers",
    description:
      "Unilancers is a freelance marketplace empowering university students to connect with clients, showcase skills, and earn while studying.",
    image: require("./../../assets/ProjectImages/project1/image1.png"),
  },
  {
    id: 2,
    title: "DriveUni",
    description: `DriveUni is a bus tracking app enhancing safe, informed travel for students while streamlining admin and driver operations.`,
    image: require("./../../assets/ProjectImages/project8/1.png"),
  },
  {
    id: 3,
    title: "Football Academy Website",
    description:
      "A responsive website for managing football programs, schedules, and player registrations, showcasing training sessions and facilities.",
    image: require("./../../assets/ProjectImages/project5/image1.png"),
  },
  {
    id: 4,
    title: "Shift-Ease",
    description:
      "Shift Ease is a user-friendly platform streamlining house shifting and property rental services by connecting users with reliable providers.",
    image: require("./../../assets/ProjectImages/project4/Picture1.jpg"),
  },
  {
    id: 5,
    title: "Home Ease App",
    description:
      "Developed an all-in-one housing app offering rentals, moving services, and home decor solutions with a seamless user experience.",
    image: require("./../../assets/ProjectImages/project6/1.png"),
  },
  {
    id: 6,
    title: "Auth System",
    description:
      "Developed a secure, scalable authentication application using Flutter and Django with email credentials and social login integrations.",
    image: require("./../../assets/ProjectImages/project7/1.jpeg"),
  },
];

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
         <Col md={6} lg={4} key={project.id} className="mb-4 d-flex align-items-stretch">
         <motion.div
           className="w-100" // important: ensures motion div fills the column
           initial="offscreen"
           whileInView="onscreen"
           viewport={{ once: true, amount: 0.3 }}
           variants={cardVariants}
           whileHover={{ scale: 1.01 }}
           whileTap={{ scale: 0.97 }}
         >
           <Card className="project-card shadow-sm border-0 h-100">
             <Card.Img
               variant="top"
               src={project.image}
               className="project-image rounded-top"
               loading="lazy"
             />
             <Card.Body className="text-center d-flex flex-column">
               <Card.Title>{project.title}</Card.Title>
               <Card.Text className="text-muted flex-grow-1">
                 {project.description}
               </Card.Text>
               <Button
  variant="outline-primary"
  onClick={() => handleViewDetails(project.id)}
  className="align-self-center mt-3"
>
  View Details
</Button>
             </Card.Body>
           </Card>
         </motion.div>
       </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
