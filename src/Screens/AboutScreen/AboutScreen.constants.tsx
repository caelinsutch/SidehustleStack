import React, { ReactElement } from 'react';
import { TextLink } from '@Components';
import { Text } from '@chakra-ui/react';

type AboutScreenText = {
  title: string;
  body: ReactElement;
};

type TeamText = {
  titleLink: string;
} & AboutScreenText;

const leftScreenText: AboutScreenText[] = [
  {
    title: 'What is Side Hustle Stack?',
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
        ends meet (
        <TextLink href="https://www.wonolo.com/blog/what-is-a-side-hustle/#:~:text=A%20side%20hustle%20is%20any,to%20one's%20full%2Dtime%20job.&text=While%20a%20part%2Dtime%20job,want%20to%20work%20and%20earn">
          source
        </TextLink>
        ).
      </Text>
    ),
  },
  {
    title:
      'How do I submit a new platform, updated data or corrections to the stack?',
    body: (
      <Text color="gray.700">
        Submit new platforms or data corrections{' '}
        <TextLink
          href="/submit"
          next
          display="inline-block"
          textDecoration="underline"
        >
          here
        </TextLink>
        .
      </Text>
    ),
  },
  {
    title: "How do I review a platform that I've worked on?",
    body: <Text color="gray.700">Submit a review on each platform page!</Text>,
  },
  {
    title: 'How do I get in touch with you?',
    body: (
      <Text color="gray.700">
        If you'd like to submit a review of a platform, or a new company to add
        to our database, please use the forms linked above.
        <br />
        For press/media inquiries or anything else, DM{' '}
        <TextLink textDecoration="underline" href="https://twitter.com/ljin18">
          @ljin18
        </TextLink>{' '}
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

const team: TeamText[] = [
  {
    title: 'Li Jin',
    titleLink: 'https://twitter.com/ljin18',
    body: (
      <Text color="gray.700">
        Investor at Atelier, author of{' '}
        <TextLink textDecoration="underline" href="https://li.substack.com/">
          Li's Newsletter
        </TextLink>
        ,{' '}
        <TextLink
          textDecoration="underline"
          href="https://open.spotify.com/show/22A34FI1a2rrt3xUY4mSbh"
        >
          podcaster
        </TextLink>{' '}
        and{' '}
        <TextLink
          textDecoration="underline"
          href="https://www.youtube.com/channel/UCssD_lb5-VivYtAp07bQ-uQ"
        >
          YouTuber
        </TextLink>
        . Passionate about lowering the barriers to entrepreneurship
      </Text>
    ),
  },
  {
    title: 'Lila Shroff',
    titleLink: 'https://twitter.com/lilashroff',
    body: (
      <Text color="gray.700">
        Stanford undergrad. Passionate about storytelling, audio and media
        innovation
      </Text>
    ),
  },
  {
    title: 'Brandon Handoko',
    titleLink: 'https://twitter.com/brndnwll',
    body: (
      <Text color="gray.700">
        Berkeley CogSci. Passionate about design, communities and creators
      </Text>
    ),
  },

  {
    title: 'Caelin Sutch',
    titleLink: 'https://www.caelinsutch.com/',
    body: (
      <Text color="gray.700">
        Berkeley MET. Passionate about product development and good software{' '}
      </Text>
    ),
  },
  {
    title: 'Stephen Krider',
    titleLink: 'https://github.com/skrider',
    body: (
      <Text color="gray.700">
        Berkeley MET. Passionate about building things{' '}
      </Text>
    ),
  },
];

export { leftScreenText, team };
