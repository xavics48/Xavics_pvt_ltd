import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
  Collapse,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact Us", path: "/contact" },
];

const CustomNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <MotionBox
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0.5 }}
      transition={{ duration: 0.8 }}
      bgGradient="linear(to-b, gray.50, rgba(248,249,250,0))"
      px={4}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="999"
      w="100%"
    >
      <Flex
        h="70px"
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo */}
        <RouterLink to="/">
          <HStack spacing={2}>
            <Image
              src="/logo.png"
              alt="Logo"
              height={{ base: "50px", md: "80px" }}
              width={{ base: "50px", md: "80px" }}
              objectFit="contain"
            />
          </HStack>
        </RouterLink>

        {/* Hamburger Toggle */}
        <IconButton
          display={{ base: "flex", lg: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />

        {/* Desktop Nav Links */}
        <HStack
          as="nav"
          spacing={6}
          display={{ base: "none", lg: "flex" }}
        >
          {navLinks.map((link) => (
            <ChakraLink
              as={RouterLink}
              to={link.path}
              key={link.name}
              fontWeight="bold"
              fontSize="lg"
              color="black"
              position="relative"
              _hover={{
                color: "#fcb040",
                textDecoration: "none",
                transform: "translateY(-2px)",
              }}
              _after={{
                content: `""`,
                display: "block",
                height: "2px",
                width: "0",
                bg: "#ffc107",
                transition: "width 0.3s ease",
                mt: "2px",
              }}
              _hoverAfter={{
                width: "100%",
              }}
            >
              {link.name}
            </ChakraLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile Nav Collapse */}
      <Collapse in={isOpen} animateOpacity height={isOpen ? "auto" : 0}>
  <Stack
    as="nav"
    spacing={4}
    mt={4}
    bg="white"
    borderRadius="md"
    p={4}
    display={{ lg: "none" }}
    direction="column"
    alignItems="stretch"
    w="full"
  >
    {navLinks.map((link) => (
      <ChakraLink
        as={RouterLink}
        to={link.path}
        key={link.name}
        fontWeight="medium"
        color="black"
        textAlign="center"
        py={2}
        borderRadius="md"
        display="block" // Add this line
        _hover={{
          color: "#ffc107",
          bg: "gray.100",
          textDecoration: "none"
        }}
        onClick={onToggle}
      >
        {link.name}
      </ChakraLink>
    ))}
  </Stack>
</Collapse>
    </MotionBox>
  );
};

export default CustomNavbar;
