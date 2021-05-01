import React, { useEffect } from 'react';
import { GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { DefaultContainer, TextLink } from '@Components';
import { tweets } from '@Screens/AdvertiseScreen/AdvertiseScreen.constants';
import styled from '@emotion/styled';

const TweetContainer = styled(GridItem)`
  .twitter-tweet > iframe {
    width: 100%;
  }
`;

const AdvertiseScreen: React.FC = () => {
  useEffect(() => {
    const s = document.createElement('script');
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    s.setAttribute('async', 'true');
    document.head.appendChild(s);
  }, []);

  return (
    <DefaultContainer pt={{ base: 160, md: 120 }}>
      <Text
        as="h1"
        fontSize="4xl"
        textAlign="center"
        mx="auto"
        color="orange.500"
      >
        Advertise on Side Hustle Stack
      </Text>
      <Text as="h2" fontSize="2xl" mt={16}>
        Side Hustle Stack is the largest resource of its kind for flexible work
        opportunities.
      </Text>
      <Text as="h3" fontSize="xl" mt={4}>
        Our site is the starting point for millions of prospective gig workers,
        freelancers, side hustlers, and everyone seeking flexible income
        opportunities. Side Hustle Stack adds new platforms regularly and
        publishes a weekly newsletter read by thousands of subscribers deeply
        interested in new online tools and platforms. Companies have seen
        incredible growth almost immediately after being added.
      </Text>
      <Text as="h3" fontSize="xl" mt={2}>
        Check out our <TextLink href="/advertise.pdf">media kit</TextLink> or
        email{' '}
        <TextLink href="mailto:hello@sidehustlestack.co">
          hello@sidehustlestack.co
        </TextLink>{' '}
        for more information on advertising.
      </Text>
      <Text as="h3" fontSize="2xl" color="orange.500" mt={4}>
        Founder Testimonials
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={4} mt={4}>
        {tweets.map((tweet) => (
          <TweetContainer key={tweet.toString()}>{tweet}</TweetContainer>
        ))}
      </SimpleGrid>
    </DefaultContainer>
  );
};

export default AdvertiseScreen;
