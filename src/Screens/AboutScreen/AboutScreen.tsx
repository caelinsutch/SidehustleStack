import React from 'react';
import { DefaultContainer } from '@Components';
import { Grid, Text, GridItem, Box } from '@chakra-ui/react';
import { leftScreenText, team } from './AboutScreen.constants';

const AboutScreen: React.FC = () => (
  <DefaultContainer pt={{ base: 160, md: 120 }}>
    <Text as="h1" fontSize="4xl" textAlign="center" mx="auto">
      About Side Hustle Stack
    </Text>
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem colSpan={{ base: 3, md: 2 }}>
        {leftScreenText.map(({ title, body }) => (
          <Box key={title + body} mt={4}>
            <Text as="h2" fontSize="2xl" color="orange.400">
              {title}
            </Text>
            <Box color="gray.800" fontSize="lg" mt={2}>
              {body}
            </Box>
          </Box>
        ))}
      </GridItem>
      <GridItem
        mt={{ base: 4, md: 0 }}
        colSpan={{ base: 3, md: 1 }}
        textAlign={{ base: 'left', md: 'right' }}
        pl={{ base: 0, md: 8 }}
      >
        <Text
          fontSize="2xl"
          as="h2"
          mt={4}
          mx="auto"
          textAlign={{ base: 'center', md: 'right' }}
        >
          Side Hustle Stack is a labor of 💛 built by
        </Text>
        {team.map(({ title, body, titleLink }) => (
          <Box key={title + body} mt={4}>
            <Text as="a" href={titleLink} fontSize="2xl" color="orange.400">
              {title}
            </Text>
            <Box color="gray.800" mt={2} fontSize="lg">
              {body}
            </Box>
          </Box>
        ))}
      </GridItem>
    </Grid>
  </DefaultContainer>
);

export default AboutScreen;
