import React from "react";
import { Box, Heading, Text, ListItem, Link, UnorderedList } from "@chakra-ui/react";

const Terms = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto" mt={{ base: 6, md: 14 }} boxShadow="md" borderRadius="sm">
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
        Terms and Conditions
      </Heading>

      <Text mb={4}>
        Xavics Private Ltd. (hereinafter referred to as "Xavics") operates the website at
        <Link href="https://xavics.com" color="blue.500" isExternal> https://xavics.com</Link> (“Site”).
        This page outlines the terms and conditions which apply when you access our website or interact with our services. These terms may be updated without prior notice.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        1. Terms
      </Heading>
      <Text mb={4}>
        By accessing the website at
        <Link href="https://xavics.com" color="blue.500" isExternal> https://xavics.com</Link>,
        you agree to be bound by these terms of service, applicable laws and regulations, and acknowledge responsibility for compliance with local laws. If you do not agree with these terms, you are prohibited from using this site.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        2. Use License
      </Heading>
      <Text mb={4}>
        Xavics grants permission to temporarily view materials on this site for personal, non-commercial purposes only. Under this license, you may not:
      </Text>

      <UnorderedList pl={6} mb={4}>
        <ListItem>Modify or copy materials for reuse without written consent.</ListItem>
        <ListItem>Use materials for commercial purposes without a service agreement.</ListItem>
        <ListItem>Attempt to reverse engineer any software or solutions demonstrated.</ListItem>
        <ListItem>Remove proprietary labels from downloadable assets.</ListItem>
        <ListItem>Mirror content on external websites without permission.</ListItem>
      </UnorderedList>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        3. Intellectual Property
      </Heading>
      <Text mb={4}>
        All materials, content, software, trademarks, logos, and other intellectual property on this Site are the exclusive property of Xavics or its licensors. Except as expressly granted in the limited "Use License" above, no rights in any Xavics intellectual property are granted to you by accessing the Site.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        4. Privacy
      </Heading>
      <Text mb={4}>
        Your use of the Site is governed by our <Link href="/Privacy" color="blue.500">Privacy Policy</Link>, which explains how we collect, use, and protect your information. By using the Site, you consent to the practices described therein.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        5. Termination
      </Heading>
      <Text mb={4}>
        Xavics reserves the right to terminate or suspend your access to the Site immediately, without notice, for any breach of these Terms. The limited use license granted in Section 2 will terminate automatically if you violate any restrictions.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        6. User Submissions
      </Heading>
      <Text mb={4}>
        Any material you submit to the Site (feedback, comments, ideas) will be considered non-confidential. By providing submissions, you grant Xavics an unrestricted license to use, reproduce, and distribute them for any purpose. You agree not to submit illegal, obscene, threatening, or infringing content.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        7. Disclaimer
      </Heading>
      <Text mb={4}>
        The materials on this Site are provided on an “as is” and “as available” basis. Xavics makes no warranties, express or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        8. Limitations
      </Heading>
      <Text mb={4}>
        In no event shall Xavics be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use materials on this Site, even if Xavics has been notified orally or in writing of the possibility of such damage.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        9. Accuracy of Materials
      </Heading>
      <Text mb={4}>
        Content on the Site may include errors. Xavics does not guarantee all materials are current, complete, or accurate and may change them at any time without notice.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        10. Third-Party Links
      </Heading>
      <Text mb={4}>
        Our Site may link to third-party websites. Xavics is not responsible for the content or policies of these websites. The inclusion of any link does not imply endorsement by Xavics. Accessing linked sites is at your own risk.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        11. Services and Engagement
      </Heading>
      <Text mb={4}>
        Xavics offers custom software solutions including web development, mobile apps, e-commerce platforms, and AI-based innovations. Service engagements require separate contractual agreements specifying deliverables, pricing, timelines, and terms.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        12. Modifications
      </Heading>
      <Text mb={4}>
        Xavics may revise these terms at any time without notice. By using this Site, you agree to be bound by the current version of these Terms.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        13. Dispute Resolution
      </Heading>
      <Text mb={4}>
        Any disputes arising from these Terms shall first be resolved through good-faith negotiations. If unresolved within 30 days, disputes shall be settled by binding arbitration in Karachi, Pakistan under the rules of the Chartered Institute of Arbitrators Pakistan.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        14. Governing Law
      </Heading>
      <Text mb={4}>
        These terms are governed by the laws of Pakistan. You submit to the exclusive jurisdiction of courts in Pakistan for dispute resolution, except where arbitration applies under Section 13.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        15. Severability
      </Heading>
      <Text mb={4}>
        If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in full force and effect.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        16. Entire Agreement
      </Heading>
      <Text mb={4}>
        These Terms constitute the complete agreement between you and Xavics regarding Site usage, superseding all prior agreements and communications.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        17. Contact
      </Heading>
      <Text mb={4}>
        For inquiries regarding these Terms:
        <br />
        <strong>Email:</strong> <Link href="mailto:xavics48@gmail.com" color="blue.500">xavics48@gmail.com</Link>
        <br />
        <strong>Website:</strong> <Link href="https://xavics.com" color="blue.500" isExternal>https://xavics.com</Link>
        <br />
        <strong>Address:</strong> Chandni Chok, Rawalakot Azad Kashmir ,Pakistan
      </Text>
    </Box>
  );
};

export default Terms;