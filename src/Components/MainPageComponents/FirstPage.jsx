// FirstPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, Container, Button} from "react-bootstrap";
import { motion } from "framer-motion";
// import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud } from "react-icons/fa";
import "./../../assets/css/FirstPage.css";
import background1 from './../../assets/images/background1.jpg';
import background2 from './../../assets/images/back1.jpg';
import background3 from './../../assets/images/back2.jpg';
import background4 from './../../assets/images/back3.webp';
import background5 from './../../assets/images/video.mp4';
const slides = [
  {
    image: background1,
    title: "Innovate with Xavics",
    description: "Bringing your ideas to life with cutting-edge technology, tailored solutions, and strategic innovation.",
     buttonText: "Learn More",
    buttonLink: "/services"
  },
  {
    image: background4,
    title: "Web Development Excellence",
    description: "Building robust, scalable web platforms that seamlessly connect your business to the world and drive meaningful engagement.",
    buttonText: "Our Web Work",
    buttonLink: "/web-portfolio"
  },
  {
    image: background3,
    title: "Mobile Mastery",
    description: "Crafting seamless, user-centric mobile experiences that empower users on the go and fuel business growth.",
     buttonText: "Explore Apps",
    buttonLink: "/mobile-portfolio"
  },
  {
    image: background2,
    title: "AI & Desktop Innovation",
    description: "Merging smart automation with powerful desktop solutions to drive business intelligence, accelerate workflows, and enhance decision-making.",
     buttonText: "AI Solutions",
    buttonLink: "/ai-desktop"
  },
  {
    // The new video slide
    video: background5,
    title: "Journey with Us into the Future",
    description: "Embark on a transformative journey into tomorrow's digital landscape, where innovation meets opportunity for limitless growth.",
  buttonText: "Contact Us",
    buttonLink: "/contact"
  }
];



const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="first-page">
      <Carousel fade indicators={true} controls={false} pause={false}> 
      {slides.map((slide, index) => (
  <Carousel.Item key={index} className="carousel-item" interval={slide.image ?5000 : 15000}>
    <div className="position-relative h-100">
      {slide.image ? (
        // Render an image slide
        <motion.img
          className="carousel-img w-100"
          src={slide.image}
          alt={slide.title}
          loading="lazy"
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={{ duration: 24, ease: "linear" }}
        />
      ) : (
        // Render a video slide
        <motion.video
          className="carousel-img w-100"
          src={slide.video}
          autoPlay
          loop
          muted
          playsInline
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
        />
      )}
              <div className="overlay"></div>

              <Container className="text-container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-description">{slide.description}</p>
                  <Button
            onClick={() => navigate(slide.buttonLink)}
            className="cta-button"
          >
            {slide.buttonText}
          </Button>
                  
                </motion.div>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

    
    </div>
  );
};

export default FirstPage;