import React from 'react';
import { Alert, AlertIcon, AlertTitle, Image, Box } from '@chakra-ui/react';
import { GetPlatformQuery } from '@GraphQL/types';
import {
  FounderQuoteSection,
  HeaderInfo,
  BreadcrumbSection,
  InfoSection,
  ReviewSection,
} from '@Screens/PlatformScreen/Components';
import { DefaultContainer } from '@Components';
import { isNumber, snakeToStartCase } from '@Utils';
import { generateProfitModelDescription } from '@Screens/PlatformScreen/PlatformScreen.utils';

const PlatformScreen: React.FC<{ data: GetPlatformQuery; id: string }> = ({
  data,
  id,
}) => {
  if (!data?.platform)
    return (
      <DefaultContainer as="section" pt={{ base: 150, md: 200 }}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Platform not found, check your link?</AlertTitle>
        </Alert>
      </DefaultContainer>
    );

  const {
    platform: {
      name,
      founderMessage,
      website,
      category,
      tags,
      typeOfWork,
      numPeopleMakingMoney,
      platformPricing,
      requiresDigitalAudience,
      funding,
      founded,
      founderName,
      requirements,
      equipmentQualSkills,
      description,
      companyLogo,
      profitModel,
      profitModelDescription,
      averageEarnings: { amount },
    },
  } = data;

  return (
    <Box as="section" pt={150}>
      <DefaultContainer>
        <>
          <BreadcrumbSection platformName={name} />
          <HeaderInfo
            name={name}
            tags={tags || []}
            category={category}
            typeOfWork={typeOfWork}
            signUpLink={website}
          />
          <Image
            src={companyLogo}
            objectFit="cover"
            borderRadius="md"
            my={4}
            mx="auto"
            maxH="250px"
          />
          {founderMessage &&
            founderMessage !== '' &&
            founderName &&
            founderName !== '' && (
              <FounderQuoteSection
                quote={founderMessage}
                quoteAuthor={founderName}
                quoteAuthorPosition="Founder"
                quoteAuthorLink="https://google.com"
              />
            )}
          <InfoSection title="Description" body={[description]} />
          <InfoSection
            title="People Making Money on Platform"
            body={[numPeopleMakingMoney?.toLocaleString()]}
          />
          <InfoSection title="Monthly Earnings" body={[`$${amount}`]} />
          <InfoSection title="Platform Pricing" body={[platformPricing]} />
          <InfoSection
            title="Pricing Model"
            body={[snakeToStartCase(profitModel || '')]}
          />
          <InfoSection
            title="Cost"
            body={[
              generateProfitModelDescription(
                profitModel,
                profitModelDescription
              ),
            ]}
          />
          <InfoSection
            title="Requires Initial Audience"
            body={[snakeToStartCase(requiresDigitalAudience || '')]}
          />
          <InfoSection
            title="Equipment, Qualifications, & Skills"
            body={equipmentQualSkills.map(snakeToStartCase)}
          />
          <InfoSection title="Additional Requirements" body={requirements} />
          <InfoSection
            title="Funding"
            body={[
              isNumber(funding)
                ? `$${funding} Million`
                : snakeToStartCase(funding || ''),
            ]}
          />
          <InfoSection title="Founded" body={[founded]} />
        </>
      </DefaultContainer>
      <ReviewSection id={id} platformName={name} />
    </Box>
  );
};

export default PlatformScreen;
