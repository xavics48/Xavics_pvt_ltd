import React from "react";
import { Box, Heading, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto" mt={{ base: 6, md: 14 }} boxShadow="md" borderRadius="sm">
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
        Privacy Policy
      </Heading>
      
      <Text mb={4} fontStyle="italic">
        Last Updated: May 31, 2025
      </Text>
      
      <Text mb={4}>
        Xavics Private Ltd. ("we", "us", or "our") operates <Link href="https://xavics.com" color="blue.500" isExternal> https://xavics.com</Link> (the "Site").
        This page informs you of our policies regarding the collection, use, and disclosure of personal data 
        when you use our Site and the choices you have associated with that data.
      </Text>
      
      <Text mb={4}>
        We use your data to provide and improve the Site. By using the Site, you agree to the collection 
        and use of information in accordance with this policy.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        1. Information Collection
      </Heading>
      <Text mb={4}>
        While using our Site, we may collect minimal personal information that you voluntarily provide:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem><strong>Contact Information:</strong> Name and email address when you submit inquiries through our contact form</ListItem>
        <ListItem><strong>Usage Data:</strong> Information on how the Site is accessed and used (collected automatically)</ListItem>
      </UnorderedList>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        2. Usage Data
      </Heading>
      <Text mb={4}>
        We may automatically collect information sent by your browser including:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem>Your computer's Internet Protocol address (IP address)</ListItem>
        <ListItem>Browser type and version</ListItem>
        <ListItem>Pages visited on our Site</ListItem>
        <ListItem>Time and date of your visit</ListItem>
        <ListItem>Time spent on pages</ListItem>
      </UnorderedList>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        3. Tracking Technologies
      </Heading>
      <Text mb={4}>
        We use cookies and similar tracking technologies:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem>
          <strong>Essential Cookies:</strong> Necessary for site functionality
        </ListItem>
        <ListItem>
          <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site
          through services like Google Analytics
        </ListItem>
      </UnorderedList>
      <Text mb={4}>
        You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
      </Text>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        4. Use of Data
      </Heading>
      <Text mb={4}>
        We use collected data for:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem>Responding to your inquiries</ListItem>
        <ListItem>Monitoring Site usage and performance</ListItem>
        <ListItem>Detecting and preventing technical issues</ListItem>
        <ListItem>Improving user experience</ListItem>
        <ListItem>Compiling aggregated statistics about Site traffic</ListItem>
      </UnorderedList>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        5. Data Sharing
      </Heading>
      <Text mb={4}>
        We do not sell or rent your personal information. We may share data with:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem>
          <strong>Service Providers:</strong> Third-party companies that help us operate our Site 
          (e.g., hosting providers, analytics services)
        </ListItem>
        <ListItem>
          <strong>Legal Requirements:</strong> When required by law or to protect our rights
        </ListItem>
      </UnorderedList>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        6. Data Security
      </Heading>
      <Text mb={4}>
        We implement security measures to protect your data. However, no method of transmission over 
        the Internet is 100% secure. We cannot guarantee absolute security of your information.
      </Text>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        7. Your Data Rights
      </Heading>
      <Text mb={4}>
        You have the right to:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem>Access personal data we hold about you</ListItem>
        <ListItem>Request correction of inaccurate data</ListItem>
        <ListItem>Request deletion of your personal data</ListItem>
        <ListItem>Object to processing of your data</ListItem>
        <ListItem>Request transfer of your data</ListItem>
        <ListItem>Withdraw consent at any time</ListItem>
      </UnorderedList>
      <Text mb={4}>
        To exercise these rights, contact us at <Link href="mailto:xavics48@gmail.com" color="blue.500">xavics48@gmail.com</Link>.
      </Text>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        8. Third-Party Services
      </Heading>
      <Text mb={4}>
        Our Site uses:
      </Text>
      <UnorderedList pl={6} mb={4}>
        <ListItem>
          <strong>Google Analytics:</strong> For analyzing Site usage. Learn how Google uses data 
          at <Link href="https://policies.google.com/technologies/partner-sites" color="blue.500" isExternal>
            Google's Privacy Policy
          </Link>
        </ListItem>
        <ListItem>
          <strong>Vercel:</strong> Our hosting provider. View their privacy policy at 
          <Link href="https://vercel.com/legal/privacy-policy" color="blue.500" isExternal>
            Vercel Privacy Policy
          </Link>
        </ListItem>
      </UnorderedList>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        9. Children's Privacy
      </Heading>
      <Text mb={4}>
        Our Site does not address anyone under 13. We do not knowingly collect personal information 
        from children. If you are a parent and believe your child provided us with data, contact us.
      </Text>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        10. Policy Changes
      </Heading>
      <Text mb={4}>
        We may update this Privacy Policy. We will notify you by posting the new policy on this page 
        and updating the "Last Updated" date.
      </Text>
      
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        11. Contact Us
      </Heading>
      <Text mb={4}>
        For questions about this Privacy Policy:
        <br />
        <strong>Email:</strong> <Link href="mailto:xavics48@gmail.com" color="blue.500">xavics48@gmail.com</Link>
        <br />
        <strong>Website:</strong> <Link href="https://xavics.com" color="blue.500" isExternal>https://xavics.com</Link>
        <br />
     <strong>Phone:</strong> <Link href="tel:+923461553264" color="blue.500">+92 346 1553264</Link>
    <br />
        <strong>Address:</strong> Chandni Chok, Rawalakot Azad Kashmir ,Pakistan
      </Text>
    </Box>
  );
};

export default PrivacyPolicy;