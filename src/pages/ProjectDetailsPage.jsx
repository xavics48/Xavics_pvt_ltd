import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./../assets/css/projectdetails.css";


const formatTextWithBold = (text) => {
  return text
    .split("\n") // Split text into lines
    .map((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        // Bold the text before the colon and format as a line
        const beforeColon = line.slice(0, colonIndex).trim();
        const afterColon = line.slice(colonIndex + 1).trim();
        return `<strong>${beforeColon}:</strong> ${afterColon}`;
      }
      return line.trim(); // Return lines without colons as is
    })
    .filter(Boolean) // Remove empty lines
    .join("<br>"); // Join the lines with line breaks
};



const projects = [
  {
    id: 1,
    title: "Unilancers Web Application",
    scope: "Unilancers is the ideal platform for students looking to kickstart their freelance careers and clients seeking affordable, high- quality solutions tailored to their needs.",
    description: `Unilancers is a specialized platform designed to bridge the gap between talented university students
and businesses or individuals in need of high-quality freelance services. This dynamic marketplace
supports students in building their professional portfolios, gaining industry experience, and earning
income while studying, all within a secure and collaborative ecosystem.
Features:
1. User-Friendly Interface:
o A responsive design ensures effortless navigation for both freelancers and clients.
o Separate dashboards for students and clients simplify project and service
management.
2. Diverse Service Categories:
o Covers a wide range of fields, including web development, graphic design, content
writing, and app development.
o Offers visually appealing, card-based layouts to showcase services with detailed
descriptions.
3. Gigs and Portfolios:
o Students can create and manage gigs, showcasing their expertise, pricing, and
sample work.
o Portfolios enable freelancers to highlight past projects, certifications, and skills,
attracting potential clients.
4. Secure Transactions:
o Integrated payment gateways ensure reliable and timely transactions.
o Offers milestone-based payment options for better project management and
transparency.
5. Collaboration Tools:
o Real-time messaging for effective communication between clients and freelancers.
o Task tracking and project updates to keep all stakeholders informed about progress.
Mission:
Unilancers strives to empower university students by providing opportunities to develop professional
skills, earn income, and build industry experience while studying. For clients, it offers access to a
motivated and affordable talent pool, delivering fresh ideas and quality work.`,
    technologiesDetails:`
• Front-End: React.js for a seamless, responsive user experience.
• Back-End: Django for managing data, user authentication, and API development.
• Database: MongoDB for secure and scalable data storage.
• Payment Integration: Stripe or PayPal for secure payment processing.
• Messaging: WebSockets for real-time communication.
• Hosting: AWS or Google Cloud for reliability and scalability.`,
    images: [
      require('./../assets/ProjectImages/project1/image1.png'),
      require('./../assets/ProjectImages/project1/image2.png'),
      require('./../assets/ProjectImages/project1/image3.png'),
      require('./../assets/ProjectImages/project1/image4.png'),
      require('./../assets/ProjectImages/project1/image5.png'),
      require('./../assets/ProjectImages/project1/image6.png'),
    ],
  },
  {
    id: 2,
    title: "DriveUni",
    scope: "DriveUni simplifies and secures university bus transportation, ensuring safe, informed, and efficient travel for all stakeholders, including students, drivers, and admins.",
    description: `DriveUni is a comprehensive mobile application aimed at optimizing the transportation experience
for students while ensuring operational efficiency for drivers and admins. This app bridges
communication gaps and introduces a secure and reliable platform for managing university bus
services.
Features:
1. Real-Time Bus Tracking:
o Provides live tracking of student buses, allowing students to monitor their bus
location and estimated arrival time.
o Ensures safety and reduces wait times through accurate route mapping.
2. Driver Module:
o Allows drivers to view assigned routes and bus schedules.
o Tracks driver attendance and daily activities, ensuring accountability.
o Provides a communication channel for drivers to report issues to the admin.
3. Admin Module:
o Empowers admins to manage the entire app ecosystem, including adding and
assigning drivers to buses.
o Monitors driver attendance, bus schedules, and route details.
o Sends notifications or messages to students and drivers for important updates.
4. Student Features:
o Offers bus tracking for informed travel planning.
o Ensures safer commutes with location monitoring and driver accountability.
o Facilitates communication with admins in case of issues or emergencies.`,
    technologiesDetails: `• Front-End: Flutter for an intuitive, cross-platform user interface.
• Back-End: Firebase for real-time database operations, authentication, and cloud functions.
• Maps Integration: Google Maps API for live tracking and route mapping.
• Notification System: Firebase Cloud Messaging for alerts and updates.
• Attendance Tracking: Integration with a database to log and visualize attendance records.`,
    images: [
      require('./../assets/ProjectImages/project8/2.png'),
      require('./../assets/ProjectImages/project8/3.png'),
      require('./../assets/ProjectImages/project8/4.png'),
      require('./../assets/ProjectImages/project8/5.png'),
      require('./../assets/ProjectImages/project8/6.png'),
      require('./../assets/ProjectImages/project8/7.png'),
    ],
  },
  {
    id: 3,
    title: "Football Academy Website",
    scope: "Website for a football academy to manage sessions and activities",
    description: `A dynamic and engaging website designed for a football academy to showcase its programs, schedules, and achievements. The platform provides detailed information about training sessions, coaching staff, and facilities, along with an easy-to-use online registration system for new players. Parents and players can access session calendars, view updates, and explore membership options. With a responsive and visually appealing design, the website reflects the academy's passion for football and commitment to nurturing talent.`,
    technologiesDetails: `
    Front-End: React for creating a user-friendly and responsive interface.
    Back-End: Node.js for handling server-side logic and APIs.
    Database: MongoDB for efficient data storage and retrieval.
    UI Framework: Bootstrap for a clean and consistent design.
  `,
    images: [
      require('./../assets/ProjectImages/project5/image2.png'),
      require('./../assets/ProjectImages/project5/image3.png'),
      require('./../assets/ProjectImages/project5/image4.png'),
    ],
  },
  {
    id: 4,
    title: "Shiftease Project",
    scope: "Shift Ease redefines house shifting and rental experiences by providing a trustworthy and efficient platform, helping users save time, reduce stress, and focus on settling into their new homes.",
    description: `Shift Ease is a dynamic and user-friendly platform designed to streamline the complex
processes of relocating and renting properties. It serves as an all-in-one solution to cater to
diverse user needs, ensuring efficiency, affordability, and convenience.
Features:
1. House Shifting Services:
o Comprehensive relocation solutions, including packing, loading, and transport.
o Integration with reliable and verified service providers for a stress-free
experience.
o Real-time tracking of shifting processes for transparency and ease.
2. Property Rentals:
o Search and filter rental properties by location, budget, and preferences.
o High-quality property listings with photos, descriptions, and direct owner
communication.
o Support for virtual tours to make property selection convenient.
3. Enhanced User Experience:
o Instant cost estimates for shifting and rental services.
o Customer reviews and ratings to ensure trustworthy connections.
o Intuitive interface for seamless navigation and efficient booking.`,
    technologiesDetails: `• Front-End: React.js for creating a responsive and intuitive user interface.
• Back-End: Django for robust data handling, service provider management, and API
development.
• Database: Firebase Realtime Database to manage property listings, user data, and
service records.
• Payment Integration: Stripe for secure online transactions.
• Geolocation Services: Google Maps API for location-based property and service
searches.
• Real-Time Features: Firebase Cloud Messaging for live service updates and
notifications.`,
    images: [
      require('./../assets/ProjectImages/project4/Picture2.jpg'),
      require('./../assets/ProjectImages/project4/Picture3.jpg'),
      require('./../assets/ProjectImages/project4/Picture4.jpg'),
      require('./../assets/ProjectImages/project4/Picture5.jpg'),
      require('./../assets/ProjectImages/project4/Picture6.jpg'),
      require('./../assets/ProjectImages/project4/Picture7.jpg'),
      require('./../assets/ProjectImages/project4/Picture8.jpg'),
      require('./../assets/ProjectImages/project4/Picture9.jpg'),
      require('./../assets/ProjectImages/project4/Picture10.jpg'),
    ],
  },
  {
    id: 5,
    title: "Home Ease App",
    scope: "This project demonstrates expertise in developing user-centric, scalable applications that simplify complex tasks through intuitive design and robust technical architecture.",
    description: `
This project is a comprehensive housing application designed to cater to diverse housing needs.
Features:
1. Rental Listings:
   o Advanced filtering and search options for rentals by location, budget, and property type.
   o Interactive map view for property exploration.
   o Direct communication with property owners through in-app messaging.
2. Moving Services:
   o Integration with local moving companies.
   o Scheduling and tracking moving services.
   o Cost estimations and customizable moving plans.
3. Home Decor Marketplace:
   o Catalog of furniture, decor items, and interior design services.
   o Augmented reality (AR) to visualize decor in real time.
   o Discounts and promotions for premium members.
`,
    technologiesDetails: `
Front-End: Flutter for a seamless cross-platform mobile experience.
Back-End: Firebase for user authentication, database management, and API integration.
Payment Integration: Stripe for secure payment processing.
Mapping and Geolocation: Google Maps API for property location visualization.
Messaging: Firebase Cloud Messaging for real-time communication.
    `,
    images: [
      require('./../assets/ProjectImages/project6/1.png'),
      require('./../assets/ProjectImages/project6/2.png'),
      require('./../assets/ProjectImages/project6/3.png'),
      require('./../assets/ProjectImages/project6/4.png'),
      require('./../assets/ProjectImages/project6/5.png'),
      require('./../assets/ProjectImages/project6/6.png'),
      require('./../assets/ProjectImages/project6/7.png'),
      require('./../assets/ProjectImages/project6/8.png'),
    ],
  },
  {
    id: 6,
    title: "Auth System",
    scope: "This project highlights expertise in cross-platform development, API integration, and secure user authentication, tailored to meet the needs of modern digital platforms. ",
    images: [ require('./../assets/ProjectImages/project7/1.jpeg')],
    description: `This authentication application is a robust and secure platform designed to provide seamless user
login and registration experiences. Combining the power of a Flutter-based front-end with a Djangopowered back-end, the app ensures cross-platform compatibility and high performance.
Features:
• Custom Email-Based Authentication:
• Users can register and log in using custom email credentials.
• Provides a secure mechanism for password management and account recovery.
• Social Login Integrations:
• Supports login via Google, Facebook, and Apple accounts.
• Simplifies user onboarding and offers multiple login options for convenience.
• API Development with Djoser:
• Utilizes Djoser for streamlined API integration.
• Handles token-based authentication for secure and scalable workflows.
• Data Security and Scalability:
• Ensures robust security with encrypted user credentials and sensitive data.
• Designed for scalability to accommodate growing user bases.
• Cross-Platform Functionality:
• The Flutter-based front-end ensures compatibility across Android and iOS devices.
• Offers a consistent and intuitive user experience on all platforms.
`,
    
    technologiesDetails: `Technologies Used:
• Front-End: Flutter for UI/UX development.
• Back-End: Django for API development and server-side operations.
• Authentication API: Djoser for efficient handling of user authentication.
• Social Login Integrations: OAuth 2.0 for Google, Facebook, and Apple.
• Database: PostgreSQL for secure and reliable data storage.
• Hosting: AWS or Google Cloud for scalable deployment.`,
    
  }
  
  
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
        {(project.images || []).map((image, index) => (
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
          <ul
            className="technologies"
            dangerouslySetInnerHTML={{
              __html: formatTextWithBold(project.technologiesDetails),
            }}
          ></ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h4>Description</h4>
          <div
            
            dangerouslySetInnerHTML={{
              __html: formatTextWithBold(project.description),
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetailsPage;
