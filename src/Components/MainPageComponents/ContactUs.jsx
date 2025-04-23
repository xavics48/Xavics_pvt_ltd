import React, { useState } from "react";
import {
  Box, Text, VStack, HStack, Input, Textarea, Button,
  FormControl, FormLabel, Flex, Icon, useToast
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const listItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", message: ""
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "All fields are required.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://estate-backend-lsps.onrender.com/api/inquiries/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your inquiry has been submitted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <Box
      as="section"
      py={{ base: 10, md: 16 }}
      px={{ base: 5, md: 20 }}
      mt={{ base: 20, md: 20 }}
      maxW="1200px"
      mx="auto"
    >
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" textAlign="center">
        Facing Challenges? We’ve Got <br /> You Covered
      </Text>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-around"
          mt={10}
          gap={5}
          flexWrap="wrap"
        >
          {/* LEFT SIDE - Support Info */}
          <VStack
            as={motion.div}
            align="start"
            boxShadow="sm"
            spacing={6}
            maxW="570px"
            minH="490px"
            width="100%"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div key={i} custom={i} variants={listItemVariants}>
                {i === 0 && (
                  <Box mt={5}>
                    <Text fontSize="lg" fontWeight="bold">Need a Custom Software Solution? We’ve Got You</Text>
                    <Text fontSize="sm" color="gray.600">
                      Whether you're starting from scratch or improving an existing system, our expert developers at Xavics guide you every step of the way — from planning to deployment — ensuring your business goals are met with precision.
                    </Text>
                  </Box>
                )}
                {i === 1 && (
                  <Box mt={5}>
                    <Text fontSize="lg" fontWeight="bold">Code Quality Audits & Performance Checks</Text>
                    <Text fontSize="sm" color="gray.600">
                      Concerned about your current software's performance or code quality? Our team performs in-depth reviews and testing to guarantee clean, scalable, and secure solutions.
                    </Text>
                  </Box>
                )}
                {i === 2 && (
                  <Box mt={5}>
                    <Text fontSize="lg" fontWeight="bold">Scalable Architecture for Startups & Enterprises</Text>
                    <Text fontSize="sm" color="gray.600">
                      Whether you're launching a startup or managing enterprise systems, Xavics crafts tailored software architectures that support long-term growth and adaptability.
                    </Text>
                  </Box>
                )}
                {i === 3 && (
                  <Box mt={5}>
                    <Text fontSize="lg" fontWeight="bold">End-to-End Project Management</Text>
                    <Text fontSize="sm" color="gray.600">
                      From ideation to post-launch support, we simplify software development for you. Our team handles planning, design, development, testing, and ongoing maintenance so you can focus on what matters — your business.
                    </Text>
                  </Box>
                )}
              </motion.div>
            ))}
          </VStack>

          {/* RIGHT SIDE - Form */}
          <motion.div variants={formVariants}>
            <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" maxW="450px" width="100%">
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="bold">Name</FormLabel>
                    <HStack border="1px solid #E2E8F0" borderRadius="md" p={2}>
                      <Icon as={FaUser} color="gray.500" />
                      <Input
                        name="name"
                        placeholder="Your Name"
                        border="none"
                        _focus={{ outline: "none" }}
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="bold">Phone No</FormLabel>
                    <HStack border="1px solid #E2E8F0" borderRadius="md" p={2}>
                      <Icon as={FaPhone} color="gray.500" />
                      <Input
                        name="phone"
                        placeholder="Your Phone Number"
                        type="tel"
                        border="none"
                        _focus={{ outline: "none" }}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="bold">Email Address</FormLabel>
                    <HStack border="1px solid #E2E8F0" borderRadius="md" p={2}>
                      <Icon as={FaEnvelope} color="gray.500" />
                      <Input
                        name="email"
                        placeholder="name@example.com"
                        type="email"
                        border="none"
                        _focus={{ outline: "none" }}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="bold">Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Enter your message..."
                      border="1px solid #E2E8F0"
                      borderRadius="md"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    bgGradient="linear(to-r, #fcb040, #f7941e)"
                    color="white"
                    fontWeight="bold"
                    _hover={{
                      bgGradient: "linear(to-r, #f7941e, #fcb040)",
                      transform: "translateY(-0.5px)",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                    }}
                    width="full"
                    isLoading={loading}
                  >
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          </motion.div>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default ContactSupport;
