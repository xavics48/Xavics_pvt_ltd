import React, { useRef } from "react";
import { Box, Text, VStack, HStack, Image, Grid } from "@chakra-ui/react";
// import { FaStar } from "react-icons/fa";

// Function to generate a random rating between 4.0 and 5.0
// const getRandomRating = () => (Math.random() * (5 - 4) + 4).toFixed(1);

const reviews = [
    { name: "Divyaan", username: "@aisha_dev", text: "Wonderful working experience from the time of appointing the project till the delivery of project, always there for communication and delivered the product on time.", image: "/images/Dikhsa.jpg" },
    { name: "Rohan Mehta", username: "@Tetotia001", text: "We partnered with Xavics for a custom web solution, and their team was professional, responsive, and highly skilled.", image: "/images/Dvij.jpg" },
    { name: "Fatima Sheikh", username: "@fatima.codes", text: "Excellent experience with freelancers! They understood our business needs and translated them into a flawless platform.", image: "/images/fatima.jpg" },
    { name: "Daniel Lee", username: "@daniel_ui", text: "Good working experiance. Their backend knowledge and scalability approach were top-notch.", image: "/images/Nitish.jpg" },
    { name: "Neha Patel", username: "@neha_tech", text: "The team at Xavics is creative, supportive, and fast. From ideation to launch, they were with us every step.", image: "/images/neha.jpg" },
    { name: "Imran Siddiqui", username: "@imran_dev", text: "Our e-commerce website was built exactly how we envisioned it. Thanks to you for making it a reality.", image: "/images/Umang.jpg" },
    { name: "Emily Roberts", username: "@emilyUX", text: "They delivered both quality and clarity. We now have a clean, fast app and a happy customer base.", image: "/images/Urvashi.jpg" },
    { name: "Tariq Javed", username: "@tjaved", text: "Amazing communication and dedication. Xavics made sure every sprint was productive and aligned with our goals.", image: "/images/Naman.jpg" },
    { name: "Sarah Malik", username: "@sarahmalik", text: "Highly recommend them and look forward to working together again. They're committed and highly capable.", image: "/images/Renu.jpg" },
    { name: "Eva G", username: "@evaj98", text: "Got everything done, good knowledge just took longer then expected", image: "/images/Muskan.jpg" },
    { name: "Muhammad D", username: "@Mohammaddebree5", text: "Great opportunity to work with him and he is ready doing good job. I will keep working with him in the future.", image: "/images/karan.jpg" },
    { name: "Vineet J", username: "@foriox2444", text: "Great work on improving our lottery website's ticket generation feature! They handled our feedback well and delivered a smooth, user-friendly solution that exceeded our expectations. ", image: "/images/Samayak.jpg" }
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
    <Box as="section" px={{ base: 5, md: 20 }} textAlign="center" bg="#f9f9f9" >
      {/* Section Tag */}
     

      {/* Section Heading */}
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" >
        What Our Clients Say
      </Text>
      <Text maxWidth="70%" textAlign="center" mx="auto" fontSize="md" color="gray.700">
  At Xavics, we simplify software development. Whether you need to build, scale, or maintain a digital product, we’ve got you covered.
</Text>


      {/* Scrolling Container (Hover to start scrolling) */}
      <Box mt={8} maxW="1200px"  mx="auto"  overflow="hidden"  position="relative" onMouseEnter={startScroll} onMouseLeave={stopScroll}>
        
        {/* Row 1 - Right to Left */}
        <Grid ref={row1Ref} templateColumns="repeat(12, 1fr)" templateRows="1fr" gap={6} display="grid" width="200%">
  {reviews.slice(0, 6).map((review, index) => (
  <VStack
  key={index}
  p={5}
  bg="white"
  borderRadius="lg"
  align="start"
  textAlign="left"
  spacing={3}
  width="300px"
  mt={2}
  sx={{
    boxShadow: "0 0px 6px rgba(252, 176, 64, 0.5)", // yellow shadow
  }}
>
      
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
            <VStack key={index} mb={2} p={6} bg="white" borderRadius="lg"  sx={{
              boxShadow: "0 2px 6px rgba(252, 176, 64, 0.5)", // yellow shadow
            }} align="start" textAlign="left" spacing={3} width="300px">
      
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
