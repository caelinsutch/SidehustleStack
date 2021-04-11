import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import { Link, Text } from '@chakra-ui/react';
import { TextLink } from '@Components';

type AboutScreenText = {
  title: string;
  body: ReactElement;
};

const leftScreenText: AboutScreenText[] = [
  {
    title: 'What is Sidehustle Stack?',
    body: (
      <Text color="gray.700">
        Side Hustle Stack is a resource for finding various platforms to earn
        income—ranging from side hustles to building a full-time standalone
        business. With COVID-19, many people in our communities are looking for
        ways to supplement their income, and we wanted to create a resource for
        those looking for work. In recent years and months, there's been an
        explosion of online platforms for making money, and it can be
        overwhelming to navigate all of the options. This ecosystem benefits
        from a centralized database of information—and that's where Side Hustle
        Stack comes in! We're personally users of some of the platforms on this
        list and are always discovering and evaluating others.
      </Text>
    ),
  },
  {
    title: 'What is a side hustle?',
    body: (
      <Text color="gray.700">
        A side hustle is generally freelance or piecework in nature, providing a
        supplemental income. Side hustles are often things a person is
        passionate about, rather day a typical day job worked in order to make
        ends meet (source).
      </Text>
    ),
  },
  {
    title:
      'How do I submit a new platform, updated data or corrections to the stack?',
    body: (
      <Text color="gray.700">
        Submit new platforms or data corrections to our data{' '}
        <TextLink href="/submit" next>
          here
        </TextLink>
        .
      </Text>
    ),
  },
  {
    title: "How do I review a platform that I've worked on?",
    body: <Text color="gray.700">Submit a review on each platform page!.</Text>,
  },
  {
    title: 'How do I get in touch with you?',
    body: (
      <Text color="gray.700">
        If you'd like to submit a review of a platform, or a new company to add
        to our database, please use the forms linked above.
        <br />
        For press/media inquiries or anything else, DM{' '}
        <Link textDecoration="underline" href="https://twitter.com/ljin18">
          @ljin18
        </Link>{' '}
        on Twitter, or email{' '}
        <TextLink
          textDecoration="underline"
          href="mailto:partner@sidehustlestack.co"
        >
          partner@sidehustlestack.co
        </TextLink>
        .
      </Text>
    ),
  },
];

const team: AboutScreenText[] = [
  {
    title: 'Li Jin',
    body: (
      <Text color="gray.700">
        Investor at Atelier, author of Li’s Newsletter, podcaster & YouTuber.
        Passionate about lowering the barriers to entrepreneurship
      </Text>
    ),
  },
  {
    title: 'Lila Schroff',
    body: (
      <Text color="gray.700">
        Stanford undergrad. Passionate about storytelling, audio and media
        innovation
      </Text>
    ),
  },
  {
    title: 'Brandon Handoko',
    body: (
      <Text color="gray.700">
        Berkeley CogSci. Passionate about design, communities and creators
      </Text>
    ),
  },

  {
    title: 'Caelin Sutch',
    body: (
      <Text color="gray.700">
        Berkeley MET. Passionate about product development and good software{' '}
      </Text>
    ),
  },
];

export { leftScreenText, team };
