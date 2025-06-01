import React from "react";
import { Box, Heading, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";

const ServiceRefundPolicy = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto" mt={{ base: 6, md: 14 }} boxShadow="md" borderRadius="sm">
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
        Service & Refund Policy
      </Heading>
      
      <Text mb={4} fontStyle="italic">
        Effective: June 1, 2025
      </Text>
      
      <Text mb={6}>
        This combined policy outlines how Xavics Private Ltd. delivers software services and handles refunds. 
        Since we provide digital solutions rather than physical products, traditional "shipping" and "return" 
        concepts are adapted to software development services.
      </Text>

      {/* Service Delivery Section */}
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={8} mb={3} color="blue.700">
        Service Delivery Policy
      </Heading>
      
      <Heading as="h3" fontSize="xl" fontWeight="medium" mt={5} mb={2}>
        Development Process
      </Heading>
      <Text mb={4}>
        Our software development services follow an agile methodology:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem><strong>Requirement Analysis:</strong> 1 week for project scoping</ListItem>
        <ListItem><strong>Sprint Planning:</strong> 1-2 week development cycles</ListItem>
        <ListItem><strong>Milestone Deliveries:</strong> Regular feature releases</ListItem>
        <ListItem><strong>Quality Assurance:</strong> Continuous testing</ListItem>
        <ListItem><strong>Deployment:</strong> Cloud-based or on-premise implementation</ListItem>
      </UnorderedList>
       <Text mb={4} fontStyle="italic">
        Exact timelines are specific to individual projects.
      </Text>
      
      <Heading as="h3" fontSize="xl" fontWeight="medium" mt={5} mb={2}>
        Delivery Timeline
      </Heading>
      <Text mb={4}>
        Project durations vary based on complexity:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem><strong>Web Applications:</strong> 1-2 months</ListItem>
        <ListItem><strong>Mobile Apps:</strong> 1-2 months</ListItem>
        <ListItem><strong>AI Solutions:</strong> 2-3 months</ListItem>
        <ListItem><strong>Enterprise Systems:</strong> 1-3 months</ListItem>
      </UnorderedList>
      <Text mb={4} fontStyle="italic">
        Exact timelines are specified in individual project agreements.
      </Text>
      
      <Heading as="h3" fontSize="xl" fontWeight="medium" mt={5} mb={2}>
        Delivery Methods
      </Heading>
      <Text mb={4}>
        We deliver software through secure digital channels:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem>Private Git repositories (GitHub/GitLab)</ListItem>
        <ListItem>Containerized packages (Docker images)</ListItem>
        <ListItem>Cloud deployment (AWS, Azure, GCP)</ListItem>
        <ListItem>App store publication (for mobile apps)</ListItem>
      </UnorderedList>
      
      <Heading as="h3" fontSize="xl" fontWeight="medium" mt={5} mb={2}>
        Post-Delivery Support
      </Heading>
      <Text mb={4}>
        All projects include:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem><strong>20-60 day warranty period</strong> for defect resolution</ListItem>
        <ListItem><strong>Documentation:</strong> Technical and user guides</ListItem>
        <ListItem><strong>Optional:</strong> Ongoing maintenance packages</ListItem>
      </UnorderedList>
      
      {/* Refund Policy Section */}
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={10} mb={3} color="blue.700">
        Refund Policy
      </Heading>
      
      <Text mb={4}>
        Due to the custom nature of software development, our refund policy is designed to be fair while 
        respecting the resources invested in each project.
      </Text>
      
      <Heading as="h3" fontSize="xl" fontWeight="medium" mt={5} mb={2}>
        Eligibility for Refunds
      </Heading>
      <UnorderedList pl={6} mb={4}>
        <ListItem>
          <strong>Project Cancellation:</strong>
          <UnorderedList pl={4} mt={2}>
            <ListItem>Before development starts: 100% refund</ListItem>
            <ListItem>During requirements phase: 95% refund</ListItem>
            <ListItem>After development starts: Proportional refund for incomplete work</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem mt={3}>
          <strong>Service Retainers:</strong> Unused hours may be refunded if cancelled before renewal
        </ListItem>
      </UnorderedList>
      
      <Heading as="h3" fontSize="xl" fontWeight="medium" mt={5} mb={2}>
        Non-Refundable Items
      </Heading>
      <UnorderedList pl={6} mb={4}>
        <ListItem>Completed development milestones</ListItem>
        <ListItem>Third-party licensing costs</ListItem>
        <ListItem>Domain registration fees</ListItem>
        <ListItem>Cloud infrastructure expenses</ListItem>
      </UnorderedList>
      
      <Heading as="h3" fontSize="xl" fontWeight="medium" mt={5} mb={2}>
        Quality Guarantee
      </Heading>
      <Text mb={4}>
        We guarantee all software against defects for 60 days post-delivery. If deliverables don't meet 
        agreed specifications, we'll remedy issues at no additional cost.
      </Text>
      
      <Heading as="h3" fontSize="xl" fontWeight="medium" mt={5} mb={2}>
        Refund Process
      </Heading>
      <UnorderedList pl={6} mb={4}>
        <ListItem>Submit written request to accounts@xavics.com</ListItem>
        <ListItem>Processing time: 1-3 business days</ListItem>
        <ListItem>Refunds issued via original payment method</ListItem>
      </UnorderedList>
      
      {/* Contact Section */}
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={10} mb={3} color="blue.700">
        Contact Information
      </Heading>
      <Box bg="blue.50" p={4} borderRadius="md">
        <strong>Address:</strong> Chandni Chok, Rawalakot Azad Kashmir ,Pakistan
        <Text mt={2}>
          <strong>Phone:</strong> <Link href="tel:+923461553264" color="blue.500">+92 346 1553264</Link>
        </Text>
        <Text mt={2}>
          <strong>Email:</strong> <Link href="mailto:xavics48@gmail.com" color="blue.500">info@xavics.com</Link>
        </Text>
        <Text mt={2}>
          <strong>Support:</strong> <Link href="mailto:rehan10crkt@gmail.com" color="blue.500">support@xavics.com</Link>
        </Text>
        <Text mt={2}>
          <strong>Accounts:</strong> <Link href="mailto:ahsankshmiri@gmail.com" color="blue.500">accounts@xavics.com</Link>
        </Text>
      </Box>
      
      <Text mt={4} fontSize="sm" color="gray.600">
        Note: This policy is specific to Xavics software development services and supersedes any traditional 
        shipping/return policies that may not apply to digital service providers.
      </Text>
    </Box>
  );
};

export default ServiceRefundPolicy;