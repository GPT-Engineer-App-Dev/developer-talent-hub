import { Box, Flex, Input, Button, Text, Image, VStack, HStack } from '@chakra-ui/react';
import { FaSearch, FaUserCircle, FaBriefcase } from 'react-icons/fa';

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" p={5}>
      <Flex justifyContent="space-between" alignItems="center" bg="white" p={4} boxShadow="md" mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="brand.700">Developer Talent Marketplace</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaUserCircle />} colorScheme="blue">Profiles</Button>
          <Button leftIcon={<FaBriefcase />} colorScheme="blue">Jobs</Button>
        </HStack>
      </Flex>
      <VStack spacing={6}>
        <Flex>
          <Input placeholder="Search developers or jobs..." size="lg" />
          <Button ml={2} colorScheme="blue" size="lg" leftIcon={<FaSearch />}>Search</Button>
        </Flex>
        <Flex direction="column" alignItems="center" p={6} bg="white" boxShadow="md" borderRadius="md">
          <Image borderRadius="full" boxSize="150px" src="https://api.generated.photos/api/v1/faces?name=John+Doe&apiKey=YOUR_API_KEY" alt="Profile Image" mb={4} />
          <Text fontSize="xl" fontWeight="bold">John Doe</Text>
          <Text fontSize="md">Full Stack Developer</Text>
          <Button mt={4} colorScheme="blue">View Profile</Button>
        </Flex>
        <Flex direction="column" alignItems="center" p={6} bg="white" boxShadow="md" borderRadius="md">
          <Image borderRadius="full" boxSize="150px" src="https://api.generated.photos/api/v1/faces?name=Jane+Smith&apiKey=YOUR_API_KEY" alt="Jane Smith Profile Image" mb={4} />
          <Text fontSize="xl" fontWeight="bold">Jane Smith</Text>
          <Text fontSize="md">Data Scientist</Text>
          <Button mt={4} colorScheme="blue">View Profile</Button>
        </Flex>
        <Flex direction="column" alignItems="center" p={6} bg="white" boxShadow="md" borderRadius="md">
          <Image borderRadius="full" boxSize="150px" src="https://api.generated.photos/api/v1/faces?name=Ahmed+Khan&apiKey=YOUR_API_KEY" alt="Ahmed Khan Profile Image" mb={4} />
          <Text fontSize="xl" fontWeight="bold">Ahmed Khan</Text>
          <Text fontSize="md">Mobile Developer</Text>
          <Button mt={4} colorScheme="blue">View Profile</Button>
        </Flex>
        <Flex direction="column" alignItems="center" p={6} bg="white" boxShadow="md" borderRadius="md">
          <Image borderRadius="full" boxSize="150px" src="https://api.generated.photos/api/v1/faces?name=Emily+Zhao&apiKey=YOUR_API_KEY" alt="Emily Zhao Profile Image" mb={4} />
          <Text fontSize="xl" fontWeight="bold">Emily Zhao</Text>
          <Text fontSize="md">UI/UX Designer</Text>
          <Button mt={4} colorScheme="blue">View Profile</Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;