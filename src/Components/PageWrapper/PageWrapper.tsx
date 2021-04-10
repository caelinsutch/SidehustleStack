import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Footer, Navbar } from '@Components';
import Head from 'next/head';

export type PageWrapperProps = {
  backgroundImage?: BoxProps['backgroundImage'];
  backgroundPosition?: BoxProps['backgroundPosition'];
  backgroundSize?: BoxProps['backgroundSize'];
  title?: string;
  description?: string;
  metaImage?: string;
};

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title = 'Sidehustle Stack',
  description = 'Side Hustle Stack is a completely free resource to find platform-based work, ranging from gig work and side hustles to platforms that help you start a small business that can grow',
  metaImage = 'https://sidehustlestack-web.vercel.app/og-preview.png',
  ...props
}) => (
  <Box
    as="main"
    backgroundPosition="top"
    backgroundSize="contain"
    backgroundRepeat="no-repeat"
    {...props}
  >
    <Head>
      <title>Sidehustle Stack</title>
      <meta name="title" content={title} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sidehustlestack.co" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sidehustlestack.co" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={metaImage} />
    </Head>
    <Navbar />
    <Box mx="auto">{children}</Box>
    <Footer />
  </Box>
);

export default PageWrapper;
