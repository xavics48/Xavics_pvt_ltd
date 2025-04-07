import React, { useRef } from "react";
import { Box, Text, VStack, HStack, Image, Grid } from "@chakra-ui/react";
// import { FaStar } from "react-icons/fa";

// Function to generate a random rating between 4.0 and 5.0
// const getRandomRating = () => (Math.random() * (5 - 4) + 4).toFixed(1);

const reviews = [
    { name: "Aisha Khan", username: "@aisha_dev", text: "Xavics delivered our app ahead of schedule with clean code and fantastic UI/UX. Truly impressed!", image: "/images/aisha.jpg" },
    { name: "Rohan Mehta", username: "@rohan_mehta", text: "We partnered with Xavics for a custom web solution, and their team was professional, responsive, and highly skilled.", image: "/images/rohan.jpg" },
    { name: "Fatima Sheikh", username: "@fatima.codes", text: "Excellent experience with Xavics! They understood our business needs and translated them into a flawless platform.", image: "/images/fatima.jpg" },
    { name: "Daniel Lee", username: "@daniel_ui", text: "Xavics helped us modernize our legacy system. Their backend knowledge and scalability approach were top-notch.", image: "/images/daniel.jpg" },
    { name: "Neha Patel", username: "@neha_tech", text: "The team at Xavics is creative, supportive, and fast. From ideation to launch, they were with us every step.", image: "/images/neha.jpg" },
    { name: "Imran Siddiqui", username: "@imran_dev", text: "Our e-commerce website was built exactly how we envisioned it. Thanks to Xavics for making it a reality.", image: "/images/imran.jpg" },
    { name: "Emily Roberts", username: "@emilyUX", text: "Xavics delivered both quality and clarity. We now have a clean, fast app and a happy customer base.", image: "/images/emily.jpg" },
    { name: "Tariq Javed", username: "@tjaved", text: "Amazing communication and dedication. Xavics made sure every sprint was productive and aligned with our goals.", image: "/images/tariq.jpg" },
    { name: "Sarah Malik", username: "@sarahmalik", text: "If you're looking for a reliable dev team, Xavics should be your go-to. They're committed and highly capable.", image: "/images/sarah.jpg" },
    { name: "Arjun Verma", username: "@arjunv", text: "Thanks to Xavics, our SaaS dashboard looks professional and works flawlessly. A pleasure to work with!", image: "/images/arjun.jpg" },
    { name: "Laila Qureshi", username: "@laila_q", text: "Their attention to detail and UI work was amazing. Our client feedback has been overwhelmingly positive.", image: "/images/laila.jpg" },
    { name: "Michael Trent", username: "@mtrent_dev", text: "Xavics helped us scale our product with solid architecture and great performance optimizations.", image: "/images/michael.jpg" }
  ];

// Assign random ratings to each review
// const reviewsWithRatings = reviews.map(review => ({
//   ...review,
//   rating: getRandomRating()
// }));

const ReviewsSection = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const startScroll = () => {
    if (row1Ref.current) row1Ref.current.style.animation = "scrollLeft 15s linear infinite";
    if (row2Ref.current) row2Ref.current.style.animation = "scrollRight 15s linear infinite";
  };

  const stopScroll = () => {
    if (row1Ref.current) row1Ref.current.style.animation = "none";
    if (row2Ref.current) row2Ref.current.style.animation = "none";
  };

  return (
    <Box as="section" px={{ base: 5, md: 20 }} textAlign="center">
      {/* Section Tag */}
      <Text color="yellow.500" bg="#f6f7dd" fontSize="sm" fontWeight="bold" px={4} py={1} borderRadius="full" display="inline-block">
        Testimonials
      </Text>

      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={3}>
        What Our Clients Say
      </Text>
      <Text maxWidth="70%" textAlign="center" mx="auto" fontSize="md" color="gray.700">
        At EstateOne, we simplify property ownership. Whether you're looking to buy, manage, or sell real estate, we’ve got you covered.
      </Text>

      {/* Scrolling Container (Hover to start scrolling) */}
      <Box mt={8} maxW="1200px" mx="auto" overflow="hidden" position="relative" onMouseEnter={startScroll} onMouseLeave={stopScroll}>
        
        {/* Row 1 - Right to Left */}
        <Grid ref={row1Ref} templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={6} display="grid" width="200%">
  {reviews.slice(0, 6).map((review, index) => (
    <VStack key={index} p={5} bg="white" borderRadius="lg" boxShadow="md" align="start" textAlign="left" spacing={3} width="300px">
      
      {/* User Info (Image and Name at the Top) */}
      <HStack>
        <Image src={review.image} alt={review.name} boxSize="40px" borderRadius="full" />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold">{review.name}</Text>
          <Text fontSize="xs" color="gray.500">{review.username}</Text>
        </VStack>
      </HStack>

      {/* Review Text at the Bottom */}
      <Text fontSize="sm" color="gray.700" mt={4}>{review.text}</Text>

    </VStack>
  ))}
</Grid>

        {/* Row 2 - Left to Right */}
        <Grid ref={row2Ref} templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={6} display="grid" width="200%" mt={5}>
          {reviews.slice(6, 12).map((review, index) => ( // Changed reviewsWithRatings to reviews
            <VStack key={index} p={5} bg="white" borderRadius="lg" boxShadow="md" align="start" textAlign="left" spacing={3} width="300px">
      
            {/* User Info (Image and Name at the Top) */}
            <HStack>
              <Image src={review.image} alt={review.name} boxSize="40px" borderRadius="full" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{review.name}</Text>
                <Text fontSize="xs" color="gray.500">{review.username}</Text>
              </VStack>
            </HStack>
      
            {/* Review Text at the Bottom */}
            <Text fontSize="sm" color="gray.700" mt={4}>{review.text}</Text>
      
          </VStack>
          ))}
        </Grid>
      </Box>

      {/* Embedded CSS for Animations */}
      <style>
        {`
          @keyframes scrollLeft {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            from { transform: translateX(-50%); }
            to { transform: translateX(0%); }
          }
        `}
      </style>
    </Box>
  );
};

export default ReviewsSection;
